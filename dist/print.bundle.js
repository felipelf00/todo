(()=>{"use strict";var e={495:(e,t,o)=>{const n=[],r=e=>{const t=function(e){const t=[];return{name:e,tasks:t,addTask:(e,o,n,r,s,c)=>{t.push(a(e,o,n,r,s,c,this))},removeTask:e=>{const o=t.indexOf(e);-1!==o&&t.splice(o,1)}}}(e);return n.push(t),t},a=(e,t,o,n,r,a,s)=>({title:e,description:t,due:o,priority:n,notes:r,complete:a,toggleComplete:function(){this.complete?this.complete=!1:this.complete=!0},isDueToday:function(){const e=new Date;e.setHours(0,0,0,0);const t=new Date(this.due);return e.getUTCFullYear()===t.getUTCFullYear()&&e.getUTCMonth()===t.getUTCMonth()&&e.getUTCDate()===t.getUTCDate()},isDueThisWeek:function(){const e=new Date(this.due),t=new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),o=new Date;o.setHours(0,0,0,0);const n=new Date(o.setDate(o.getDate()-o.getDay())),r=new Date(n.getFullYear(),n.getMonth(),n.getDate()+6);return t>=n&&t<=r}});!function(e){let t;try{t=window.localStorage;const e="__storage_test__";return t.setItem(e,e),t.removeItem(e),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}(),function(){for(var e=0;e<localStorage.length;e++){const t=localStorage.key(e),o=localStorage.getItem(t);if(o){const e=JSON.parse(o),n=r(t);e.forEach((e=>{n.addTask(e.title,e.description,e.due,e.priority,e.notes,e.complete)}))}}}()}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(495)})();