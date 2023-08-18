import{r as K,Z as Oe,j as g,t as Se,P as Te,s as V}from"./index-8d0cbd5a.js";import{C as ke,W as Ae,I as De,a as Ce,T as je,b as Pe,L as oe,g as xe,s as Ie,c as Ne,u as ze}from"./style-6b2ca076.js";import{f as Re}from"./forwardPropGuard-cc2dedbb.js";const Zt=K.memo(({children:r,title:t,questionText:e,linkTitle:s,linkPath:n})=>{const i=Oe(),a=()=>{n&&i(n,{replace:!0})},u=()=>{n&&i(Te.HOME,{replace:!0})};return g.jsx(ke,{children:g.jsx(Ae,{children:g.jsxs(De,{children:[g.jsx(Ce,{src:Se,alt:"twitter logo"}),g.jsx(je,{children:t}),r,e&&g.jsx(Pe,{children:e}),n&&g.jsx(oe,{onClick:a,children:s}),s==="Sign Up"&&g.jsx(oe,{onClick:u,children:"Go to Home"})]})})})}),Ve="/assets/eye-7c2d9643.svg",Ue="/assets/eye-close-d18ac031.svg",Me=V.label`
  width: ${({theme:r})=>r.valueInPercent.pr100};
  position: relative;
`,Ze=V("input").withConfig({shouldForwardProp:Re(["withError"])})`
  width: ${({theme:r})=>r.valueInPercent.pr100};
  max-width: ${({theme:r})=>r.valueInPx.px400};
  min-height: ${({theme:r})=>r.valueInPx.px40};
  padding: ${({theme:r})=>r.valueInPx.px5};

  font-size: ${({theme:r})=>r.fontSizes.l};
  font-weight: ${({theme:r})=>r.fontWeight.medium};
  line-height: ${({theme:r})=>r.valueInPx.px25};
  color: ${({theme:r})=>r.colors.fontColor};
  word-break: break-word;

  background: transparent;
  border: none;

  border-bottom: ${({withError:r,theme:t})=>r?`1px solid ${t.usedColors.red}`:`1px solid ${t.usedColors.gray}`};

  &:hover {
    border-bottom: 1px solid ${({theme:r})=>r.usedColors.gray};
    outline: none;
  }

  &:focus {
    border-bottom: 1px solid ${({theme:r})=>r.usedColors.gray};
    outline: none;
  }
`,qe=V.img`
  cursor: pointer;
  width: ${({theme:r})=>r.valueInPx.px16};
  height: ${({theme:r})=>r.valueInPx.px16};
  position: absolute;
  top: ${({theme:r})=>r.valueInPx.px25};
  right: ${({theme:r})=>r.valueInPercent.pr2};
  transform: translateY(${({theme:r})=>r.valueInPercent.pr50});
`,Le=V.div`
  color: ${({theme:r})=>r.usedColors.red};
`,qt=K.memo(({type:r,label:t,placeholder:e,error:s,register:n,nameForValidate:i,emailOrPhoneCheck:a})=>{const[u,o]=K.useState(r),l=()=>{o(u==="password"?"text":"password")},f=u==="password"?Ve:Ue,c=h=>{const m=/^[A-Za-z]/.test(h)||/@/.test(h),x=/^(\+|\d)[\d-]+$/.test(h);return m&&a&&a("email"),x&&a&&a("phone"),null},d={...i==="email"||i==="phone"?{...n(i,{onChange:h=>{c(h.target.value)}})}:{...n(i)}};return g.jsxs(Me,{children:[t,g.jsx(Ze,{withError:!!s,"data-cy":"input",...d,type:u,placeholder:e}),r==="password"&&g.jsx(qe,{onClick:l,src:f,alt:"icon eye"}),s&&g.jsx(Le,{"data-cy":"errorText",children:s})]})});function S(r){this._maxSize=r,this.clear()}S.prototype.clear=function(){this._size=0,this._values=Object.create(null)};S.prototype.get=function(r){return this._values[r]};S.prototype.set=function(r,t){return this._size>=this._maxSize&&this.clear(),r in this._values||this._size++,this._values[r]=t};var He=/[^.^\]^[]+|(?=\[\]|\.\.)/g,ye=/^\d+$/,Ge=/^\d/,Ye=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,Ke=/^\s*(['"]?)(.*?)(\1)\s*$/,Q=512,le=new S(Q),fe=new S(Q),ce=new S(Q),O={Cache:S,split:X,normalizePath:G,setter:function(r){var t=G(r);return fe.get(r)||fe.set(r,function(s,n){for(var i=0,a=t.length,u=s;i<a-1;){var o=t[i];if(o==="__proto__"||o==="constructor"||o==="prototype")return s;u=u[t[i++]]}u[t[i]]=n})},getter:function(r,t){var e=G(r);return ce.get(r)||ce.set(r,function(n){for(var i=0,a=e.length;i<a;)if(n!=null||!t)n=n[e[i++]];else return;return n})},join:function(r){return r.reduce(function(t,e){return t+(B(e)||ye.test(e)?"["+e+"]":(t?".":"")+e)},"")},forEach:function(r,t,e){Xe(Array.isArray(r)?r:X(r),t,e)}};function G(r){return le.get(r)||le.set(r,X(r).map(function(t){return t.replace(Ke,"$2")}))}function X(r){return r.match(He)||[""]}function Xe(r,t,e){var s=r.length,n,i,a,u;for(i=0;i<s;i++)n=r[i],n&&(Qe(n)&&(n='"'+n+'"'),u=B(n),a=!u&&/^\d+$/.test(n),t.call(e,n,u,a,i,r))}function B(r){return typeof r=="string"&&r&&["'",'"'].indexOf(r.charAt(0))!==-1}function We(r){return r.match(Ge)&&!r.match(ye)}function Je(r){return Ye.test(r)}function Qe(r){return!B(r)&&(We(r)||Je(r))}const Be=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,U=r=>r.match(Be)||[],M=r=>r[0].toUpperCase()+r.slice(1),ee=(r,t)=>U(r).join(t).toLowerCase(),ge=r=>U(r).reduce((t,e)=>`${t}${t?e[0].toUpperCase()+e.slice(1).toLowerCase():e.toLowerCase()}`,""),et=r=>M(ge(r)),tt=r=>ee(r,"_"),rt=r=>ee(r,"-"),st=r=>M(ee(r," ")),nt=r=>U(r).map(M).join(" ");var Y={words:U,upperFirst:M,camelCase:ge,pascalCase:et,snakeCase:tt,kebabCase:rt,sentenceCase:st,titleCase:nt},te={exports:{}};te.exports=function(r){return be(it(r),r)};te.exports.array=be;function be(r,t){var e=r.length,s=new Array(e),n={},i=e,a=at(t),u=ut(r);for(t.forEach(function(l){if(!u.has(l[0])||!u.has(l[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)n[i]||o(r[i],i,new Set);return s;function o(l,f,c){if(c.has(l)){var d;try{d=", node was:"+JSON.stringify(l)}catch{d=""}throw new Error("Cyclic dependency"+d)}if(!u.has(l))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(l));if(!n[f]){n[f]=!0;var h=a.get(l)||new Set;if(h=Array.from(h),f=h.length){c.add(l);do{var m=h[--f];o(m,u.get(m),c)}while(f);c.delete(l)}s[--e]=l}}}function it(r){for(var t=new Set,e=0,s=r.length;e<s;e++){var n=r[e];t.add(n[0]),t.add(n[1])}return Array.from(t)}function at(r){for(var t=new Map,e=0,s=r.length;e<s;e++){var n=r[e];t.has(n[0])||t.set(n[0],new Set),t.has(n[1])||t.set(n[1],new Set),t.get(n[0]).add(n[1])}return t}function ut(r){for(var t=new Map,e=0,s=r.length;e<s;e++)t.set(r[e],e);return t}var ot=te.exports;const lt=(void 0)(ot),ft=Object.prototype.toString,ct=Error.prototype.toString,dt=RegExp.prototype.toString,ht=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",pt=/^Symbol\((.*)\)(.*)$/;function mt(r){return r!=+r?"NaN":r===0&&1/r<0?"-0":""+r}function de(r,t=!1){if(r==null||r===!0||r===!1)return""+r;const e=typeof r;if(e==="number")return mt(r);if(e==="string")return t?`"${r}"`:r;if(e==="function")return"[Function "+(r.name||"anonymous")+"]";if(e==="symbol")return ht.call(r).replace(pt,"Symbol($1)");const s=ft.call(r).slice(8,-1);return s==="Date"?isNaN(r.getTime())?""+r:r.toISOString(r):s==="Error"||r instanceof Error?"["+ct.call(r)+"]":s==="RegExp"?dt.call(r):null}function D(r,t){let e=de(r,t);return e!==null?e:JSON.stringify(r,function(s,n){let i=de(this[s],t);return i!==null?i:n},2)}function we(r){return r==null?[]:[].concat(r)}let xt=/\$\{\s*(\w+)\s*\}/g;class y extends Error{static formatError(t,e){const s=e.label||e.path||"this";return s!==e.path&&(e=Object.assign({},e,{path:s})),typeof t=="string"?t.replace(xt,(n,i)=>D(e[i])):typeof t=="function"?t(e):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,e,s,n){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=e,this.path=s,this.type=n,this.errors=[],this.inner=[],we(t).forEach(i=>{y.isError(i)?(this.errors.push(...i.errors),this.inner=this.inner.concat(i.inner.length?i.inner:i)):this.errors.push(i)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,y)}}let E={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:r,type:t,value:e,originalValue:s})=>{const n=s!=null&&s!==e?` (cast from the value \`${D(s,!0)}\`).`:".";return t!=="mixed"?`${r} must be a \`${t}\` type, but the final value was: \`${D(e,!0)}\``+n:`${r} must match the configured type. The validated value was: \`${D(e,!0)}\``+n}},b={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},yt={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},W={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},gt={isValue:"${path} field must be ${value}"},J={noUnknown:"${path} field has unspecified keys: ${unknown}"},bt={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:E,string:b,number:yt,date:W,object:J,array:bt,boolean:gt});const re=r=>r&&r.__isYupSchema__;class z{static fromOptions(t,e){if(!e.then&&!e.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:s,then:n,otherwise:i}=e,a=typeof s=="function"?s:(...u)=>u.every(o=>o===s);return new z(t,(u,o)=>{var l;let f=a(...u)?n:i;return(l=f==null?void 0:f(o))!=null?l:o})}constructor(t,e){this.fn=void 0,this.refs=t,this.refs=t,this.fn=e}resolve(t,e){let s=this.refs.map(i=>i.getValue(e==null?void 0:e.value,e==null?void 0:e.parent,e==null?void 0:e.context)),n=this.fn(s,t,e);if(n===void 0||n===t)return t;if(!re(n))throw new TypeError("conditions must return a schema object");return n.resolve(e)}}const I={context:"$",value:"."};function wt(r,t){return new $(r,t)}class ${constructor(t,e={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===I.context,this.isValue=this.key[0]===I.value,this.isSibling=!this.isContext&&!this.isValue;let s=this.isContext?I.context:this.isValue?I.value:"";this.path=this.key.slice(s.length),this.getter=this.path&&O.getter(this.path,!0),this.map=e.map}getValue(t,e,s){let n=this.isContext?s:this.isValue?t:e;return this.getter&&(n=this.getter(n||{})),this.map&&(n=this.map(n)),n}cast(t,e){return this.getValue(t,e==null?void 0:e.parent,e==null?void 0:e.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}$.prototype.__isYupRef=!0;const _=r=>r==null;function k(r){function t({value:e,path:s="",options:n,originalValue:i,schema:a},u,o){const{name:l,test:f,params:c,message:d,skipAbsent:h}=r;let{parent:m,context:x,abortEarly:w=a.spec.abortEarly}=n;function C(p){return $.isRef(p)?p.getValue(e,m,x):p}function j(p={}){const T=Object.assign({value:e,originalValue:i,label:a.spec.label,path:p.path||s,spec:a.spec},c,p.params);for(const ue of Object.keys(T))T[ue]=C(T[ue]);const ae=new y(y.formatError(p.message||d,T),e,T.path,p.type||l);return ae.params=T,ae}const q=w?u:o;let P={path:s,parent:m,type:l,from:n.from,createError:j,resolve:C,options:n,originalValue:i,schema:a};const se=p=>{y.isError(p)?q(p):p?o(null):q(j())},L=p=>{y.isError(p)?q(p):u(p)},ne=h&&_(e);if(!n.sync){try{Promise.resolve(ne?!0:f.call(P,e,P)).then(se,L)}catch(p){L(p)}return}let H;try{var ie;if(H=ne?!0:f.call(P,e,P),typeof((ie=H)==null?void 0:ie.then)=="function")throw new Error(`Validation test of type: "${P.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(p){L(p);return}se(H)}return t.OPTIONS=r,t}function vt(r,t,e,s=e){let n,i,a;return t?(O.forEach(t,(u,o,l)=>{let f=o?u.slice(1,u.length-1):u;r=r.resolve({context:s,parent:n,value:e});let c=r.type==="tuple",d=l?parseInt(f,10):0;if(r.innerType||c){if(c&&!l)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(e&&d>=e.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${u}, in the path: ${t}. because there is no value at that index. `);n=e,e=e&&e[d],r=c?r.spec.types[d]:r.innerType}if(!l){if(!r.fields||!r.fields[f])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${r.type}")`);n=e,e=e&&e[f],r=r.fields[f]}i=f,a=o?"["+u+"]":"."+u}),{schema:r,parent:n,parentPath:i}):{parent:n,parentPath:t,schema:r}}class R extends Set{describe(){const t=[];for(const e of this.values())t.push($.isRef(e)?e.describe():e);return t}resolveAll(t){let e=[];for(const s of this.values())e.push(t(s));return e}clone(){return new R(this.values())}merge(t,e){const s=this.clone();return t.forEach(n=>s.add(n)),e.forEach(n=>s.delete(n)),s}}function A(r,t=new Map){if(re(r)||!r||typeof r!="object")return r;if(t.has(r))return t.get(r);let e;if(r instanceof Date)e=new Date(r.getTime()),t.set(r,e);else if(r instanceof RegExp)e=new RegExp(r),t.set(r,e);else if(Array.isArray(r)){e=new Array(r.length),t.set(r,e);for(let s=0;s<r.length;s++)e[s]=A(r[s],t)}else if(r instanceof Map){e=new Map,t.set(r,e);for(const[s,n]of r.entries())e.set(s,A(n,t))}else if(r instanceof Set){e=new Set,t.set(r,e);for(const s of r)e.add(A(s,t))}else if(r instanceof Object){e={},t.set(r,e);for(const[s,n]of Object.entries(r))e[s]=A(n,t)}else throw Error(`Unable to clone ${r}`);return e}class v{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new R,this._blacklist=new R,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(E.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(e=>{e.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const e=Object.create(Object.getPrototypeOf(this));return e.type=this.type,e._typeCheck=this._typeCheck,e._whitelist=this._whitelist.clone(),e._blacklist=this._blacklist.clone(),e.internalTests=Object.assign({},this.internalTests),e.exclusiveTests=Object.assign({},this.exclusiveTests),e.deps=[...this.deps],e.conditions=[...this.conditions],e.tests=[...this.tests],e.transforms=[...this.transforms],e.spec=A(Object.assign({},this.spec,t)),e}label(t){let e=this.clone();return e.spec.label=t,e}meta(...t){if(t.length===0)return this.spec.meta;let e=this.clone();return e.spec.meta=Object.assign(e.spec.meta||{},t[0]),e}withMutation(t){let e=this._mutate;this._mutate=!0;let s=t(this);return this._mutate=e,s}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let e=this,s=t.clone();const n=Object.assign({},e.spec,s.spec);return s.spec=n,s.internalTests=Object.assign({},e.internalTests,s.internalTests),s._whitelist=e._whitelist.merge(t._whitelist,t._blacklist),s._blacklist=e._blacklist.merge(t._blacklist,t._whitelist),s.tests=e.tests,s.exclusiveTests=e.exclusiveTests,s.withMutation(i=>{t.tests.forEach(a=>{i.test(a.OPTIONS)})}),s.transforms=[...e.transforms,...s.transforms],s}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let e=this;if(e.conditions.length){let s=e.conditions;e=e.clone(),e.conditions=[],e=s.reduce((n,i)=>i.resolve(n,t),e),e=e.resolve(t)}return e}resolveOptions(t){var e,s,n;return Object.assign({},t,{from:t.from||[],strict:(e=t.strict)!=null?e:this.spec.strict,abortEarly:(s=t.abortEarly)!=null?s:this.spec.abortEarly,recursive:(n=t.recursive)!=null?n:this.spec.recursive})}cast(t,e={}){let s=this.resolve(Object.assign({value:t},e)),n=e.assert==="ignore-optionality",i=s._cast(t,e);if(e.assert!==!1&&!s.isType(i)){if(n&&_(i))return i;let a=D(t),u=D(i);throw new TypeError(`The value of ${e.path||"field"} could not be cast to a value that satisfies the schema type: "${s.type}". 

attempted value: ${a} 
`+(u!==a?`result of cast: ${u}`:""))}return i}_cast(t,e){let s=t===void 0?t:this.transforms.reduce((n,i)=>i.call(this,n,t,this),t);return s===void 0&&(s=this.getDefault(e)),s}_validate(t,e={},s,n){let{path:i,originalValue:a=t,strict:u=this.spec.strict}=e,o=t;u||(o=this._cast(o,Object.assign({assert:!1},e)));let l=[];for(let f of Object.values(this.internalTests))f&&l.push(f);this.runTests({path:i,value:o,originalValue:a,options:e,tests:l},s,f=>{if(f.length)return n(f,o);this.runTests({path:i,value:o,originalValue:a,options:e,tests:this.tests},s,n)})}runTests(t,e,s){let n=!1,{tests:i,value:a,originalValue:u,path:o,options:l}=t,f=x=>{n||(n=!0,e(x,a))},c=x=>{n||(n=!0,s(x,a))},d=i.length,h=[];if(!d)return c([]);let m={value:a,originalValue:u,path:o,options:l,schema:this};for(let x=0;x<i.length;x++){const w=i[x];w(m,f,function(j){j&&(h=h.concat(j)),--d<=0&&c(h)})}}asNestedTest({key:t,index:e,parent:s,parentPath:n,originalParent:i,options:a}){const u=t??e;if(u==null)throw TypeError("Must include `key` or `index` for nested validations");const o=typeof u=="number";let l=s[u];const f=Object.assign({},a,{strict:!0,parent:s,value:l,originalValue:i[u],key:void 0,[o?"index":"key"]:u,path:o||u.includes(".")?`${n||""}[${l?u:`"${u}"`}]`:(n?`${n}.`:"")+t});return(c,d,h)=>this.resolve(f)._validate(l,f,d,h)}validate(t,e){let s=this.resolve(Object.assign({},e,{value:t}));return new Promise((n,i)=>s._validate(t,e,(a,u)=>{y.isError(a)&&(a.value=u),i(a)},(a,u)=>{a.length?i(new y(a,u)):n(u)}))}validateSync(t,e){let s=this.resolve(Object.assign({},e,{value:t})),n;return s._validate(t,Object.assign({},e,{sync:!0}),(i,a)=>{throw y.isError(i)&&(i.value=a),i},(i,a)=>{if(i.length)throw new y(i,t);n=a}),n}isValid(t,e){return this.validate(t,e).then(()=>!0,s=>{if(y.isError(s))return!1;throw s})}isValidSync(t,e){try{return this.validateSync(t,e),!0}catch(s){if(y.isError(s))return!1;throw s}}_getDefault(t){let e=this.spec.default;return e==null?e:typeof e=="function"?e.call(this,t):A(e)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,e){const s=this.clone({nullable:t});return s.internalTests.nullable=k({message:e,name:"nullable",test(n){return n===null?this.schema.spec.nullable:!0}}),s}optionality(t,e){const s=this.clone({optional:t});return s.internalTests.optionality=k({message:e,name:"optionality",test(n){return n===void 0?this.schema.spec.optional:!0}}),s}optional(){return this.optionality(!0)}defined(t=E.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=E.notNull){return this.nullability(!1,t)}required(t=E.required){return this.clone().withMutation(e=>e.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let e=this.clone();return e.transforms.push(t),e}test(...t){let e;if(t.length===1?typeof t[0]=="function"?e={test:t[0]}:e=t[0]:t.length===2?e={name:t[0],test:t[1]}:e={name:t[0],message:t[1],test:t[2]},e.message===void 0&&(e.message=E.default),typeof e.test!="function")throw new TypeError("`test` is a required parameters");let s=this.clone(),n=k(e),i=e.exclusive||e.name&&s.exclusiveTests[e.name]===!0;if(e.exclusive&&!e.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return e.name&&(s.exclusiveTests[e.name]=!!e.exclusive),s.tests=s.tests.filter(a=>!(a.OPTIONS.name===e.name&&(i||a.OPTIONS.test===n.OPTIONS.test))),s.tests.push(n),s}when(t,e){!Array.isArray(t)&&typeof t!="string"&&(e=t,t=".");let s=this.clone(),n=we(t).map(i=>new $(i));return n.forEach(i=>{i.isSibling&&s.deps.push(i.key)}),s.conditions.push(typeof e=="function"?new z(n,e):z.fromOptions(n,e)),s}typeError(t){let e=this.clone();return e.internalTests.typeError=k({message:t,name:"typeError",skipAbsent:!0,test(s){return this.schema._typeCheck(s)?!0:this.createError({params:{type:this.schema.type}})}}),e}oneOf(t,e=E.oneOf){let s=this.clone();return t.forEach(n=>{s._whitelist.add(n),s._blacklist.delete(n)}),s.internalTests.whiteList=k({message:e,name:"oneOf",skipAbsent:!0,test(n){let i=this.schema._whitelist,a=i.resolveAll(this.resolve);return a.includes(n)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:a}})}}),s}notOneOf(t,e=E.notOneOf){let s=this.clone();return t.forEach(n=>{s._blacklist.add(n),s._whitelist.delete(n)}),s.internalTests.blacklist=k({message:e,name:"notOneOf",test(n){let i=this.schema._blacklist,a=i.resolveAll(this.resolve);return a.includes(n)?this.createError({params:{values:Array.from(i).join(", "),resolved:a}}):!0}}),s}strip(t=!0){let e=this.clone();return e.spec.strip=t,e}describe(t){const e=(t?this.resolve(t):this).clone(),{label:s,meta:n,optional:i,nullable:a}=e.spec;return{meta:n,label:s,optional:i,nullable:a,default:e.getDefault(t),type:e.type,oneOf:e._whitelist.describe(),notOneOf:e._blacklist.describe(),tests:e.tests.map(o=>({name:o.OPTIONS.name,params:o.OPTIONS.params})).filter((o,l,f)=>f.findIndex(c=>c.name===o.name)===l)}}}v.prototype.__isYupSchema__=!0;for(const r of["validate","validateSync"])v.prototype[`${r}At`]=function(t,e,s={}){const{parent:n,parentPath:i,schema:a}=vt(this,t,e,s.context);return a[r](n&&n[i],Object.assign({},s,{parent:n,path:t}))};for(const r of["equals","is"])v.prototype[r]=v.prototype.oneOf;for(const r of["not","nope"])v.prototype[r]=v.prototype.notOneOf;let Ft=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Et=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,$t=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,_t=r=>_(r)||r===r.trim(),Ot={}.toString();function F(){return new ve}class ve extends v{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,e,s)=>{if(!s.spec.coerce||s.isType(t)||Array.isArray(t))return t;const n=t!=null&&t.toString?t.toString():t;return n===Ot?t:n})})}required(t){return super.required(t).withMutation(e=>e.test({message:t||E.required,name:"required",skipAbsent:!0,test:s=>!!s.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(e=>e.OPTIONS.name!=="required"),t))}length(t,e=b.length){return this.test({message:e,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(s){return s.length===this.resolve(t)}})}min(t,e=b.min){return this.test({message:e,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(s){return s.length>=this.resolve(t)}})}max(t,e=b.max){return this.test({name:"max",exclusive:!0,message:e,params:{max:t},skipAbsent:!0,test(s){return s.length<=this.resolve(t)}})}matches(t,e){let s=!1,n,i;return e&&(typeof e=="object"?{excludeEmptyString:s=!1,message:n,name:i}=e:n=e),this.test({name:i||"matches",message:n||b.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&s||a.search(t)!==-1})}email(t=b.email){return this.matches(Ft,{name:"email",message:t,excludeEmptyString:!0})}url(t=b.url){return this.matches(Et,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=b.uuid){return this.matches($t,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=b.trim){return this.transform(e=>e!=null?e.trim():e).test({message:t,name:"trim",test:_t})}lowercase(t=b.lowercase){return this.transform(e=>_(e)?e:e.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:e=>_(e)||e===e.toLowerCase()})}uppercase(t=b.uppercase){return this.transform(e=>_(e)?e:e.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:e=>_(e)||e===e.toUpperCase()})}}F.prototype=ve.prototype;var St=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function Tt(r){var t=[1,4,5,6,7,10,11],e=0,s,n;if(n=St.exec(r)){for(var i=0,a;a=t[i];++i)n[a]=+n[a]||0;n[2]=(+n[2]||1)-1,n[3]=+n[3]||1,n[7]=n[7]?String(n[7]).substr(0,3):0,(n[8]===void 0||n[8]==="")&&(n[9]===void 0||n[9]==="")?s=+new Date(n[1],n[2],n[3],n[4],n[5],n[6],n[7]):(n[8]!=="Z"&&n[9]!==void 0&&(e=n[10]*60+n[11],n[9]==="+"&&(e=0-e)),s=Date.UTC(n[1],n[2],n[3],n[4],n[5]+e,n[6],n[7]))}else s=Date.parse?Date.parse(r):NaN;return s}let kt=new Date(""),At=r=>Object.prototype.toString.call(r)==="[object Date]";class Z extends v{constructor(){super({type:"date",check(t){return At(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,e,s)=>!s.spec.coerce||s.isType(t)||t===null?t:(t=Tt(t),isNaN(t)?Z.INVALID_DATE:new Date(t)))})}prepareParam(t,e){let s;if($.isRef(t))s=t;else{let n=this.cast(t);if(!this._typeCheck(n))throw new TypeError(`\`${e}\` must be a Date or a value that can be \`cast()\` to a Date`);s=n}return s}min(t,e=W.min){let s=this.prepareParam(t,"min");return this.test({message:e,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(n){return n>=this.resolve(s)}})}max(t,e=W.max){let s=this.prepareParam(t,"max");return this.test({message:e,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(n){return n<=this.resolve(s)}})}}Z.INVALID_DATE=kt;Z.prototype;function Dt(r,t=[]){let e=[],s=new Set,n=new Set(t.map(([a,u])=>`${a}-${u}`));function i(a,u){let o=O.split(a)[0];s.add(o),n.has(`${u}-${o}`)||e.push([u,o])}for(const a of Object.keys(r)){let u=r[a];s.add(a),$.isRef(u)&&u.isSibling?i(u.path,a):re(u)&&"deps"in u&&u.deps.forEach(o=>i(o,a))}return lt.array(Array.from(s),e).reverse()}function he(r,t){let e=1/0;return r.some((s,n)=>{var i;if((i=t.path)!=null&&i.includes(s))return e=n,!0}),e}function Fe(r){return(t,e)=>he(r,t)-he(r,e)}const Ct=(r,t,e)=>{if(typeof r!="string")return r;let s=r;try{s=JSON.parse(r)}catch{}return e.isType(s)?s:r};function N(r){if("fields"in r){const t={};for(const[e,s]of Object.entries(r.fields))t[e]=N(s);return r.setFields(t)}if(r.type==="array"){const t=r.optional();return t.innerType&&(t.innerType=N(t.innerType)),t}return r.type==="tuple"?r.optional().clone({types:r.spec.types.map(N)}):"optional"in r?r.optional():r}const jt=(r,t)=>{const e=[...O.normalizePath(t)];if(e.length===1)return e[0]in r;let s=e.pop(),n=O.getter(O.join(e),!0)(r);return!!(n&&s in n)};let pe=r=>Object.prototype.toString.call(r)==="[object Object]";function Pt(r,t){let e=Object.keys(r.fields);return Object.keys(t).filter(s=>e.indexOf(s)===-1)}const It=Fe([]);function Ee(r){return new $e(r)}class $e extends v{constructor(t){super({type:"object",check(e){return pe(e)||typeof e=="function"}}),this.fields=Object.create(null),this._sortErrors=It,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,e={}){var s;let n=super._cast(t,e);if(n===void 0)return this.getDefault(e);if(!this._typeCheck(n))return n;let i=this.fields,a=(s=e.stripUnknown)!=null?s:this.spec.noUnknown,u=[].concat(this._nodes,Object.keys(n).filter(c=>!this._nodes.includes(c))),o={},l=Object.assign({},e,{parent:o,__validating:e.__validating||!1}),f=!1;for(const c of u){let d=i[c],h=c in n;if(d){let m,x=n[c];l.path=(e.path?`${e.path}.`:"")+c,d=d.resolve({value:x,context:e.context,parent:o});let w=d instanceof v?d.spec:void 0,C=w==null?void 0:w.strict;if(w!=null&&w.strip){f=f||c in n;continue}m=!e.__validating||!C?d.cast(n[c],l):n[c],m!==void 0&&(o[c]=m)}else h&&!a&&(o[c]=n[c]);(h!==c in o||o[c]!==n[c])&&(f=!0)}return f?o:n}_validate(t,e={},s,n){let{from:i=[],originalValue:a=t,recursive:u=this.spec.recursive}=e;e.from=[{schema:this,value:a},...i],e.__validating=!0,e.originalValue=a,super._validate(t,e,s,(o,l)=>{if(!u||!pe(l)){n(o,l);return}a=a||l;let f=[];for(let c of this._nodes){let d=this.fields[c];!d||$.isRef(d)||f.push(d.asNestedTest({options:e,key:c,parent:l,parentPath:e.path,originalParent:a}))}this.runTests({tests:f,value:l,originalValue:a,options:e},s,c=>{n(c.sort(this._sortErrors).concat(o),l)})})}clone(t){const e=super.clone(t);return e.fields=Object.assign({},this.fields),e._nodes=this._nodes,e._excludedEdges=this._excludedEdges,e._sortErrors=this._sortErrors,e}concat(t){let e=super.concat(t),s=e.fields;for(let[n,i]of Object.entries(this.fields)){const a=s[n];s[n]=a===void 0?i:a}return e.withMutation(n=>n.setFields(s,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let e={};return this._nodes.forEach(s=>{var n;const i=this.fields[s];let a=t;(n=a)!=null&&n.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),e[s]=i&&"getDefault"in i?i.getDefault(a):void 0}),e}setFields(t,e){let s=this.clone();return s.fields=t,s._nodes=Dt(t,e),s._sortErrors=Fe(Object.keys(t)),e&&(s._excludedEdges=e),s}shape(t,e=[]){return this.clone().withMutation(s=>{let n=s._excludedEdges;return e.length&&(Array.isArray(e[0])||(e=[e]),n=[...s._excludedEdges,...e]),s.setFields(Object.assign(s.fields,t),n)})}partial(){const t={};for(const[e,s]of Object.entries(this.fields))t[e]="optional"in s&&s.optional instanceof Function?s.optional():s;return this.setFields(t)}deepPartial(){return N(this)}pick(t){const e={};for(const s of t)this.fields[s]&&(e[s]=this.fields[s]);return this.setFields(e)}omit(t){const e=Object.assign({},this.fields);for(const s of t)delete e[s];return this.setFields(e)}from(t,e,s){let n=O.getter(t,!0);return this.transform(i=>{if(!i)return i;let a=i;return jt(i,t)&&(a=Object.assign({},i),s||delete a[t],a[e]=n(i)),a})}json(){return this.transform(Ct)}noUnknown(t=!0,e=J.noUnknown){typeof t!="boolean"&&(e=t,t=!0);let s=this.test({name:"noUnknown",exclusive:!0,message:e,test(n){if(n==null)return!0;const i=Pt(this.schema,n);return!t||i.length===0||this.createError({params:{unknown:i.join(", ")}})}});return s.spec.noUnknown=t,s}unknown(t=!0,e=J.noUnknown){return this.noUnknown(!t,e)}transformKeys(t){return this.transform(e=>{if(!e)return e;const s={};for(const n of Object.keys(e))s[t(n)]=e[n];return s})}camelCase(){return this.transformKeys(Y.camelCase)}snakeCase(){return this.transformKeys(Y.snakeCase)}constantCase(){return this.transformKeys(t=>Y.snakeCase(t).toUpperCase())}describe(t){let e=super.describe(t);e.fields={};for(const[n,i]of Object.entries(this.fields)){var s;let a=t;(s=a)!=null&&s.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[n]})),e.fields[n]=i.describe(a)}return e}}Ee.prototype=$e.prototype;var me=function(r,t,e){if(r&&"reportValidity"in r){var s=xe(e,t);r.setCustomValidity(s&&s.message||""),r.reportValidity()}},_e=function(r,t){var e=function(n){var i=t.fields[n];i&&i.ref&&"reportValidity"in i.ref?me(i.ref,n,r):i.refs&&i.refs.forEach(function(a){return me(a,n,r)})};for(var s in t.fields)e(s)},Nt=function(r,t){t.shouldUseNativeValidation&&_e(r,t);var e={};for(var s in r){var n=xe(t.fields,s);Ie(e,s,Object.assign(r[s]||{},{ref:n&&n.ref}))}return e};function zt(r,t,e){return t===void 0&&(t={}),e===void 0&&(e={}),function(s,n,i){try{return Promise.resolve(function(a,u){try{var o=(t.context,Promise.resolve(r[e.mode==="sync"?"validateSync":"validate"](s,Object.assign({abortEarly:!1},t,{context:n}))).then(function(l){return i.shouldUseNativeValidation&&_e({},i),{values:e.raw?s:l,errors:{}}}))}catch(l){return u(l)}return o&&o.then?o.then(void 0,u):o}(0,function(a){if(!a.inner)throw a;return{values:{},errors:Nt((u=a,o=!i.shouldUseNativeValidation&&i.criteriaMode==="all",(u.inner||[]).reduce(function(l,f){if(l[f.path]||(l[f.path]={message:f.message,type:f.type}),o){var c=l[f.path].types,d=c&&c[f.type];l[f.path]=Ne(f.path,o,l,f.type,d?[].concat(d,f.message):f.message)}return l},{})),i)};var u,o}))}catch(a){return Promise.reject(a)}}}const Rt={email:F().required("No email provided").email("Incorrect email").matches(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Incorrect email"),password:F().required("No password provided").min(6,"At least 6 characters"),confirmPwd:F().required("Please confirm password").oneOf([wt("password")],"Passwords does not match"),name:F().matches(/^[A-Za-z]+\s[A-Za-z]+$/,"Incorrect email").required("Enter your name").min(3,"At least 3 characters").max(22,"Maximum number of characters 22"),phone:F().matches(/^(?:\+?\d{1,3})?[\s-]?\(?\d{2,3}\)?[\s-]*?[0-9]{3}?[ \\-]*[0-9]{2}?[ \\-]*[0-9]{2}$/,"Invalid phone number format").required("Enter your phone number").min(11,"At least 11 characters"),day:F().required("Enter day"),month:F().required("Enter month"),year:F().required("Enter year")},Lt=(...r)=>{const t={},e=Object.entries(Rt);r.forEach(m=>e.forEach(([x,w])=>{x===m&&(t[m]=w)}));const s=Ee().shape(t),{register:n,formState:{errors:i,isValid:a},handleSubmit:u,reset:o}=ze({resolver:zt(s),mode:"onTouched"}),l=i.email?String(i.email.message):void 0,f=i.password?String(i.password.message):void 0,c=i.phone?String(i.phone.message):void 0,d=i.confirmPwd?String(i.confirmPwd.message):void 0,h=i.name?String(i.name.message):void 0;return{register:n,handleSubmit:u,reset:o,isValid:a,errorEmail:l,errorPassword:f,errorConfirmPwd:d,errorName:h,errorNumber:c}};export{Zt as F,qt as I,Lt as u};
