import{S as s,i as t,e as o,a as e,s as n,F as a,b as l,c as r,d as c,f as i,g as p,h as u,j as g,w as m,q as d,r as h,n as b,m as f,u as v,t as k}from"./index.c00f1e5a.js";import{P as x}from"./PostsList.4cc57750.js";import"./index.2b448099.js";function $(s){return{c:b,l:b,m:b,p:b,i:b,o:b,d:b}}function j(s){var t,o=new x({props:{blogposts:s.value}});return{c(){o.$$.fragment.c()},l(s){o.$$.fragment.l(s)},m(s,e){f(o,s,e),t=!0},p(s,t){var e={};s.blogposts&&(e.blogposts=t.value),o.$set(e)},i(s){t||(d(o.$$.fragment,s),t=!0)},o(s){h(o.$$.fragment,s),t=!1},d(s){v(o,s)}}}function z(s){var t,n;return{c(){t=o("progress"),n=k("45%"),this.h()},l(s){t=r(s,"PROGRESS",{class:!0,max:!0},!1);var o=c(t);n=p(o,"45%"),o.forEach(i),this.h()},h(){u(t,"class","progress is-medium is-dark svelte-g1kirz"),u(t,"max","100")},m(s,o){g(s,t,o),e(t,n)},p:b,i:b,o:b,d(s){s&&i(t)}}}function E(s){var t,n,b,f,v;let k={ctx:s,current:null,token:null,pending:z,then:j,catch:$,value:"value",error:"null",blocks:[,,,]};return a(f=s.blogposts,k),{c(){t=o("meta"),n=l(),b=o("div"),k.block.c(),this.h()},l(s){t=r(s,"META",{name:!0,content:!0},!1),c(t).forEach(i),n=p(s,"\n\n"),b=r(s,"DIV",{class:!0},!1);var o=c(b);k.block.l(o),o.forEach(i),this.h()},h(){document.title="Blog",u(t,"name","Description"),u(t,"content","TODO!!!"),u(b,"class","main-page svelte-g1kirz")},m(s,o){e(document.head,t),g(s,n,o),g(s,b,o),k.block.m(b,k.anchor=null),k.mount=()=>b,k.anchor=null,v=!0},p(t,o){s=o,k.ctx=s,"blogposts"in t&&f!==(f=s.blogposts)&&a(f,k)||k.block.p(t,m(m({},s),k.resolved))},i(s){v||(d(k.block),v=!0)},o(s){for(let s=0;s<3;s+=1){const t=k.blocks[s];h(t)}v=!1},d(s){i(t),s&&(i(n),i(b)),k.block.d(),k.token=null,k=null}}}async function y(){const s=await this.fetch("index.json");if(200===s.status){return{blogposts:await s.json()}}this.error(500,"no posts found")}function w(s,t,o){let{blogposts:e}=t;return s.$set=s=>{"blogposts"in s&&o("blogposts",e=s.blogposts)},{blogposts:e}}export default class extends s{constructor(s){var a;super(),document.getElementById("svelte-g1kirz-style")||((a=o("style")).id="svelte-g1kirz-style",a.textContent=".main-page.svelte-g1kirz,.progress.svelte-g1kirz{padding-top:3rem}",e(document.head,a)),t(this,s,w,E,n,["blogposts"])}}export{y as preload};