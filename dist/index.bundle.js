(()=>{"use strict";var e,t,n,a,o,i,c,d,r,s,l,p,u,m,h,f={426:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(81),o=n.n(a),i=n(645),c=n.n(i)()(o());c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]),c.push([e.id,'/* @import url("https://fonts.googleapis.com/css2?family=Patua+One&display=swap"); */\n/* @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"); */\n\n:root {\n  /* --background-color: #f6f1f1; */\n  /* --background-color: #fff9f6; */\n  /* --background-color: #fffbf8; */\n  --background-color: #faf9f8;\n  --text-color-dark: #132d3a;\n  --sidebar-color: #f4efeb;\n  --header-color: #19a7ce;\n  --shadow-color: #78624f;\n  --button-color: rgb(235 143 71);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* font-family: "Patua One", cursive; */\n  /* font-family: "Open Sans", sans-serif; */\n  font-family: "Merriweather Sans", sans-serif;\n  font-weight: 400;\n  color: var(--text-color-dark);\n}\n\nh1,\nh2,\nh3,\nh4 {\n  /* font-weight: inherit; */\n  font-weight: 700;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  box-sizing: border-box;\n}\n\ninput:not([type="checkbox"]),\nselect,\ntextarea {\n  width: 250px;\n  padding: 0 5px;\n  margin: 0;\n}\n\nlabel {\n  display: block;\n}\n\n#shadow {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.4);\n  width: 100%;\n  height: 100%;\n  z-index: 4;\n}\n\n.form,\n#confirm-card {\n  position: absolute;\n  z-index: 5;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--background-color);\n  border-radius: 15px;\n  padding: 50px;\n}\n\n.error-message {\n  position: absolute;\n  font-size: 0.75rem;\n  width: 100%;\n  top: 53px;\n  left: 113px;\n  color: darkred;\n}\n\nheader {\n  background-color: var(--header-color);\n  position: fixed;\n  width: 100%;\n  color: var(--background-color);\n  box-shadow: 0 2px var(--text-color-dark);\n  z-index: 4;\n}\n\n#title {\n  /* font-family: "Lilita One", cursive; */\n  /* font-family: "Shrikhand", cursive; */\n  margin: 0;\n  text-align: center;\n  /* text-shadow: -1px 1px 4px var(--text-color-dark); */\n  font-weight: 700;\n  font-style: italic;\n}\n\n.burger {\n  font-size: 2rem;\n  position: fixed;\n  padding: 4px;\n  z-index: 5;\n}\n\n#main {\n  padding-top: 40px;\n  text-align: center;\n  /* height: 100vh;\n  height: 100dvh; */\n  /* background-color: var(--background-color); */\n}\n\n/* teste */\n#body-container {\n  /* height: calc(100% - 40px);  */\n  overflow-y: auto;\n  background-color: var(--background-color);\n  height: 100%;\n  /* padding-right: 15px;  */\n}\n\n/* teste */\nhtml,\nbody {\n  height: 100%;\n  overflow: hidden;\n}\n\n.clickable {\n  cursor: pointer;\n}\n\n.navigation.clickable,\nli.clickable {\n  position: relative;\n  transition: padding-left 300ms cubic-bezier(0.18, 0.89, 0.51, 1.06);\n}\n\n.navigation.clickable {\n  display: flex;\n  justify-content: space-between;\n}\n\n.navigation.clickable:hover,\nli.clickable:hover,\n.navigation.clickable.active,\nli.clickable.active {\n  padding-left: 10px;\n}\n\n.navigation.clickable::before,\nli.clickable::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  opacity: 0;\n  transform: translateY(-50%);\n  transition: opacity 300ms;\n}\n\n.navigation.clickable:hover::before,\nli.clickable:hover::before,\n.navigation.clickable.active::before,\nli.clickable.active::before {\n  content: "•";\n  opacity: 1;\n}\n\n.sidebar {\n  position: fixed;\n  height: 100%;\n  left: -100%;\n  transition: 400ms;\n  z-index: 3;\n  top: 40px;\n  background-color: var(--sidebar-color);\n  color: var(--text-color-dark);\n  padding: 20px;\n  box-shadow: 2px 0px var(--shadow-color);\n  min-width: 175px;\n  max-width: 230px;\n  overflow-wrap: break-word;\n}\n\n.sidebar.active {\n  left: 0;\n}\n\n.navigation {\n  font-size: 1.4rem;\n  margin-bottom: 4px;\n  font-weight: 700;\n  /* position: relative; */\n}\n\n.navigation > ul,\n.navigation > div {\n  font-size: 1.2rem;\n  padding-left: 20px;\n}\n\n.navigation li {\n  display: flex;\n  justify-content: space-between;\n  font-style: italic;\n}\n\nul {\n  list-style-type: none;\n}\n\n#new-project {\n  font-weight: 400;\n  font-size: 1rem;\n}\n\n#new-project span,\n#new-task span {\n  padding-left: 4px;\n}\n\n#create-project {\n  margin-left: 4px;\n}\n\n#new-task {\n  padding: 20px;\n  max-width: 125px;\n  margin: auto;\n}\n\n#add-new-task {\n  display: block;\n}\n\n#confirm-card {\n  z-index: 5;\n}\n\n.button-container {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  margin-top: 25px;\n}\n\n.button-container button {\n  border: 0;\n  border-radius: 16px;\n  padding: 6px 12px;\n}\n\n.yes {\n  background: var(--button-color);\n  color: var(--background-color);\n}\n\n.no {\n  background: var(--sidebar-color);\n  color: var(--text-color-dark);\n}\n\n.project-card {\n  display: grid;\n  grid-template-rows: auto 0fr;\n  width: min(520px, 100vw);\n  margin: auto;\n  position: relative;\n}\n\n.add-button {\n  position: absolute;\n  top: 8px;\n  right: 16px;\n  background-color: var(--button-color);\n  color: var(--background-color);\n  border: none;\n  border-radius: 13px;\n  /* padding: 4px 6px; */\n  font-weight: 700;\n  min-width: 26px;\n  height: 26px;\n}\n\n.add-button:hover,\n.yes:hover,\n.no:hover {\n  transform: scale(1.02);\n}\n\n/* .add-button:hover::after {\n  content: " Tarefa";\n} */\n\n.project-header {\n  grid-row: 1;\n  display: flex;\n  /* justify-content: center; */\n  justify-content: space-between;\n  padding: 8px;\n  width: 60%;\n  margin: auto;\n  margin-bottom: 7px;\n  font-weight: 700;\n}\n\n.project-header:hover {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n}\n\n.card-title {\n  font-size: 1.2rem;\n  font-style: italic;\n}\n\n.counter {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background-color: var(--header-color);\n  color: var(--background-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.2rem;\n}\n\n.project-body,\n.task-body {\n  grid-row: 2;\n  overflow: hidden;\n}\n\n.project-header span,\n.task-header span {\n  transition: transform 300ms;\n}\n\n.task {\n  display: grid;\n  grid-template-rows: auto 0fr;\n  transition: all 250ms;\n  width: min(500px, 90vw);\n  margin: auto;\n  margin-bottom: 7px;\n  background-color: var(--sidebar-color);\n  border-radius: 10px;\n  padding: 8px;\n  box-shadow: 0px 3px var(--shadow-color);\n}\n\n.task:hover {\n  transform: translateY(-2px);\n  box-shadow: 0px 5px var(--shadow-color);\n}\n\n.task-header {\n  grid-row: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 700;\n}\n\n.task-header .right,\n.task-header .left {\n  flex: 0 0 auto;\n}\n\n.task-header .left {\n  margin-right: 34px;\n  position: relative;\n}\n\n.high-priority::after {\n  content: "!";\n  font-weight: 700;\n  color: darkred;\n  position: absolute;\n  /* left: 10px; */\n  right: 4px;\n  /* top: -1px; */\n  font-size: 17px;\n}\n\n.task-header .center {\n  flex: 1;\n  text-align: center;\n  position: relative;\n}\n\n.task-icons {\n  display: flex;\n  justify-content: center;\n}\n\n.task-checkbox {\n  accent-color: var(--header-color);\n}\n\n.task-icons * {\n  font-size: 19px;\n}\n\n.material-icons:not(.burger):hover {\n  color: var(--header-color);\n}\n\n.expanded {\n  grid-template-rows: auto 1fr;\n}\n\n.clicked {\n  transform: rotate(180deg);\n}\n\n.completed {\n  text-decoration: line-through;\n  opacity: 0.4;\n}\n\n@media only screen and (min-width: 600px) {\n  .burger {\n    display: none;\n  }\n  /* .body-container {\n    display: grid;\n    grid-template-columns: 200px auto;\n  } */\n  .sidebar {\n    /* grid-column: 1 / 2; */\n    left: 0;\n    max-width: clamp(164px, 17vw, 200px);\n  }\n  .add-button {\n    right: 3px;\n  }\n  .add-button::after {\n    content: " Tarefa";\n  }\n}\n\n.hidden {\n  display: none;\n}\n',""]);const d=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var d=0;d<this.length;d++){var r=this[d][0];null!=r&&(c[r]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&c[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},c=[],d=0;d<e.length;d++){var r=e[d],s=a.base?r[0]+a.base:r[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=n(p),m={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=o(m,a);a.byIndex=d,t.splice(d,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=a(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var d=n(i[c]);t[d].references--}for(var r=a(e,o),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=r}}},777:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},569:(e,t,n)=>{n.d(t,{e:()=>h});var a=n(495);const o=function(){const e=document.querySelector("#projects ul");return e.innerHTML="",a.q.forEach((t=>{const n=document.createElement("li");n.textContent=t.name,n.classList.add("clickable");const o=document.createElement("span");o.classList.add("counter"),o.dataset.id=a.q.indexOf(t),o.dataset.context="general",o.textContent=f(a.q.indexOf(t),o.dataset.context),n.appendChild(o),n.addEventListener("click",(()=>{i=t,r(t),n.classList.add("active")})),e.appendChild(n)})),e};let i,c,d;const r=function(e){const t=document.querySelector("#main");t.innerHTML="";const n=document.createElement("h2");n.textContent=e.name,document.querySelectorAll(".navigation.active").forEach((e=>{e.classList.remove("active")})),document.querySelectorAll(".navigation .active").forEach((e=>{e.classList.remove("active")})),t.appendChild(n),t.appendChild(u(e,"general"))},s=function(){document.getElementById("shadow").classList.remove("hidden"),document.getElementById("new-task-form").classList.remove("hidden");const e=document.getElementById("task-title"),t=document.getElementById("description"),n=document.getElementById("due"),a=document.getElementById("priority"),o=document.getElementById("notes");e.focus(),"edit"===d?(e.value=c.title,t.value=c.description,n.value=c.due,a.value=c.priority,o.value=c.notes,console.log("preenchendo formulário com infos da tarefa: "+c.title)):(e.value="",t.value="",n.value="",a.value="",o.value="",console.log("limpando formulário"))},l=function(e,t){const n=document.createElement("div");n.classList.add("task");const o=document.createElement("div");o.classList.add("task-header");const r=document.createElement("span");r.classList.add("material-icons"),r.classList.add("clickable"),r.classList.add("left"),r.textContent="expand_more",r.addEventListener("click",(()=>{n.classList.toggle("expanded"),r.classList.toggle("clicked")}));const l=document.createElement("span");l.textContent=e.title,l.classList.add("center"),l.addEventListener("click",(()=>{n.classList.toggle("expanded"),r.classList.toggle("clicked")})),"alta"===e.priority?l.classList.add("high-priority"):l.classList.remove("high-priority");const u=document.createElement("span");u.classList.add("task-icons"),u.classList.add("right");const m=document.createElement("input");m.type="checkbox",m.classList.add("task-checkbox"),m.addEventListener("change",(()=>{l.classList.toggle("completed"),e.toggleComplete(),(0,a.Um)(t),v()})),e.complete&&(m.checked=!0,l.classList.add("completed"));const h=document.createElement("span");h.textContent="edit",h.classList.add("material-icons"),h.classList.add("clickable"),h.addEventListener("click",(()=>{i=t,c=e,console.log(c),d="edit",s()}));const f=document.createElement("span");f.textContent="delete",f.classList.add("material-icons"),f.classList.add("clickable"),f.addEventListener("click",(()=>{p(e,t,f.closest(".project-card"))})),u.appendChild(h),u.appendChild(f),u.appendChild(m),o.appendChild(r),o.appendChild(l),o.appendChild(u);const g=document.createElement("div");g.classList.add("task-body");const x=document.createElement("div");x.textContent=e.description;const b=document.createElement("div"),y=e.due.split("-").reverse().join("/");b.textContent=`Prazo: ${y}`;const k=document.createElement("div");k.textContent=`Prioridade: ${e.priority}`;const C=document.createElement("div");return C.textContent=e.notes,g.appendChild(x),g.appendChild(b),g.appendChild(k),g.appendChild(C),n.appendChild(o),n.appendChild(g),n},p=function(e,t,n){const o=document.querySelector("#shadow");o.classList.remove("hidden");const i=document.createElement("div");i.id="confirm-card";const c=document.createElement("h3");c.textContent=`Deseja excluir a tarefa "${e.title}" do projeto ${t.name}?`;const d=document.createElement("div");d.classList.add("button-container");const r=document.createElement("button");r.textContent="Cancelar",r.classList.add("no"),r.classList.add("clickable");const s=document.createElement("button");s.textContent="Excluir",s.classList.add("yes"),s.classList.add("clickable"),d.appendChild(r),d.appendChild(s),i.appendChild(c),i.appendChild(d);const l=document.querySelector("body");l.appendChild(i),r.addEventListener("click",(()=>{l.removeChild(i),o.classList.add("hidden")})),o.addEventListener("click",(e=>{e.stopPropagation(),i.parentNode===l&&l.removeChild(i)})),s.addEventListener("click",(()=>{t.removeTask(e),(0,a.Um)(t);const c=n,d=c.querySelector(".counter"),r=a.q[d.dataset.id],s=d.dataset.context,p=u(r,s);p?c.parentNode.replaceChild(p,c):c.remove(),v(),l.removeChild(i),o.classList.add("hidden")}))},u=function(e,t){const n=document.createElement("div");n.classList.add("project-card"),n.classList.add("expanded");const o=document.createElement("div");o.classList.add("project-header"),o.classList.add("clickable"),o.addEventListener("click",(()=>{n.classList.toggle("expanded"),c.classList.toggle("clicked")}));const c=document.createElement("span");c.classList.add("material-icons"),c.classList.add("clicked"),c.textContent="expand_more";const r=document.createElement("span");r.textContent=e.name,r.classList.add("card-title");const p=document.createElement("span");p.classList.add("counter"),p.dataset.id=a.q.indexOf(e),p.dataset.context=t,"today"===t&&(p.dataset.context="today"),"thisWeek"===t&&(p.dataset.context="thisWeek"),"general"===t&&(p.dataset.context="general"),p.textContent=f(p.dataset.id,p.dataset.context);const u=document.createElement("button");u.textContent="+",u.classList.add("clickable"),u.classList.add("add-button"),u.addEventListener("click",(()=>{i=e,d="new",s()}));const m=document.createElement("div");m.classList.add("project-body");let h=!1;switch(t){case"today":if(e.tasks.forEach((t=>{t.isDueToday()&&(m.appendChild(l(t,e)),h=!0)})),!h)return;break;case"thisWeek":if(e.tasks.forEach((t=>{t.isDueThisWeek()&&(m.appendChild(l(t,e)),h=!0)})),!h)return;break;case"general":e.tasks.forEach((t=>{m.appendChild(l(t,e)),h=!0}))}return o.appendChild(c),o.appendChild(r),o.appendChild(p),n.appendChild(o),n.appendChild(u),n.appendChild(m),n},m=function(){const e=document.querySelector("#main");e.innerHTML="";const t=document.querySelector("#home");document.querySelectorAll(".navigation.active").forEach((e=>{e.classList.remove("active")})),document.querySelectorAll(".navigation .active").forEach((e=>{e.classList.remove("active")})),t.classList.add("active");const n=document.createElement("h2");n.textContent="Todas as tarefas:",e.appendChild(n),a.q.forEach((t=>{const n=u(t,"general");n&&e.appendChild(n)}))},h=()=>{document.querySelector("body").innerHTML="";const e=document.querySelector("body"),t=document.createElement("div");t.id="shadow",t.classList.add("hidden"),t.addEventListener("click",(e=>{e.stopPropagation(),t.classList.add("hidden"),document.querySelectorAll(".form").forEach((e=>{e.classList.add("hidden")})),document.querySelector(".error-message").classList.add("hidden")}));const n=document.createElement("main");n.id="main";const s=document.createElement("div");s.appendChild(function(){const e=document.createElement("div");e.classList.add("sidebar");const t=document.createElement("div");t.classList.add("navigation"),t.classList.add("clickable"),t.id="home",t.textContent="Principal",t.addEventListener("click",(()=>{m()}));const n=document.createElement("span");n.classList.add("counter"),n.dataset.id="global",n.dataset.context="general",n.textContent=f(n.dataset.id,n.dataset.context),t.appendChild(n);const i=document.createElement("div");i.classList.add("navigation"),i.classList.add("clickable"),i.id="today",i.textContent="Hoje",i.addEventListener("click",(()=>{!function(){const e=document.querySelector("#main");e.innerHTML="";const t=document.querySelector("#today");document.querySelectorAll(".navigation.active").forEach((e=>{e.classList.remove("active")})),document.querySelectorAll(".navigation .active").forEach((e=>{e.classList.remove("active")})),t.classList.add("active");const n=document.createElement("h2");n.textContent="Tarefas para hoje:",e.appendChild(n),a.q.forEach((t=>{const n=u(t,"today");n&&e.appendChild(n)}))}()}));const c=document.createElement("span");c.classList.add("counter"),c.dataset.id="global",c.dataset.context="today",c.textContent=f(c.dataset.id,c.dataset.context),i.appendChild(c);const d=document.createElement("div");d.classList.add("navigation"),d.classList.add("clickable"),d.id="week",d.textContent="Esta semana",d.addEventListener("click",(()=>{!function(){const e=document.querySelector("#main");e.innerHTML="";const t=document.querySelector("#week");document.querySelectorAll(".navigation.active").forEach((e=>{e.classList.remove("active")})),document.querySelectorAll(".navigation .active").forEach((e=>{e.classList.remove("active")})),t.classList.add("active");const n=document.createElement("h2");n.textContent="Tarefas para essa semana:",e.appendChild(n),a.q.forEach((t=>{const n=u(t,"thisWeek");n&&e.appendChild(n)}))}()}));const r=document.createElement("span");r.classList.add("counter"),r.dataset.id="global",r.dataset.context="thisWeek",r.textContent=f(r.dataset.id,r.dataset.context),d.appendChild(r);const s=document.createElement("div");s.classList.add("navigation"),s.id="projects",s.textContent="Projetos: ";const l=document.createElement("ul");s.appendChild(l),document.addEventListener("DOMContentLoaded",(function(){o()}));const p=document.createElement("div");p.id="new-project",p.classList.add("clickable");const h=document.createElement("button");h.textContent="+";const v=document.createElement("span");return v.textContent="Novo Projeto",p.appendChild(h),p.appendChild(v),p.addEventListener("click",(()=>{document.querySelector("#new-project-form").classList.remove("hidden"),document.querySelector("#shadow").classList.remove("hidden")})),s.appendChild(p),document.addEventListener("DOMContentLoaded",(()=>{document.querySelector("#main").addEventListener("click",(()=>{e.classList.contains("active")&&e.classList.remove("active")}))})),e.appendChild(t),e.appendChild(i),e.appendChild(d),e.appendChild(s),e}()),s.appendChild(n),s.id="body-container",e.appendChild(function(){const e=document.createElement("div");e.id="new-task-form",e.classList.add("form"),e.classList.add("hidden");const t=document.createElement("label");t.for="task-title",t.textContent="Tarefa: ";const n=document.createElement("input");n.id="task-title",n.name="task-title",n.type="text",n.required=!0;const o=document.createElement("span");o.classList.add("error-message"),o.classList.add("hidden"),o.textContent="Favor informar o título da tarefa";const r=document.createElement("label");r.for="description",r.textContent="Descrição: ";const s=document.createElement("textarea");s.id="description",s.name="description",s.rows=4;const l=document.createElement("label");l.for="due",l.textContent="Prazo: ";const p=document.createElement("input");p.id="due",p.name="due",p.type="date";const m=document.createElement("label");m.for="priority",m.textContent="Prioridade: ";const h=document.createElement("select");h.name="priority",h.id="priority";const f=document.createElement("option");f.value="",h.appendChild(f);const g=document.createElement("option");g.value="alta",g.textContent="alta",h.appendChild(g);const x=document.createElement("option");x.value="média",x.textContent="média",h.appendChild(x);const b=document.createElement("option");b.value="baixa",b.textContent="baixa",h.appendChild(b);const y=document.createElement("label");y.for="notes",y.textContent="Observações: ";const k=document.createElement("textarea");k.id="notes",k.name="notes",k.rows=4;const C=document.createElement("button");return C.id="add-new-task",C.classList.add("clickable"),C.textContent="Salvar tarefa",C.addEventListener("click",(()=>{if(!n.checkValidity())return void o.classList.remove("hidden");o.classList.add("hidden"),"new"===d?i.addTask(n.value,s.value,p.value,h.value,k.value):"edit"===d&&(c.title=n.value,c.description=s.value,c.due=p.value,c.priority=h.value,c.notes=k.value),(0,a.Um)(i);const t=document.querySelector("#main").querySelector(`[data-id="${a.q.indexOf(i)}"]`),r=t.closest(".project-card"),l=u(i,t.dataset.context);r.parentNode.replaceChild(l,r),v(),e.classList.add("hidden"),document.getElementById("shadow").classList.add("hidden"),v()})),e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(r),e.appendChild(s),e.appendChild(l),e.appendChild(p),e.appendChild(m),e.appendChild(h),e.appendChild(y),e.appendChild(k),e.appendChild(C),e}()),e.appendChild(function(){const e=document.createElement("div");e.id="new-project-form",e.classList.add("form"),e.classList.add("hidden");const t=document.createElement("label");t.for="project",t.textContent="Nome do projeto: ";const n=document.createElement("input");n.id="project",n.name="project";const i=document.createElement("button");return i.id="create-project",i.classList.add("clickable"),i.textContent="Criar projeto",i.addEventListener("click",(()=>{if(""!==n.value){const t=(0,a.o9)(n.value);r(t),(0,a.Um)(t),n.value="",o(),e.classList.add("hidden"),document.querySelector("#shadow").classList.add("hidden")}else n.setCustomValidity("Campo obrigatório"),n.reportValidity()})),e.appendChild(t),e.appendChild(n),e.appendChild(i),e}()),e.appendChild(t),e.appendChild(function(){const e=document.createElement("header"),t=document.createElement("i");t.classList.add("material-icons"),t.classList.add("burger"),t.classList.add("clickable"),t.textContent="menu",t.addEventListener("click",(()=>{document.querySelector(".sidebar").classList.toggle("active")}));const n=document.createElement("h1");return n.id="title",n.textContent="Minhas Tarefas",e.appendChild(t),e.appendChild(n),e}()),e.appendChild(s),m()},f=function(e,t){let n=0;if("global"===e)switch(t){case"general":for(const e of a.q)n+=f(a.q.indexOf(e),"general");return n;case"today":for(const e of a.q)n+=f(a.q.indexOf(e),"today");return n;case"thisWeek":for(const e of a.q)n+=f(a.q.indexOf(e),"thisWeek");return n}switch(t){case"general":return a.q[e].tasks.filter((e=>!e.complete)).length;case"today":for(const t of a.q[e].tasks)t.isDueToday()&&!t.complete&&(n+=1);return n;case"thisWeek":for(const t of a.q[e].tasks)t.isDueThisWeek()&&!t.complete&&(n+=1);return n}},v=function(){document.querySelectorAll(".counter").forEach((e=>{e.textContent=f(e.dataset.id,e.dataset.context)}))}},495:(e,t,n)=>{n.d(t,{Um:()=>d,o9:()=>o,q:()=>a});const a=[],o=e=>{const t=function(e){const t=[];return{name:e,tasks:t,addTask:(e,n,a,o,c,d)=>{t.push(i(e,n,a,o,c,d,this))},removeTask:e=>{const n=t.indexOf(e);-1!==n&&t.splice(n,1)}}}(e);return a.push(t),t},i=(e,t,n,a,o,i,c)=>({title:e,description:t,due:n,priority:a,notes:o,complete:i,toggleComplete:function(){this.complete?this.complete=!1:this.complete=!0},isDueToday:function(){const e=new Date;e.setHours(0,0,0,0);const t=new Date(this.due);return e.getUTCFullYear()===t.getUTCFullYear()&&e.getUTCMonth()===t.getUTCMonth()&&e.getUTCDate()===t.getUTCDate()},isDueThisWeek:function(){const e=new Date(this.due),t=new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),n=new Date;n.setHours(0,0,0,0);const a=new Date(n.setDate(n.getDate()-n.getDay())),o=new Date(a.getFullYear(),a.getMonth(),a.getDate()+6);return t>=a&&t<=o}});let c=function(e){let t;try{t=window.localStorage;const e="__storage_test__";return t.setItem(e,e),t.removeItem(e),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}();const d=function(e){c&&localStorage.setItem(e.name,JSON.stringify(e.tasks))};!function(){for(var e=0;e<localStorage.length;e++){const t=localStorage.key(e),n=localStorage.getItem(t);if(n){const e=JSON.parse(n),a=o(t);e.forEach((e=>{a.addTask(e.title,e.description,e.due,e.priority,e.notes,e.complete)}))}}}()}},v={};function g(e){var t=v[e];if(void 0!==t)return t.exports;var n=v[e]={id:e,exports:{}};return f[e](n,n.exports,g),n.exports}g.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return g.d(t,{a:t}),t},g.d=(e,t)=>{for(var n in t)g.o(t,n)&&!g.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},g.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),g.nc=void 0,e=g(569),t=g(379),n=g.n(t),a=g(795),o=g.n(a),i=g(777),c=g.n(i),d=g(565),r=g.n(d),s=g(216),l=g.n(s),p=g(589),u=g.n(p),m=g(426),(h={}).styleTagTransform=u(),h.setAttributes=r(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,(0,e.e)()})();