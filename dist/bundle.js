(()=>{"use strict";var n={917:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const c=i},426:(n,e,t)=>{t.d(e,{Z:()=>w});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(917),s=t(667),d=t.n(s),l=new URL(t(983),t.b),p=new URL(t(946),t.b),f=new URL(t(130),t.b),u=new URL(t(530),t.b),m=new URL(t(568),t.b),g=i()(o());g.i(c.Z);var b=d()(l),v=d()(p),h=d()(f),y=d()(u),x=d()(m);g.push([n.id,`@font-face {\n    font-family: 'poppins-thin';\n    src: url(${b});\n}\n\n@font-face {\n    font-family: 'poppins-regular';\n    src: url(${v});\n}\n\n@font-face {\n    font-family: 'poppins-semibold';\n    src: url(${h});\n}\n\n@font-face {\n    font-family: 'poppins-bold';\n    src: url(${y});\n}\n\n@font-face {\n    font-family: 'josefin-slab';\n    src: url(${x});\n}\n\n:root {\n    --bg-color: #f2eeed;\n    --text-color: #292531;\n    --primary: #eb6d3f;\n    --secondary: #963e29;\n    --tertiary: #ae7a63;\n    --black-gradient: linear-gradient(45deg, black, var(--text-color));\n    --primary-gradient: linear-gradient(45deg, var(--secondary), var(--primary));\n}\n\n* {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n    font-family: 'poppins-regular';\n    background-color: var(--bg-color);\n    color: var(--text-color);\n}\n\nh1, h2, h3, h4, h5, h6, a {\n    text-decoration: none;\n    font-family: 'poppins-semibold';\n    color: var(--text-color);\n}\n\na:hover {\n    color: var(--primary);\n}\n\nimg {\n    display: flex;\n    width: 100%;\n    margin: auto;\n}\n\n/* Navbar */\n\n#navbar {\n    padding: 20px;\n    display: flex;\n    position: fixed;\n    width: 100%;\n    left: 0;\n    top: 0;\n    background-color: var(--bg-color);\n    overflow: hidden;\n    box-shadow: 0px 10px 100px rgb(225 225 225 / 60%);\n}\n\n#navbar > div {\n    flex: 1;\n}\n\n#navbar #logo {\n    font-size: 3rem;\n    font-family: 'poppins-bold';\n    text-align: left;\n    color: var(--primary);\n    flex: 2;\n}\n\n#navbar #links {\n    font-size: 1.2rem;\n    text-align: right;\n    display: flex;\n    gap: 20px;\n    transition: .2s;\n}\n\n#navbar #links > a {\n    margin: auto;\n}\n\n#navbar #links > a.active {\n    color: var(--primary);\n}\n\n/* Content */\n/* menuPage */\n#content > #section {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 30px;\n    width: 80%;\n    margin: auto;\n    padding: 50px;\n    border-radius: 20px;\n}\n\n#content > #section > h1 {\n    grid-column: 1 / 3;\n    text-align: center;\n    font-size: 3rem;\n    letter-spacing: -3px;\n    margin-bottom: 20px;\n}\n\n#content > #section > #food-card {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    border-radius: 10px;\n    gap: 40px;\n    color: var(--bg-color);\n    overflow: hidden;\n    background: var(--black-gradient);\n}\n\n#content > #section #image {\n    padding: 20px;\n    overflow: hidden;\n    margin: auto;\n}\n\n#content>#section #info {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n#content > #section  #info #name {\n    font-size: 2rem;\n    text-transform: lowercase;\n    font-family: 'poppins-bold';\n}\n\n#content > #section #info #price {\n    font-family: 'poppins-regular';\n    font-size: 1rem;\n}\n\n#price:after {\n    font-family: 'poppins-thin';\n    /* content: 'vnd'; */\n    font-size: 1rem;\n}\n\n#content>#section:has(#drink-card) {\n    --columns: 6;\n    grid-template-columns: repeat(var(--columns), 1fr);\n}\n\n#content>#section:has(#drink-card)>h1 {\n    grid-column: 1/calc(var(--columns) + 1);\n}\n\n#content>#section>#drink-card {\n    overflow: hidden;\n    text-align: center;\n    border-radius: 10px;\n    background: rgb(0, 0, 0, 5%);\n    border: 1px solid rgb(0, 0, 0, 10%);\n    color: var(--text-color);\n}\n\n#content>#section>#drink-card>#image {\n    padding: 20px;\n}\n\n#content>#section>#drink-card>#info {\n    padding: 20px;\n    padding-top: 0;\n}\n\n#content>#section>#drink-card>#info>#name {\n    font-size: 1.5rem;\n}\n\n\n/* aboutPage */\n\n#content>#frame {\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n    width: 80%;\n    padding: 50px;\n    gap: 20px;\n}\n\n#content>#frame>iframe {\n    border: 5px solid var(--primary);\n    border-radius: 10px;\n}\n\n#content>#frame>#contact-us {\n    text-align: center;\n    display: inline-flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#content>#frame>#contact-us>#socials {\n    display: flex;\n    gap: 15px;\n    margin: auto;\n}\n\n#content>#frame>#contact-us>#socials>.btn {\n    padding: 10px;\n    border-radius: 100%;\n    font-size: 1rem;\n    background-color: var(--text-color);\n    color: var(--bg-color);\n    aspect-ratio: 1/1;\n    display: flex;\n    transition: .2s;\n}\n\n.btn:hover {\n    background-color: var(--primary)!important;\n}\n\n.btn i {\n    margin: auto;\n}\n\n\n\n`,""]);const w=g},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var f=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var m=o(u,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},568:(n,e,t)=>{n.exports=t.p+"6a4e168263c2ebe1d56c.ttf"},530:(n,e,t)=>{n.exports=t.p+"cdb29a5d7ccf57ff05a3.ttf"},946:(n,e,t)=>{n.exports=t.p+"35d26b781dc5fda684cc.ttf"},130:(n,e,t)=>{n.exports=t.p+"ac8d04b620e54be9b0f0.ttf"},983:(n,e,t)=>{n.exports=t.p+"59ff6a729e30c99b478e.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"a08c5db02e70fad60a68.jpg",e=t.p+"fc8d818c0d7c68ee1d60.png",r=t.p+"3a8b4319b3e9051058d4.png",o=[],a=[],i=["foods","drinks"],c=["Com suat","Com rang","Spaghetti","Bun dau","Bun cha"],s=["30.000","25.000","30.000","35.000","25.000"],d=[e],l=["Tra chanh","Tra dao","Pepsi","Coca","Tra thai xanh","Tra thai do","Milo"],p=["10.000","15.000","10.000","10.000","15.000","15.000","10.000"],f=[r],u=c.length,m=l.length;var g=t(379),b=t.n(g),v=t(795),h=t.n(v),y=t(569),x=t.n(y),w=t(565),k=t.n(w),T=t(216),E=t.n(T),M=t(589),A=t.n(M),C=t(426),$={};$.styleTagTransform=A(),$.setAttributes=k(),$.insert=x().bind(null,"head"),$.domAPI=h(),$.insertStyleElement=E(),b()(C.Z,$),C.Z&&C.Z.locals&&C.Z.locals;let z=document.getElementById("separate"),S=document.getElementById("navbar"),I=document.getElementById("content");const L=[function(){let e=new Image;return e.src=n,[e]}(),function(){for(let n=0;n<i.length;n++){let e=document.createElement("div");e.setAttribute("id","section");let t=document.createElement("h1");t.textContent=i[n],a.push(e),o.push(t)}a[0].appendChild(o[0]);for(let n=0;n<u;n++)a[0].insertAdjacentHTML("beforeend",`\n            <div id = "food-card">\n                <div id = "image"><img src = "${d}" title = "${d[n]}"></div>\n                <div id = "info">\n                    <div id = "name">${c[n]}</div>\n                    <div id = "price">${s[n]}</div>\n                </div>\n            </div>\n        `);a[1].appendChild(o[1]);for(let n=0;n<m;n++)a[1].insertAdjacentHTML("beforeend",`\n            <div id = "drink-card">\n                <div id = "image"><img src = "${f}" title = "${f[n]}"></div>\n                <div id = "info">\n                    <div id = "name">${l[n]}</div>\n                    <div id = "price">${p[n]}</div>\n                </div>\n            </div>\n        `);return Array.from(a)}(),function(){let n=document.createElement("div");return n.setAttribute("id","frame"),n.innerHTML='\n        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1298.0132932555755!2d105.49076190750966!3d21.003186355194405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345db359a0c7f5%3A0x4648557de38d109b!2zS8O9IHTDumMgeMOhIHNpbmggdmnDqm4gxJBIUUcgbsSDbSAyMDIz!5e0!3m2!1svi!2s!4v1700403756101!5m2!1svi!2s" width="" height="450" style="" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>\n        <div id = "contact-us">\n            <p>Please consider contacting us at:</p>\n            <div id = "socials">\n                <a href = "#" id = "fb" class = "btn"><i class="fa-brands fa-facebook-f fa-fw"></i></a>\n                <a href = "#" id = "zalo" class = "btn"><i class="fa-solid fa-z fa-fw"></i></a>\n                <a href = "#" id = "phone" class = "btn"><i class="fa-solid fa-phone fa-fw"></i></a>\n            </div>\n        </div> \n    ',[n]}()],q=document.querySelectorAll("#navbar > #links > a");z.style.height=S.offsetHeight+"px",function(){let n=0;q[n].setAttribute("class","active"),L[0].forEach((n=>{I.appendChild(n)})),q.forEach(((e,t)=>{e.addEventListener("click",(()=>{e.setAttribute("class","active"),q[n].removeAttribute("class"),n=t,I.innerHTML="",L[t].forEach((n=>{I.appendChild(n)}))}))}))}()})()})();