(()=>{"use strict";const e=[],t=t=>{const c=function(e){const t=[];return{name:e,tasks:t,addTask:(e,c,n,r,a,s)=>{t.push(o(e,c,n,r,a,s))}}}(t);return e.push(c),c},o=(e,t,o,c,n,r)=>({title:e,description:t,due:o,priority:c,notes:n,complete:r,toggleComplete:()=>{(void 0).complete?(void 0).complete=!1:(void 0).complete=!0}});!function(e){let t;try{t=window.localStorage;const e="__storage_test__";return t.setItem(e,e),t.removeItem(e),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}(),function(){for(var e=0;e<localStorage.length;e++){const o=localStorage.key(e),c=localStorage.getItem(o);if(c){const e=JSON.parse(c),n=t(o);e.forEach((e=>{n.addTask(e.title,e.description,e.due,e.priority,e.notes,e.complete)}))}}}()})();