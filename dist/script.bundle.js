(()=>{"use strict";const t=[],e=e=>{const n=function(t){const e=[];return{name:t,tasks:e,addTask:(t,n,c,r,s,i)=>{e.push(o(t,n,c,r,s,i,this))},removeTask:t=>{const o=e.indexOf(t);-1!==o&&e.splice(o,1)}}}(e);return t.push(n),n},o=(t,e,o,n,c,r,s)=>({title:t,description:e,due:o,priority:n,notes:c,complete:r,toggleComplete:function(){this.complete?this.complete=!1:this.complete=!0}});!function(t){let e;try{e=window.localStorage;const t="__storage_test__";return e.setItem(t,t),e.removeItem(t),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&e&&0!==e.length}}(),function(){for(var t=0;t<localStorage.length;t++){const o=localStorage.key(t),n=localStorage.getItem(o);if(n){const t=JSON.parse(n),c=e(o);t.forEach((t=>{c.addTask(t.title,t.description,t.due,t.priority,t.notes,t.complete)}))}}}()})();