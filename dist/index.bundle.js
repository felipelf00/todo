(()=>{"use strict";var e,t,n,a,o,c,d,i,r,s,l,p,u,m,h,f={426:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(81),o=n.n(a),c=n(645),d=n.n(c)()(o());d.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Patua+One&display=swap);"]),d.push([e.id,':root {\n  /* --background-color: #f6f1f1; */\n  /* --background-color: #fff9f6; */\n  /* --background-color: #fffbf8; */\n  --background-color: #faf9f8;\n  --text-color-dark: #132d3a;\n  --sidebar-color: #f4efeb;\n  --header-color: #19a7ce;\n  --shadow-color: #78624f;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Patua One", cursive;\n  font-weight: lighter;\n  color: var(--text-color-dark);\n}\n\nh1,\nh2,\nh3,\nh4 {\n  font-weight: inherit;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  box-sizing: border-box;\n}\n\ninput:not([type="checkbox"]),\nselect,\ntextarea {\n  width: 250px;\n  padding: 0 5px;\n  margin: 0;\n}\n\nlabel {\n  display: block;\n}\n\n#shadow {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.4);\n  width: 100%;\n  height: 100%;\n  z-index: 4;\n}\n\n.hidden {\n  display: none;\n}\n\n.form {\n  position: absolute;\n  z-index: 5;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--background-color);\n  border-radius: 15px;\n  padding: 50px;\n}\n\nheader {\n  background-color: var(--header-color);\n  position: fixed;\n  width: 100%;\n  color: var(--background-color);\n  box-shadow: 0 2px var(--text-color-dark);\n  z-index: 4;\n}\n\n#title {\n  margin: 0;\n  text-align: center;\n  text-shadow: -1px 1px 4px var(--text-color-dark);\n  font-weight: 600;\n}\n\n.burger {\n  font-size: 2rem;\n  position: fixed;\n  padding: 4px;\n  z-index: 5;\n}\n\n#main {\n  padding-top: 40px;\n  text-align: center;\n  height: 100vh;\n  height: 100dvh;\n  background-color: var(--background-color);\n}\n\n.clickable {\n  cursor: pointer;\n}\n\n.navigation.clickable,\nli.clickable {\n  position: relative;\n  transition: padding-left 300ms cubic-bezier(0.18, 0.89, 0.51, 1.06);\n}\n\n.navigation.clickable {\n  display: flex;\n  justify-content: space-between;\n}\n\n.navigation.clickable:hover,\nli.clickable:hover,\n.navigation.clickable.active,\nli.clickable.active {\n  padding-left: 10px;\n}\n\n.navigation.clickable::before,\nli.clickable::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  opacity: 0;\n  transform: translateY(-50%);\n  transition: opacity 300ms;\n}\n\n.navigation.clickable:hover::before,\nli.clickable:hover::before,\n.navigation.clickable.active::before,\nli.clickable.active::before {\n  content: "•";\n  opacity: 1;\n}\n\n.sidebar {\n  position: fixed;\n  height: 100%;\n  left: -100%;\n  transition: 400ms;\n  z-index: 3;\n  top: 40px;\n  background-color: var(--sidebar-color);\n  color: var(--text-color-dark);\n  padding: 20px;\n  box-shadow: 2px 0px var(--shadow-color);\n\n  max-width: 230px;\n  overflow-wrap: break-word;\n}\n\n.sidebar.active {\n  left: 0;\n}\n\n.navigation {\n  font-size: 1.4rem;\n  margin-bottom: 4px;\n  /* position: relative; */\n}\n\n.navigation > ul,\n.navigation > div {\n  font-size: 1.2rem;\n  padding-left: 20px;\n}\n\n.navigation li {\n  display: flex;\n  justify-content: space-between;\n}\n\nul {\n  list-style-type: none;\n}\n\n#new-project span,\n#new-task span {\n  padding-left: 4px;\n}\n\n#create-project {\n  margin-left: 4px;\n}\n\n#new-task {\n  padding: 20px;\n  max-width: 120px;\n  margin: auto;\n}\n\n#add-new-task {\n  display: block;\n}\n\n.project-card {\n  display: grid;\n  grid-template-rows: auto 0fr;\n  width: min(520px, 100vw);\n  margin: auto;\n}\n\n.project-header {\n  grid-row: 1;\n  display: flex;\n  /* justify-content: center; */\n  justify-content: space-between;\n  padding: 8px;\n  width: 60%;\n  margin: auto;\n  margin-bottom: 7px;\n}\n\n.project-header:hover {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n}\n\n.card-title {\n  font-size: 1.2rem;\n}\n\n.counter {\n  width: 24px;\n  height: 24px;\n  /* aspect-ratio: 1 / 1; */\n  border-radius: 50%;\n  background-color: var(--header-color);\n  color: var(--background-color);\n  display: flex;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n\n.project-body,\n.task-body {\n  grid-row: 2;\n  overflow: hidden;\n}\n\n.project-header span,\n.task-header span {\n  transition: transform 300ms;\n}\n\n.task {\n  display: grid;\n  grid-template-rows: auto 0fr;\n  transition: all 250ms;\n  width: min(500px, 90vw);\n  margin: auto;\n  margin-bottom: 7px;\n  background-color: var(--sidebar-color);\n  border-radius: 10px;\n  padding: 8px;\n  box-shadow: 0px 3px var(--shadow-color);\n}\n\n.task:hover {\n  transform: translateY(-2px);\n  box-shadow: 0px 5px var(--shadow-color);\n}\n\n.task-header {\n  grid-row: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.task-header .right,\n.task-header .left {\n  flex: 0 0 auto;\n}\n\n.task-header .left {\n  margin-right: 34px;\n}\n\n.task-header .center {\n  flex: 1;\n  text-align: center;\n}\n\n.task-icons {\n  display: flex;\n  justify-content: center;\n}\n\n.task-checkbox {\n  accent-color: var(--header-color);\n}\n\n.task-icons * {\n  font-size: 19px;\n}\n\n.material-icons:hover {\n  color: var(--header-color);\n}\n\n.expanded {\n  grid-template-rows: auto 1fr;\n}\n\n.clicked {\n  transform: rotate(180deg);\n}\n\n.completed {\n  text-decoration: line-through;\n  opacity: 0.4;\n}\n\n@media only screen and (min-width: 600px) {\n  .burger {\n    display: none;\n  }\n  /* .body-container {\n    display: grid;\n    grid-template-columns: 200px auto;\n  } */\n  .sidebar {\n    /* grid-column: 1 / 2; */\n    left: 0;\n    max-width: clamp(164px, 17vw, 200px);\n  }\n  #main {\n    /* grid-column: 2 / 3; */\n  }\n}\n',""]);const i=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(a)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(d[r]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&d[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var c={},d=[],i=0;i<e.length;i++){var r=e[i],s=a.base?r[0]+a.base:r[0],l=c[s]||0,p="".concat(s," ").concat(l);c[s]=l+1;var u=n(p),m={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=o(m,a);a.byIndex=i,t.splice(i,0,{identifier:p,updater:h,references:1})}d.push(p)}return d}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var c=a(e=e||[],o=o||{});return function(e){e=e||[];for(var d=0;d<c.length;d++){var i=n(c[d]);t[i].references--}for(var r=a(e,o),s=0;s<c.length;s++){var l=n(c[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=r}}},777:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},569:(e,t,n)=>{n.d(t,{e:()=>m});var a=n(495);const o=function(){const e=document.querySelector("#projects ul");return e.innerHTML="",a.q.forEach((t=>{const n=document.createElement("li");n.textContent=t.name,n.classList.add("clickable");const o=document.createElement("span");o.classList.add("counter"),o.dataset.id=a.q.indexOf(t),o.dataset.context="general",o.textContent=h(a.q.indexOf(t),o.dataset.context),n.appendChild(o),n.addEventListener("click",(()=>{d(t),document.querySelectorAll(".navigation li.active").forEach((e=>{e.classList.remove("active")})),document.querySelectorAll(".navigation.active").forEach((e=>{e.classList.remove("active")})),n.classList.add("active")})),e.appendChild(n)})),e};let c;const d=function(e){const t=document.querySelector("main");t.innerHTML="",c=a.q.indexOf(e),t.appendChild(i(a.q[c]))},i=function(e){const t=document.createElement("div");t.id="project-container";const n=document.createElement("h2");n.textContent=e.name;const a=document.createElement("div");a.id="new-task",a.classList.add("clickable");const o=document.createElement("button");o.textContent="+",o.classList.add("add-button");const c=document.createElement("span");return c.textContent="Nova Tarefa",a.appendChild(o),a.appendChild(c),a.addEventListener("click",(()=>{document.querySelector("#new-task-form").classList.remove("hidden"),document.querySelector("#shadow").classList.remove("hidden")})),t.appendChild(n),t.appendChild(a),e.tasks.forEach((n=>{t.appendChild(r(n,e))})),t},r=function(e,t){const n=document.createElement("div");n.classList.add("task");const o=document.createElement("div");o.classList.add("task-header");const c=document.createElement("span");c.classList.add("material-icons"),c.classList.add("clickable"),c.classList.add("left"),c.textContent="expand_more",c.addEventListener("click",(()=>{n.classList.toggle("expanded"),c.classList.toggle("clicked")}));const d=document.createElement("span");d.textContent=e.title,d.classList.add("center"),d.addEventListener("click",(()=>{n.classList.toggle("expanded"),c.classList.toggle("clicked")}));const i=document.createElement("span");i.classList.add("task-icons"),i.classList.add("right");const r=document.createElement("input");r.type="checkbox",r.classList.add("task-checkbox"),r.dataset.projectIndex=a.q.indexOf(t),r.addEventListener("change",(()=>{d.classList.toggle("completed"),e.toggleComplete(),(0,a.Um)(t),f()})),e.complete&&(r.checked=!0,d.classList.add("completed"));const s=document.createElement("span");s.textContent="edit",s.classList.add("material-icons"),s.classList.add("clickable");const l=document.createElement("span");l.textContent="delete",l.classList.add("material-icons"),l.classList.add("clickable"),i.appendChild(s),i.appendChild(l),i.appendChild(r),o.appendChild(c),o.appendChild(d),o.appendChild(i);const p=document.createElement("div");p.classList.add("task-body");const u=document.createElement("div");u.textContent=e.description;const m=document.createElement("div"),h=e.due.split("-").reverse().join("/");m.textContent=`Prazo: ${h}`;const v=document.createElement("div");v.textContent=`Prioridade: ${e.priority}`;const g=document.createElement("div");return g.textContent=e.notes,p.appendChild(u),p.appendChild(m),p.appendChild(v),p.appendChild(g),n.appendChild(o),n.appendChild(p),n},s=function(e,t){const n=document.createElement("div");n.classList.add("project-card"),n.classList.add("expanded");const o=document.createElement("div");o.classList.add("project-header"),o.classList.add("clickable"),o.addEventListener("click",(()=>{n.classList.toggle("expanded"),c.classList.toggle("clicked")}));const c=document.createElement("span");c.classList.add("material-icons"),c.classList.add("clicked"),c.textContent="expand_more";const d=document.createElement("span");d.textContent=e.name,d.classList.add("card-title");const i=document.createElement("span");i.classList.add("counter"),i.dataset.id=a.q.indexOf(e),i.dataset.context=t,"today"===t&&(i.dataset.context="today"),"thisWeek"===t&&(i.dataset.context="thisWeek"),"general"===t&&(i.dataset.context="general"),i.textContent=h(i.dataset.id,i.dataset.context);const r=document.createElement("div");return r.classList.add("project-body"),o.appendChild(c),o.appendChild(d),o.appendChild(i),n.appendChild(o),n.appendChild(r),n},l=function(){const e=document.querySelector("#main");e.innerHTML="";const t=document.querySelector("#home");document.querySelectorAll(".navigation.active").forEach((e=>{e.classList.remove("active")})),document.querySelectorAll(".navigation .active").forEach((e=>{e.classList.remove("active")})),t.classList.add("active");const n=document.createElement("h1");n.textContent="Todas as tarefas:",e.appendChild(n),a.q.forEach((t=>{let n=!1;const a=s(t,"general");t.tasks.forEach((o=>{n||(e.appendChild(a),n=!0),a.lastElementChild.appendChild(r(o,t))}))}))},p=function(e){const t=new Date;t.setHours(0,0,0,0);const n=new Date(e.due);return t.getUTCFullYear()===n.getUTCFullYear()&&t.getUTCMonth()===n.getUTCMonth()&&t.getUTCDate()===n.getUTCDate()},u=function(e){const t=new Date(e.due),n=new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()),a=new Date;a.setHours(0,0,0,0);const o=new Date(a.setDate(a.getDate()-a.getDay())),c=new Date(o.getFullYear(),o.getMonth(),o.getDate()+6);return n>=o&&n<=c},m=()=>{document.querySelector("body").innerHTML="";const e=document.querySelector("body"),t=document.createElement("div");t.id="shadow",t.classList.add("hidden"),t.addEventListener("click",(()=>{t.classList.add("hidden"),document.querySelectorAll(".form").forEach((e=>{e.classList.add("hidden")}))}));const n=document.createElement("main");n.id="main";const i=document.createElement("div");i.appendChild(function(){const e=document.createElement("div");e.classList.add("sidebar");const t=document.createElement("div");t.classList.add("navigation"),t.classList.add("clickable"),t.id="home",t.textContent="Principal",t.addEventListener("click",(()=>{l()}));const n=document.createElement("span");n.classList.add("counter"),n.dataset.id="global",n.dataset.context="general",n.textContent=h(n.dataset.id,n.dataset.context),t.appendChild(n);const c=document.createElement("div");c.classList.add("navigation"),c.classList.add("clickable"),c.id="today",c.textContent="Hoje",c.addEventListener("click",(()=>{!function(){const e=document.querySelector("#main");e.innerHTML="";const t=document.querySelector("#today");document.querySelectorAll(".navigation.active").forEach((e=>{e.classList.remove("active")})),document.querySelectorAll(".navigation .active").forEach((e=>{e.classList.remove("active")})),t.classList.add("active");const n=document.createElement("h1");n.textContent="Tarefas para hoje:",e.appendChild(n),a.q.forEach((t=>{let n=!1;const a=s(t,"today");t.tasks.forEach((o=>{p(o)&&(n||(document.createElement("h2").textContent=t.name,e.appendChild(a),n=!0),a.lastElementChild.appendChild(r(o,t)))}))}))}()}));const d=document.createElement("span");d.classList.add("counter"),d.dataset.id="global",d.dataset.context="today",d.textContent=h(d.dataset.id,d.dataset.context),c.appendChild(d);const i=document.createElement("div");i.classList.add("navigation"),i.classList.add("clickable"),i.id="week",i.textContent="Esta semana",i.addEventListener("click",(()=>{!function(){const e=document.querySelector("#main");e.innerHTML="";const t=document.querySelector("#week");document.querySelectorAll(".navigation.active").forEach((e=>{e.classList.remove("active")})),document.querySelectorAll(".navigation .active").forEach((e=>{e.classList.remove("active")})),t.classList.add("active");const n=document.createElement("h1");n.textContent="Tarefas para essa semana:",e.appendChild(n),a.q.forEach((t=>{let n=!1;const a=s(t,"thisWeek");t.tasks.forEach((o=>{u(o)&&(n||(document.createElement("h2").textContent=t.name,e.appendChild(a),n=!0),a.lastElementChild.appendChild(r(o,t)))}))}))}()}));const m=document.createElement("span");m.classList.add("counter"),m.dataset.id="global",m.dataset.context="thisWeek",m.textContent=h(m.dataset.id,m.dataset.context),i.appendChild(m);const f=document.createElement("div");f.classList.add("navigation"),f.id="projects",f.textContent="Projetos: ";const v=document.createElement("ul");f.appendChild(v),document.addEventListener("DOMContentLoaded",(function(){o()}));const g=document.createElement("div");g.id="new-project",g.classList.add("clickable");const x=document.createElement("button");x.textContent="+",x.classList.add("add-button");const b=document.createElement("span");return b.textContent="Novo Projeto",g.appendChild(x),g.appendChild(b),g.addEventListener("click",(()=>{document.querySelector("#new-project-form").classList.remove("hidden"),document.querySelector("#shadow").classList.remove("hidden")})),f.appendChild(g),document.addEventListener("DOMContentLoaded",(()=>{document.querySelector("#main").addEventListener("click",(()=>{e.classList.contains("active")&&e.classList.remove("active")}))})),e.appendChild(t),e.appendChild(c),e.appendChild(i),e.appendChild(f),e}()),i.appendChild(n),i.id="body-container",e.appendChild(function(){const e=document.createElement("div");e.id="new-task-form",e.classList.add("form"),e.classList.add("hidden");const t=document.createElement("label");t.for="task-title",t.textContent="Tarefa: ";const n=document.createElement("input");n.id="task-title",n.name="task-title",n.type="text";const o=document.createElement("label");o.for="description",o.textContent="Descrição: ";const d=document.createElement("textarea");d.id="description",d.name="description",d.rows=4;const i=document.createElement("label");i.for="due",i.textContent="Prazo: ";const s=document.createElement("input");s.id="due",s.name="due",s.type="date";const l=document.createElement("label");l.for="priority",l.textContent="Prioridade: ";const p=document.createElement("select");p.name="priority";const u=document.createElement("option");u.value="",p.appendChild(u);for(let e=1;e<=5;e++){const t=document.createElement("option");t.value=e,t.textContent=e,p.appendChild(t)}const m=document.createElement("label");m.for="notes",m.textContent="Observações: ";const h=document.createElement("textarea");h.id="description",h.name="description",h.rows=4;const f=document.createElement("button");return f.id="add-new-task",f.classList.add("clickable"),f.textContent="Adicionar tarefa",f.addEventListener("click",(()=>{a.q[c].tasks.push((0,a.iQ)(n.value,d.value,s.value,p.value,h.value)),(0,a.Um)(a.q[c]);const t=a.q[c].tasks.length-1;document.querySelector("#project-container").appendChild(r(a.q[c].tasks[t],a.q[c])),e.classList.add("hidden"),document.querySelector("#shadow").classList.add("hidden"),n.value="",d.value="",s.value="",p.value="",h.value=""})),e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(d),e.appendChild(i),e.appendChild(s),e.appendChild(l),e.appendChild(p),e.appendChild(m),e.appendChild(h),e.appendChild(f),e}()),e.appendChild(function(){const e=document.createElement("div");e.id="new-project-form",e.classList.add("form"),e.classList.add("hidden");const t=document.createElement("label");t.for="project",t.textContent="Nome do projeto: ";const n=document.createElement("input");n.id="project",n.name="project";const c=document.createElement("button");return c.id="create-project",c.classList.add("clickable"),c.textContent="Criar projeto",c.addEventListener("click",(()=>{if(""!==n.value){const t=(0,a.o9)(n.value);d(t),(0,a.Um)(t),n.value="",o(),e.classList.add("hidden"),document.querySelector("#shadow").classList.add("hidden")}else n.setCustomValidity("Campo obrigatório"),n.reportValidity()})),e.appendChild(t),e.appendChild(n),e.appendChild(c),e}()),e.appendChild(t),e.appendChild(function(){const e=document.createElement("header"),t=document.createElement("i");t.classList.add("material-icons"),t.classList.add("burger"),t.classList.add("clickable"),t.textContent="menu",t.addEventListener("click",(()=>{document.querySelector(".sidebar").classList.toggle("active")}));const n=document.createElement("h1");return n.id="title",n.textContent="Minhas Tarefas",e.appendChild(t),e.appendChild(n),e}()),e.appendChild(i),l()},h=function(e,t){let n=0;if("global"===e)switch(t){case"general":for(const e of a.q)n+=h(a.q.indexOf(e),"general");return n;case"today":for(const e of a.q)n+=h(a.q.indexOf(e),"today");return n;case"thisWeek":for(const e of a.q)n+=h(a.q.indexOf(e),"thisWeek");return n}switch(t){case"general":return a.q[e].tasks.filter((e=>!e.complete)).length;case"today":for(const t of a.q[e].tasks)p(t)&&!t.complete&&(n+=1);return n;case"thisWeek":for(const t of a.q[e].tasks)u(t)&&!t.complete&&(n+=1);return n}},f=function(){document.querySelectorAll(".counter").forEach((e=>{e.textContent=h(e.dataset.id,e.dataset.context)}))}},495:(e,t,n)=>{n.d(t,{Um:()=>i,iQ:()=>c,o9:()=>o,q:()=>a});const a=[],o=e=>{const t=function(e){const t=[];return{name:e,tasks:t,addTask:(e,n,a,o,d,i)=>{t.push(c(e,n,a,o,d,i,this))}}}(e);return a.push(t),t},c=(e,t,n,a,o,c,d)=>({title:e,description:t,due:n,priority:a,notes:o,complete:c,toggleComplete:function(){this.complete?this.complete=!1:this.complete=!0}});let d=function(e){let t;try{t=window.localStorage;const e="__storage_test__";return t.setItem(e,e),t.removeItem(e),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}();const i=function(e){d&&localStorage.setItem(e.name,JSON.stringify(e.tasks))};!function(){for(var e=0;e<localStorage.length;e++){const t=localStorage.key(e),n=localStorage.getItem(t);if(n){const e=JSON.parse(n),a=o(t);e.forEach((e=>{a.addTask(e.title,e.description,e.due,e.priority,e.notes,e.complete)}))}}}()}},v={};function g(e){var t=v[e];if(void 0!==t)return t.exports;var n=v[e]={id:e,exports:{}};return f[e](n,n.exports,g),n.exports}g.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return g.d(t,{a:t}),t},g.d=(e,t)=>{for(var n in t)g.o(t,n)&&!g.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},g.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),g.nc=void 0,e=g(569),t=g(379),n=g.n(t),a=g(795),o=g.n(a),c=g(777),d=g.n(c),i=g(565),r=g.n(i),s=g(216),l=g.n(s),p=g(589),u=g.n(p),m=g(426),(h={}).styleTagTransform=u(),h.setAttributes=r(),h.insert=d().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,(0,e.e)()})();