var et=Object.defineProperty,tt=Object.defineProperties;var nt=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var Ve=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable;var De=(s,e,t)=>e in s?et(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,I=(s,e)=>{for(var t in e||(e={}))Ve.call(e,t)&&De(s,t,e[t]);if(ue)for(var t of ue(e))ze.call(e,t)&&De(s,t,e[t]);return s},se=(s,e)=>tt(s,nt(e));var qe=(s,e)=>{var t={};for(var i in s)Ve.call(s,i)&&e.indexOf(i)<0&&(t[i]=s[i]);if(s!=null&&ue)for(var i of ue(s))e.indexOf(i)<0&&ze.call(s,i)&&(t[i]=s[i]);return t};import{n as ye,s as He,S as st,i as rt,e as it,c as at,a as ot,d as V,b as ve,f as B,g as z,t as ct,h as lt,j as ft,k as ut,l as P,m as dt,o as Y,p as T,q as F,r as j,u as pt,v as _t,w as Ee,x as q,y as ie,z as J,A as ae,B as oe,C as K,D as ce,E as Je}from"./chunks/index-35534cbb.js";import{s as ht,a as mt}from"./chunks/paths-396f020f.js";import{_ as de}from"./chunks/preload-helper-466a825b.js";const Z=[];function pe(s,e=ye){let t;const i=new Set;function l(n){if(He(s,n)&&(s=n,t)){const r=!Z.length;for(const a of i)a[1](),Z.push(a,s);if(r){for(let a=0;a<Z.length;a+=2)Z[a][0](Z[a+1]);Z.length=0}}}function c(n){l(n(s))}function u(n,r=ye){const a=[n,r];return i.add(a),i.size===1&&(t=e(l)||ye),n(s),()=>{i.delete(a),i.size===0&&(t(),t=null)}}return{set:l,update:c,subscribe:u}}function gt(s){let e,t,i;const l=[s[1]||{}];var c=s[0][0];function u(n){let r={};for(let a=0;a<l.length;a+=1)r=ce(r,l[a]);return{props:r}}return c&&(e=new c(u())),{c(){e&&q(e.$$.fragment),t=P()},l(n){e&&ie(e.$$.fragment,n),t=P()},m(n,r){e&&J(e,n,r),z(n,t,r),i=!0},p(n,r){const a=r&2?ae(l,[oe(n[1]||{})]):{};if(c!==(c=n[0][0])){if(e){Y();const d=e;T(d.$$.fragment,1,0,()=>{K(d,1)}),F()}c?(e=new c(u()),q(e.$$.fragment),j(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else c&&e.$set(a)},i(n){i||(e&&j(e.$$.fragment,n),i=!0)},o(n){e&&T(e.$$.fragment,n),i=!1},d(n){n&&V(t),e&&K(e,n)}}}function wt(s){let e,t,i;const l=[s[1]||{}];var c=s[0][0];function u(n){let r={$$slots:{default:[$t]},$$scope:{ctx:n}};for(let a=0;a<l.length;a+=1)r=ce(r,l[a]);return{props:r}}return c&&(e=new c(u(s))),{c(){e&&q(e.$$.fragment),t=P()},l(n){e&&ie(e.$$.fragment,n),t=P()},m(n,r){e&&J(e,n,r),z(n,t,r),i=!0},p(n,r){const a=r&2?ae(l,[oe(n[1]||{})]):{};if(r&525&&(a.$$scope={dirty:r,ctx:n}),c!==(c=n[0][0])){if(e){Y();const d=e;T(d.$$.fragment,1,0,()=>{K(d,1)}),F()}c?(e=new c(u(n)),q(e.$$.fragment),j(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else c&&e.$set(a)},i(n){i||(e&&j(e.$$.fragment,n),i=!0)},o(n){e&&T(e.$$.fragment,n),i=!1},d(n){n&&V(t),e&&K(e,n)}}}function bt(s){let e,t,i;const l=[s[2]||{}];var c=s[0][1];function u(n){let r={};for(let a=0;a<l.length;a+=1)r=ce(r,l[a]);return{props:r}}return c&&(e=new c(u())),{c(){e&&q(e.$$.fragment),t=P()},l(n){e&&ie(e.$$.fragment,n),t=P()},m(n,r){e&&J(e,n,r),z(n,t,r),i=!0},p(n,r){const a=r&4?ae(l,[oe(n[2]||{})]):{};if(c!==(c=n[0][1])){if(e){Y();const d=e;T(d.$$.fragment,1,0,()=>{K(d,1)}),F()}c?(e=new c(u()),q(e.$$.fragment),j(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else c&&e.$set(a)},i(n){i||(e&&j(e.$$.fragment,n),i=!0)},o(n){e&&T(e.$$.fragment,n),i=!1},d(n){n&&V(t),e&&K(e,n)}}}function yt(s){let e,t,i;const l=[s[2]||{}];var c=s[0][1];function u(n){let r={$$slots:{default:[vt]},$$scope:{ctx:n}};for(let a=0;a<l.length;a+=1)r=ce(r,l[a]);return{props:r}}return c&&(e=new c(u(s))),{c(){e&&q(e.$$.fragment),t=P()},l(n){e&&ie(e.$$.fragment,n),t=P()},m(n,r){e&&J(e,n,r),z(n,t,r),i=!0},p(n,r){const a=r&4?ae(l,[oe(n[2]||{})]):{};if(r&521&&(a.$$scope={dirty:r,ctx:n}),c!==(c=n[0][1])){if(e){Y();const d=e;T(d.$$.fragment,1,0,()=>{K(d,1)}),F()}c?(e=new c(u(n)),q(e.$$.fragment),j(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else c&&e.$set(a)},i(n){i||(e&&j(e.$$.fragment,n),i=!0)},o(n){e&&T(e.$$.fragment,n),i=!1},d(n){n&&V(t),e&&K(e,n)}}}function vt(s){let e,t,i;const l=[s[3]||{}];var c=s[0][2];function u(n){let r={};for(let a=0;a<l.length;a+=1)r=ce(r,l[a]);return{props:r}}return c&&(e=new c(u())),{c(){e&&q(e.$$.fragment),t=P()},l(n){e&&ie(e.$$.fragment,n),t=P()},m(n,r){e&&J(e,n,r),z(n,t,r),i=!0},p(n,r){const a=r&8?ae(l,[oe(n[3]||{})]):{};if(c!==(c=n[0][2])){if(e){Y();const d=e;T(d.$$.fragment,1,0,()=>{K(d,1)}),F()}c?(e=new c(u()),q(e.$$.fragment),j(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else c&&e.$set(a)},i(n){i||(e&&j(e.$$.fragment,n),i=!0)},o(n){e&&T(e.$$.fragment,n),i=!1},d(n){n&&V(t),e&&K(e,n)}}}function $t(s){let e,t,i,l;const c=[yt,bt],u=[];function n(r,a){return r[0][2]?0:1}return e=n(s),t=u[e]=c[e](s),{c(){t.c(),i=P()},l(r){t.l(r),i=P()},m(r,a){u[e].m(r,a),z(r,i,a),l=!0},p(r,a){let d=e;e=n(r),e===d?u[e].p(r,a):(Y(),T(u[d],1,1,()=>{u[d]=null}),F(),t=u[e],t?t.p(r,a):(t=u[e]=c[e](r),t.c()),j(t,1),t.m(i.parentNode,i))},i(r){l||(j(t),l=!0)},o(r){T(t),l=!1},d(r){u[e].d(r),r&&V(i)}}}function Ke(s){let e,t=s[5]&&Be(s);return{c(){e=it("div"),t&&t.c(),this.h()},l(i){e=at(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var l=ot(e);t&&t.l(l),l.forEach(V),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),B(e,"position","absolute"),B(e,"left","0"),B(e,"top","0"),B(e,"clip","rect(0 0 0 0)"),B(e,"clip-path","inset(50%)"),B(e,"overflow","hidden"),B(e,"white-space","nowrap"),B(e,"width","1px"),B(e,"height","1px")},m(i,l){z(i,e,l),t&&t.m(e,null)},p(i,l){i[5]?t?t.p(i,l):(t=Be(i),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(i){i&&V(e),t&&t.d()}}}function Be(s){let e;return{c(){e=ct(s[6])},l(t){e=lt(t,s[6])},m(t,i){z(t,e,i)},p(t,i){i&64&&ft(e,t[6])},d(t){t&&V(e)}}}function kt(s){let e,t,i,l,c;const u=[wt,gt],n=[];function r(d,R){return d[0][1]?0:1}e=r(s),t=n[e]=u[e](s);let a=s[4]&&Ke(s);return{c(){t.c(),i=ut(),a&&a.c(),l=P()},l(d){t.l(d),i=dt(d),a&&a.l(d),l=P()},m(d,R){n[e].m(d,R),z(d,i,R),a&&a.m(d,R),z(d,l,R),c=!0},p(d,[R]){let y=e;e=r(d),e===y?n[e].p(d,R):(Y(),T(n[y],1,1,()=>{n[y]=null}),F(),t=n[e],t?t.p(d,R):(t=n[e]=u[e](d),t.c()),j(t,1),t.m(i.parentNode,i)),d[4]?a?a.p(d,R):(a=Ke(d),a.c(),a.m(l.parentNode,l)):a&&(a.d(1),a=null)},i(d){c||(j(t),c=!0)},o(d){T(t),c=!1},d(d){n[e].d(d),d&&V(i),a&&a.d(d),d&&V(l)}}}function Et(s,e,t){let{stores:i}=e,{page:l}=e,{components:c}=e,{props_0:u=null}=e,{props_1:n=null}=e,{props_2:r=null}=e;pt("__svelte__",i),_t(i.page.notify);let a=!1,d=!1,R=null;return Ee(()=>{const y=i.page.subscribe(()=>{a&&(t(5,d=!0),t(6,R=document.title||"untitled page"))});return t(4,a=!0),y}),s.$$set=y=>{"stores"in y&&t(7,i=y.stores),"page"in y&&t(8,l=y.page),"components"in y&&t(0,c=y.components),"props_0"in y&&t(1,u=y.props_0),"props_1"in y&&t(2,n=y.props_1),"props_2"in y&&t(3,r=y.props_2)},s.$$.update=()=>{s.$$.dirty&384&&i.page.set(l)},[c,u,n,r,a,d,R,i,l]}class Rt extends st{constructor(e){super(),rt(this,e,Et,kt,He,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const Lt={},Le=[()=>de(()=>import("./pages/__layout.svelte-ce0bece6.js"),["pages/__layout.svelte-ce0bece6.js","assets/pages/__layout.svelte-28c44ad7.css","chunks/index-35534cbb.js","chunks/paths-396f020f.js"]),()=>de(()=>import("./error.svelte-774041fc.js"),["error.svelte-774041fc.js","chunks/index-35534cbb.js"]),()=>de(()=>import("./pages/about.svelte-d94199cc.js"),["pages/about.svelte-d94199cc.js","chunks/index-35534cbb.js","chunks/paths-396f020f.js"]),()=>de(()=>import("./pages/index.svelte-8b2fe338.js"),["pages/index.svelte-8b2fe338.js","chunks/preload-helper-466a825b.js","chunks/index-35534cbb.js"])],St={"":[[0,3],[1]],about:[[0,2],[1]]};function Me(s){return s instanceof Error||s&&s.name&&s.message?s:new Error(JSON.stringify(s))}function We(s){if(s.fallthrough)throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");if("maxage"in s)throw new Error("maxage should be replaced with cache: { maxage }");const e=s.status&&s.status>=400&&s.status<=599&&!s.redirect;if(s.error||e){const t=s.status;if(!s.error&&e)return{status:t||500,error:new Error};const i=typeof s.error=="string"?new Error(s.error):s.error;return i instanceof Error?!t||t<400||t>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:i}):{status:t,error:i}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof i}"`)}}if(s.redirect){if(!s.status||Math.floor(s.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof s.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(s.dependencies&&(!Array.isArray(s.dependencies)||s.dependencies.some(t=>typeof t!="string")))return{status:500,error:new Error('"dependencies" property returned from load() must be of type string[]')};if(s.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return s}function Ut(s,e){return s==="/"||e==="ignore"?s:e==="never"?s.endsWith("/")?s.slice(0,-1):s:e==="always"&&!s.endsWith("/")?s+"/":s}function At(s){let e=5381,t=s.length;if(typeof s=="string")for(;t;)e=e*33^s.charCodeAt(--t);else for(;t;)e=e*33^s[--t];return(e>>>0).toString(36)}function Ye(s){let e=s.baseURI;if(!e){const t=s.getElementsByTagName("base");e=t.length?t[0].href:s.URL}return e}function Re(){return{x:pageXOffset,y:pageYOffset}}function Fe(s){return s.composedPath().find(t=>t instanceof Node&&t.nodeName.toUpperCase()==="A")}function Ge(s){return s instanceof SVGAElement?new URL(s.href.baseVal,document.baseURI):new URL(s.href)}function Xe(s){const e=pe(s);let t=!0;function i(){t=!0,e.update(u=>u)}function l(u){t=!1,e.set(u)}function c(u){let n;return e.subscribe(r=>{(n===void 0||t&&r!==n)&&u(n=r)})}return{notify:i,set:l,subscribe:c}}function Nt(){const{set:s,subscribe:e}=pe(!1),t="1652389783850";let i;async function l(){clearTimeout(i);const u=await fetch(`${mt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(u.ok){const{version:n}=await u.json(),r=n!==t;return r&&(s(!0),clearTimeout(i)),r}else throw new Error(`Version check failed: ${u.status}`)}return{subscribe:e,check:l}}function Ot(s,e){let i=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof s=="string"?s:s.url)}]`;e&&typeof e.body=="string"&&(i+=`[sveltekit\\:data-body="${At(e.body)}"]`);const l=document.querySelector(i);if(l&&l.textContent){const c=JSON.parse(l.textContent),{body:u}=c,n=qe(c,["body"]);return Promise.resolve(new Response(u,n))}return fetch(s,e)}const xt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function It(s){const e=[],t=[];let i=!0;return{pattern:s===""?/^\/$/:new RegExp(`^${decodeURIComponent(s).split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((c,u,n)=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(r)return e.push(r[1]),t.push(r[2]),"(?:/(.*))?";const a=u===n.length-1;return c&&"/"+c.split(/\[(.+?)\]/).map((d,R)=>{if(R%2){const[,y,H,G]=xt.exec(d);return e.push(H),t.push(G),y?"(.*?)":"([^/]+?)"}return a&&d.includes(".")&&(i=!1),d.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${i?"/?":""}$`),names:e,types:t}}function Pt(s,e,t,i){const l={};for(let c=0;c<e.length;c+=1){const u=e[c],n=t[c],r=s[c+1]||"";if(n){const a=i[n];if(!a)throw new Error(`Missing "${n}" param matcher`);if(!a(r))return}l[u]=r}return l}function Tt(s,e,t){return Object.entries(e).map(([l,[c,u,n]])=>{const{pattern:r,names:a,types:d}=It(l);return{id:l,exec:R=>{const y=r.exec(R);if(y)return Pt(y,a,d,t)},a:c.map(R=>s[R]),b:u.map(R=>s[R]),has_shadow:!!n}})}const Qe="sveltekit:scroll",M="sveltekit:index",$e=Tt(Le,St,Lt),jt=Le[0](),Ct=Le[1](),Ze={};let re={};try{re=JSON.parse(sessionStorage[Qe])}catch{}function ke(s){re[s]=Re()}function Dt({target:s,session:e,base:t,trailing_slash:i}){var je;const l=new Map,c=[],u={url:Xe({}),page:Xe({}),navigating:pe(null),session:pe(e),updated:Nt()},n={id:null,promise:null},r={before_navigate:[],after_navigate:[]};let a={branch:[],error:null,session_id:0,stuff:Ze,url:null},d=!1,R=!0,y=!1,H=1,G=null,Se,Ue,Ae=!1;u.session.subscribe(async o=>{Ue=o,Ae&&(H+=1,ge(new URL(location.href),[],!0))}),Ae=!0;let X=!0,C=(je=history.state)==null?void 0:je[M];C||(C=Date.now(),history.replaceState(se(I({},history.state),{[M]:C}),"",location.href));const _e=re[C];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let he=!1,me,Ne;async function Oe(o,{noscroll:p=!1,replaceState:w=!1,keepfocus:f=!1,state:_={}},b){const h=new URL(o,Ye(document));if(X)return be({url:h,scroll:p?Re():null,keepfocus:f,redirect_chain:b,details:{state:_,replaceState:w},accepted:()=>{},blocked:()=>{}});await te(h)}async function xe(o){const p=Te(o);if(!p)throw new Error("Attempted to prefetch a URL that does not belong to this app");return n.promise=Pe(p,!1),n.id=p.id,n.promise}async function ge(o,p,w,f){var g,$,L;const _=Te(o),b=Ne={};let h=_&&await Pe(_,w);if(!h&&o.origin===location.origin&&o.pathname===location.pathname&&(h=await ee({status:404,error:new Error(`Not found: ${o.pathname}`),url:o,routeId:null})),!h)return await te(o),!1;if(Ne!==b)return!1;if(c.length=0,h.redirect)if(p.length>10||p.includes(o.pathname))h=await ee({status:500,error:new Error("Redirect loop"),url:o,routeId:null});else return X?Oe(new URL(h.redirect,o).href,{},[...p,o.pathname]):await te(new URL(h.redirect,location.href)),!1;else(($=(g=h.props)==null?void 0:g.page)==null?void 0:$.status)>=400&&await u.updated.check()&&await te(o);if(y=!0,f&&f.details){const{details:k}=f,E=k.replaceState?0:1;k.state[M]=C+=E,history[k.replaceState?"replaceState":"pushState"](k.state,"",o)}if(d?(a=h.state,Se.$set(h.props)):Ie(h),f){const{scroll:k,keepfocus:E}=f;if(!E){const m=document.body,A=m.getAttribute("tabindex");(L=getSelection())==null||L.removeAllRanges(),m.tabIndex=-1,m.focus(),A!==null?m.setAttribute("tabindex",A):m.removeAttribute("tabindex")}if(await Je(),R){const m=o.hash&&document.getElementById(o.hash.slice(1));k?scrollTo(k.x,k.y):m?m.scrollIntoView():scrollTo(0,0)}}else await Je();n.promise=null,n.id=null,R=!0,y=!1,h.props.page&&(me=h.props.page);const v=h.state.branch[h.state.branch.length-1];return X=(v==null?void 0:v.module.router)!==!1,!0}function Ie(o){a=o.state;const p=document.querySelector("style[data-sveltekit]");if(p&&p.remove(),me=o.props.page,Se=new Rt({target:s,props:se(I({},o.props),{stores:u}),hydrate:!0}),d=!0,X){const w={from:null,to:new URL(location.href)};r.after_navigate.forEach(f=>f(w))}}async function we({url:o,params:p,stuff:w,branch:f,status:_,error:b,routeId:h}){var m,A;const v=f.filter(Boolean),g=v.find(U=>{var O;return(O=U.loaded)==null?void 0:O.redirect}),$={redirect:(m=g==null?void 0:g.loaded)==null?void 0:m.redirect,state:{url:o,params:p,branch:f,error:b,stuff:w,session_id:H},props:{components:v.map(U=>U.module.default)}};for(let U=0;U<v.length;U+=1){const O=v[U].loaded;$.props[`props_${U}`]=O?await O.props:null}if(!a.url||o.href!==a.url.href||a.error!==b||a.stuff!==w){$.props.page={error:b,params:p,routeId:h,status:_,stuff:w,url:o};const U=(O,S)=>{Object.defineProperty($.props.page,O,{get:()=>{throw new Error(`$page.${O} has been replaced by $page.url.${S}`)}})};U("origin","origin"),U("path","pathname"),U("query","searchParams")}const k=v[v.length-1],E=(A=k==null?void 0:k.loaded)==null?void 0:A.cache;if(E){const U=o.pathname+o.search;let O=!1;const S=()=>{l.get(U)===$&&l.delete(U),x(),clearTimeout(N)},N=setTimeout(S,E.maxage*1e3),x=u.session.subscribe(()=>{O&&S()});O=!0,l.set(U,$)}return $}async function Q({status:o,error:p,module:w,url:f,params:_,stuff:b,props:h,routeId:v}){const g={module:w,uses:{params:new Set,url:!1,session:!1,stuff:!1,dependencies:new Set},loaded:null,stuff:b};function $(E){const{href:m}=new URL(E,f);g.uses.dependencies.add(m)}h&&g.uses.dependencies.add(f.href);const L={};for(const E in _)Object.defineProperty(L,E,{get(){return g.uses.params.add(E),_[E]},enumerable:!0});const k=Ue;if(w.load){const E={routeId:v,params:L,props:h||{},get url(){return g.uses.url=!0,f},get session(){return g.uses.session=!0,k},get stuff(){return g.uses.stuff=!0,I({},b)},fetch(A,U){const O=typeof A=="string"?A:A.url;return $(O),d?fetch(A,U):Ot(A,U)},status:o!=null?o:null,error:p!=null?p:null},m=await w.load.call(null,E);if(!m)throw new Error("load function must return a value");g.loaded=We(m),g.loaded.stuff&&(g.stuff=g.loaded.stuff),g.loaded.dependencies&&g.loaded.dependencies.forEach($)}else h&&(g.loaded=We({props:h}));return g}async function Pe({id:o,url:p,params:w,route:f},_){var A,U,O;if(n.id===o&&n.promise)return n.promise;if(!_){const S=l.get(o);if(S)return S}const{a:b,b:h,has_shadow:v}=f,g=a.url&&{url:o!==a.url.pathname+a.url.search,params:Object.keys(w).filter(S=>a.params[S]!==w[S]),session:H!==a.session_id};let $=[],L=Ze,k=!1,E=200,m=null;b.forEach(S=>S());e:for(let S=0;S<b.length;S+=1){let N;try{if(!b[S])continue;const x=await b[S](),D=a.branch[S];if(!D||x!==D.module||g.url&&D.uses.url||g.params.some(W=>D.uses.params.has(W))||g.session&&D.uses.session||Array.from(D.uses.dependencies).some(W=>c.some(fe=>fe(W)))||k&&D.uses.stuff){let W={};const fe=v&&S===b.length-1;if(fe){const ne=await fetch(`${p.pathname}${p.pathname.endsWith("/")?"":"/"}__data.json${p.search}`,{headers:{"x-sveltekit-load":"true"}});if(ne.ok){const Ce=ne.headers.get("x-sveltekit-location");if(Ce)return{redirect:Ce,props:{},state:a};W=ne.status===204?{}:await ne.json()}else E=ne.status,m=new Error("Failed to load data")}if(m||(N=await Q({module:x,url:p,params:w,props:W,stuff:L,routeId:f.id})),N&&(fe&&(N.uses.url=!0),N.loaded)){if(N.loaded.error&&(E=N.loaded.status,m=N.loaded.error),N.loaded.redirect)return{redirect:N.loaded.redirect,props:{},state:a};N.loaded.stuff&&(k=!0)}}else N=D}catch(x){E=500,m=Me(x)}if(m){for(;S--;)if(h[S]){let x,D,le=S;for(;!(D=$[le]);)le-=1;try{if(x=await Q({status:E,error:m,module:await h[S](),url:p,params:w,stuff:D.stuff,routeId:f.id}),(A=x==null?void 0:x.loaded)!=null&&A.error)continue;(U=x==null?void 0:x.loaded)!=null&&U.stuff&&(L=I(I({},L),x.loaded.stuff)),$=$.slice(0,le+1).concat(x);break e}catch{continue}}return await ee({status:E,error:m,url:p,routeId:f.id})}else(O=N==null?void 0:N.loaded)!=null&&O.stuff&&(L=I(I({},L),N.loaded.stuff)),$.push(N)}return await we({url:p,params:w,stuff:L,branch:$,status:E,error:m,routeId:f.id})}async function ee({status:o,error:p,url:w,routeId:f}){var v,g;const _={},b=await Q({module:await jt,url:w,params:_,stuff:{},routeId:f}),h=await Q({status:o,error:p,module:await Ct,url:w,params:_,stuff:b&&b.loaded&&b.loaded.stuff||{},routeId:f});return await we({url:w,params:_,stuff:I(I({},(v=b==null?void 0:b.loaded)==null?void 0:v.stuff),(g=h==null?void 0:h.loaded)==null?void 0:g.stuff),branch:[b,h],status:o,error:p,routeId:f})}function Te(o){if(o.origin!==location.origin||!o.pathname.startsWith(t))return;const p=decodeURI(o.pathname.slice(t.length)||"/");for(const w of $e){const f=w.exec(p);if(f)return{id:o.pathname+o.search,route:w,params:f,url:o}}}async function be({url:o,scroll:p,keepfocus:w,redirect_chain:f,details:_,accepted:b,blocked:h}){const v=a.url;let g=!1;const $={from:v,to:o,cancel:()=>g=!0};if(r.before_navigate.forEach(m=>m($)),g){h();return}const L=Ut(o.pathname,i),k=new URL(o.origin+L+o.search+o.hash);if(ke(C),b(),d&&u.navigating.set({from:a.url,to:k}),await ge(k,f,!1,{scroll:p,keepfocus:w,details:_})){const m={from:v,to:k};r.after_navigate.forEach(A=>A(m)),u.navigating.set(null)}}function te(o){return location.href=o.href,new Promise(()=>{})}return{after_navigate:o=>{Ee(()=>(r.after_navigate.push(o),()=>{const p=r.after_navigate.indexOf(o);r.after_navigate.splice(p,1)}))},before_navigate:o=>{Ee(()=>(r.before_navigate.push(o),()=>{const p=r.before_navigate.indexOf(o);r.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(y||!d)&&(R=!1)},goto:(o,p={})=>Oe(o,p,[]),invalidate:o=>{if(typeof o=="function")c.push(o);else{const{href:p}=new URL(o,location.href);c.push(w=>w===p)}return G||(G=Promise.resolve().then(async()=>{await ge(new URL(location.href),[],!0),G=null})),G},prefetch:async o=>{const p=new URL(o,Ye(document));await xe(p)},prefetch_routes:async o=>{const w=(o?$e.filter(f=>o.some(_=>f.exec(_))):$e).map(f=>Promise.all(f.a.map(_=>_())));await Promise.all(w)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",f=>{let _=!1;const b={from:a.url,to:null,cancel:()=>_=!0};r.before_navigate.forEach(h=>h(b)),_?(f.preventDefault(),f.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ke(C);try{sessionStorage[Qe]=JSON.stringify(re)}catch{}}});const o=f=>{const _=Fe(f);_&&_.href&&_.hasAttribute("sveltekit:prefetch")&&xe(Ge(_))};let p;const w=f=>{clearTimeout(p),p=setTimeout(()=>{var _;(_=f.target)==null||_.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",o),addEventListener("mousemove",w),addEventListener("sveltekit:trigger_prefetch",o),addEventListener("click",f=>{if(!X||f.button||f.which!==1||f.metaKey||f.ctrlKey||f.shiftKey||f.altKey||f.defaultPrevented)return;const _=Fe(f);if(!_||!_.href)return;const b=_ instanceof SVGAElement,h=Ge(_);if(!b&&h.origin==="null")return;const v=(_.getAttribute("rel")||"").split(/\s+/);if(_.hasAttribute("download")||v.includes("external")||_.hasAttribute("sveltekit:reload")||(b?_.target.baseVal:_.target))return;const[g,$]=h.href.split("#");if($!==void 0&&g===location.href.split("#")[0]){he=!0,ke(C),u.page.set(se(I({},me),{url:h})),u.page.notify();return}be({url:h,scroll:_.hasAttribute("sveltekit:noscroll")?Re():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>f.preventDefault(),blocked:()=>f.preventDefault()})}),addEventListener("popstate",f=>{if(f.state&&X){if(f.state[M]===C)return;be({url:new URL(location.href),scroll:re[f.state[M]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{C=f.state[M]},blocked:()=>{const _=C-f.state[M];history.go(_)}})}}),addEventListener("hashchange",()=>{he&&(he=!1,history.replaceState(se(I({},history.state),{[M]:++C}),"",location.href))})},_hydrate:async({status:o,error:p,nodes:w,params:f,routeId:_})=>{const b=new URL(location.href),h=[];let v={},g,$;try{for(let L=0;L<w.length;L+=1){const k=L===w.length-1;let E;if(k){const A=document.querySelector('script[sveltekit\\:data-type="props"]');A&&(E=JSON.parse(A.textContent))}const m=await Q({module:await w[L],url:b,params:f,stuff:v,status:k?o:void 0,error:k?p:void 0,props:E,routeId:_});if(E&&(m.uses.dependencies.add(b.href),m.uses.url=!0),h.push(m),m&&m.loaded)if(m.loaded.error){if(p)throw m.loaded.error;$={status:m.loaded.status,error:m.loaded.error,url:b,routeId:_}}else m.loaded.stuff&&(v=I(I({},v),m.loaded.stuff))}g=$?await ee($):await we({url:b,params:f,stuff:v,branch:h,status:o,error:p,routeId:_})}catch(L){if(p)throw L;g=await ee({status:500,error:Me(L),url:b,routeId:_})}g.redirect&&await te(new URL(g.redirect,location.href)),Ie(g)}}}async function Kt({paths:s,target:e,session:t,route:i,spa:l,trailing_slash:c,hydrate:u}){const n=Dt({target:e,session:t,base:s.base,trailing_slash:c});ht(s),u&&await n._hydrate(u),i&&(l&&n.goto(location.href,{replaceState:!0}),n._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Kt as start};