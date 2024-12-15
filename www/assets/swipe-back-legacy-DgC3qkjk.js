System.register(["./index-legacy-C2GMahoU.js","./vendor-legacy-aCet8kJP.js"],(function(e,t){"use strict";var n,r,i;return{setters:[e=>{n=e.i,r=e.a,i=e.b},null],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
e("createSwipeBackGesture",((e,t,s,o,c)=>{const a=e.ownerDocument.defaultView;let l=n(e);const u=e=>l?-e.deltaX:e.deltaX;return r({el:e,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:r=>(l=n(e),(e=>{const{startX:t}=e;return l?t>=a.innerWidth-50:t<=50})(r)&&t()),onStart:s,onMove:e=>{const t=u(e)/a.innerWidth;o(t)},onEnd:e=>{const t=u(e),n=a.innerWidth,r=t/n,s=(e=>l?-e.velocityX:e.velocityX)(e),o=s>=0&&(s>.2||t>n/2),d=(o?1-r:r)*n;let h=0;if(d>5){const e=d/Math.abs(s);h=Math.min(e,540)}c(o,r<=0?.01:i(0,r,.9999),h)}})}))}}}));
