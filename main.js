!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){"use strict";var a,i=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function o(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},a=[],i=0;i<e.length;i++){var r=e[i],c=t.base?r[0]+t.base:r[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=o(d),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(s[u].references++,s[u].updater(p)):s.push({identifier:d,updater:g(p,t),references:1}),a.push(d)}return a}function l(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var i=n.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,n,a){var i=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var r=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function m(e,t,n){var a=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var f=null,h=0;function g(e,t){var n,a,i;if(t.singleton){var r=h++;n=f||(f=l(t)),a=p.bind(null,n,r,!1),i=p.bind(null,n,r,!0)}else n=l(t),a=m.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var i=o(n[a]);s[i].references--}for(var r=c(e,t),l=0;l<n.length;l++){var d=o(n[l]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=r}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var i=(s=a,o=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(c," */")),r=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([i]).join("\n")}var s,o,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(a)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(i[s]=!0)}for(var o=0;o<e.length;o++){var c=[].concat(e[o]);a&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){var a=n(0),i=n(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};a(i,r);e.exports=i.locals||{}},function(e,t,n){(t=n(1)(!1)).push([e.i,".redact {\n  display: flex;\n}\n.redact > *:not(:last-child) {\n  margin-right: 16px;\n  width: 70%;\n}\n@media (max-width: 1024px) {\n  .redact {\n    flex-direction: column;\n  }\n  .redact > *:not(:last-child) {\n    width: 100%;\n    margin-bottom: 16px;\n  }\n}\n.redact__timeoutSettings {\n  display: none;\n}\n.redact__timeoutSettings--visible {\n  display: block;\n}\n.redact__result--success {\n  color: green;\n}\n.redact__result--error {\n  color: red;\n}\n.redact__title, .redact__text {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n}\n.redact__text {\n  min-height: 200px;\n}\n.redact__add {\n  margin-top: 16px;\n}\n",""]),e.exports=t},function(e,t,n){var a=n(0),i=n(5);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};a(i,r);e.exports=i.locals||{}},function(e,t,n){(t=n(1)(!1)).push([e.i,"body {\n  margin: 0;\n}\nhtml {\n  background-color: #eee;\n  min-height: 100vh;\n}\n* {\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n}\nbutton, label {\n  cursor: pointer;\n}\n.app {\n  padding: 0 40px;\n}\n@media (max-width: 1024px) {\n  .app {\n    padding: 0 30px;\n  }\n}\n@media (max-width: 640px) {\n  .app {\n    padding: 0 16px;\n  }\n}\n",""]),e.exports=t},function(e,t,n){var a=n(0),i=n(7);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};a(i,r);e.exports=i.locals||{}},function(e,t,n){(t=n(1)(!1)).push([e.i,".list {\n  display: grid;\n  grid-column-gap: 16px;\n  grid-row-gap: 24px;\n  grid-template-columns: repeat(6, 1fr);\n  width: calc(100% + 16px);\n  margin-left: -8px;\n  margin-top: 32px;\n}\n@media (max-width: 1024px) {\n  .list {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .list {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 320px) {\n  .list {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n",""]),e.exports=t},function(e,t,n){var a=n(0),i=n(9);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};a(i,r);e.exports=i.locals||{}},function(e,t,n){(t=n(1)(!1)).push([e.i,".task {\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 1px 2px 1px 0 #4448;\n  max-width: 200px;\n  padding: 16px;\n  height: 100%;\n  width: 100%;\n  transition: box-shadow 0.3s;\n  display: flex;\n  flex-direction: column;\n}\n.task:hover {\n  box-shadow: 1px 2px 8px 0 #444a;\n}\n.task__text {\n  flex: 1;\n  margin: 0;\n  white-space: pre;\n}\n",""]),e.exports=t},function(e,t){class n extends HTMLElement{connectedCallback(){this.innerHTML="\n<um-app>\n  "}}customElements.define("umemo-application",n),document.body.appendChild(document.createElement("umemo-application"))},function(e,t,n){"use strict";n.r(t);const a={title:"UMemo Vanilla",link:[{rel:"shortcut icon",href:"/assets/favicon.ico",type:"image/x-icon"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"}]};document.title=a.title,(a.link||[]).forEach(e=>{const t=document.createElement("link");Object.keys(e).forEach(n=>{t.setAttribute(n,e[n])}),document.head.appendChild(t)}),document.body.appendChild(document.createElement("App"));const i={tasks:JSON.parse(localStorage.data_task||"[]")},r={tasks:{}},s={get tasks(){return i.tasks},set tasks(e){i.tasks=e,localStorage.data_task=JSON.stringify(s.tasks),Object.keys(r.tasks).forEach(e=>{r.tasks[e]()})}};n(2);class o extends HTMLElement{connectedCallback(){this.innerHTML='\n<div class="redact__result">\n  <span class="redact__result--success" hidden="hidden">Заметка успешно сохранена</span>\n  <span class="redact__result--error" hidden="hidden">Проверьте правильность введенных данных</span>\n</div>\n<div class="redact">\n  <div>\n    <input placeholder="Название" class="redact__title" />\n    <textarea class="redact__text" placeholder="Содержание"></textarea>\n  </div>\n  <div>\n    <label>\n      <input type="checkbox" class="redact__isTimeout"/>\n      Время окончания\n    </label>\n    <div class="redact__timeoutSettings">\n      <input type="datetime-local" class="redact__timeoutValue"/>\n    </div>\n  </div>\n</div>\n<button class="redact__add">Добавить</button>\n  ';const[e,t,n,a,i,r]=[this.querySelector(".redact__title"),this.querySelector(".redact__text"),this.querySelector(".redact__isTimeout"),this.querySelector(".redact__timeoutValue"),this.querySelector(".redact__add"),this.querySelector(".redact__timeoutSettings")];i.addEventListener("click",()=>{e.value&&t.value&&(!n.checked||a.value&&"number"==typeof new Date(a.value).getTime())?(s.tasks=[...s.tasks,{id:(new Date).getTime(),title:e.value,text:t.value,...n.checked?{timeout:new Date(a.value).getTime()}:{}}],e.value="",t.value="",n.checked=!1,a.value=null,r.classList.remove("redact__timeoutSettings--visible"),this.changeMessage(".redact__result--success")):this.changeMessage(".redact__result--error")}),n.addEventListener("change",()=>{r.classList.toggle("redact__timeoutSettings--visible")})}changeMessage(e){const t=this.querySelector(e);t.hidden=!1,setTimeout(()=>{t.hidden=!0},3e3)}}customElements.define("um-redact",o);n(4);class c extends HTMLElement{connectedCallback(){s.tasks=s.tasks.filter(e=>!e.timeout||e.timeout>(new Date).getTime()),this.innerHTML='\n<main class="app">\n  <h1>UMemo Vanilla</h1>\n  <um-redact></um-redact>\n  <hr />\n  <um-list></um-list>\n</main>\n  '}}customElements.define("um-app",c);n(6);class l extends HTMLElement{connectedCallback(){this.render(),r.tasks.app=()=>{this.render()}}list(){return s.tasks.map(e=>`\n<um-task\n    data-title="${e.title}"\n    data-text="${e.text}"\n    data-id="${e.id}"\n    data-timeout="${e.timeout||""}"\n></um-task>\n`).join("")}render(){this.innerHTML=`\n<section class="list">\n  ${this.list()}\n</section>\n  `}}customElements.define("um-list",l);n(8);class d extends HTMLElement{connectedCallback(){this.innerHTML=`\n<div class="task">\n  <button class="task__delete">Удалить</button>\n  <h2 class="task__title">${this.dataset.title}</h2>\n  <p class="task__text">${this.dataset.text}</p>\n  ${this.timeout()}\n</div>\n  `,this.querySelector(".task__delete").addEventListener("click",()=>{s.tasks=s.tasks.filter(e=>e.id!==+this.dataset.id)})}timeout(){if(this.dataset.timeout){const e=new Date(+this.dataset.timeout);return`\n        <div>\n          <hr />\n        </div>\n        <span>Время окончания:\n          ${e.getFullYear()}.${e.getMonth()}.${e.getDate()}\n          ${e.getHours()}:${e.getMinutes()}\n        </span>\n      `}return""}}customElements.define("um-task",d);n(10)}]);