if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>n(e,o),f={module:{uri:o},exports:t,require:c};i[o]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-D8b4DHJx.css",revision:null},{url:"assets/index-DovcRGdL.js",revision:null},{url:"index.html",revision:"0c5e2630c37637c56994f8a1566e7fef"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"pwa-icon-192.png",revision:"583b1f73c31587ecc29646ba0acfebf6"},{url:"pwa-icon-512.png",revision:"2915d1e133adcff8a920190eb6d33d4f"},{url:"manifest.webmanifest",revision:"38c74bdef96ab3398caf85562ca3468b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
