(this.webpackJsonpmalarkey=this.webpackJsonpmalarkey||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),r=n(4),a=n.n(r),i=(n(20),n(9)),s=n(41);n(21);function u(){var e=Date.parse("27 May 2021 00:15:00 MST")-Date.now(),t=e%1e3,n=Math.floor(e/1e3%60),c=Math.floor(e/6e4%60),o=Math.floor(e/36e5%24),r=Math.floor(e/864e5),a=o<10?"0".concat(o):o,i=c<10?"0"+c:c,s=n<10?"0"+n:n,u=t.toString();return t<10?u="00"+t:t<100&&(u="0"+t),r+":"+a+":"+i+":"+s+"."+u}var f=n(3);var l=function(){var e=Object(c.useState)("true"===function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),c=0;c<n.length;c++){for(var o=n[c];" "===o.charAt(0);)o=o.substring(1);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return""}("isClockedIn")),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(u()),a=Object(i.a)(r,2),l=a[0],d=a[1];return Object(c.useEffect)((function(){setInterval((function(){d(u())}),10)}),[]),Object(c.useEffect)((function(){!function(e,t,n){var c=new Date;c.setTime(c.getTime()+24*n*60*60*1e3);var o="expires="+c.toUTCString();document.cookie=e+"="+t+";"+o+";path=/"}("isClockedIn",n.toString(),1)}),[n]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("h1",{children:["Operation Malarkey Commences In ",l,"!"]}),Object(f.jsx)(s.a,{variant:"contained",color:n?"secondary":"primary",onClick:function(){o(!n)},children:"Clock ".concat(n?"Out":"In")})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};a.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(l,{})}),document.getElementById("root")),d()}},[[27,1,2]]]);
//# sourceMappingURL=main.468e14b1.chunk.js.map