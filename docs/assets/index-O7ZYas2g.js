var Oe=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var B=(e,t,n)=>(Oe(e,t,"read from private field"),n?n.call(e):t.get(e)),ce=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},ue=(e,t,n,a)=>(Oe(e,t,"write to private field"),a?a.call(e,n):t.set(e,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var vt={BASE_URL:"/task-quest/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const He=e=>{let t;const n=new Set,a=(d,l)=>{const c=typeof d=="function"?d(t):d;if(!Object.is(c,t)){const h=t;t=l??(typeof c!="object"||c===null)?c:Object.assign({},t,c),n.forEach(f=>f(t,h))}},r=()=>t,s={setState:a,getState:r,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(vt?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(a,r,s),s},wt=e=>e?He(e):He;function T(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function _(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}const Qe=6048e5,kt=864e5;let Dt={};function oe(){return Dt}function z(e,t){var s,d,l,c;const n=oe(),a=(t==null?void 0:t.weekStartsOn)??((d=(s=t==null?void 0:t.locale)==null?void 0:s.options)==null?void 0:d.weekStartsOn)??n.weekStartsOn??((c=(l=n.locale)==null?void 0:l.options)==null?void 0:c.weekStartsOn)??0,r=T(e),o=r.getDay(),i=(o<a?7:0)+o-a;return r.setDate(r.getDate()-i),r.setHours(0,0,0,0),r}function ne(e){return z(e,{weekStartsOn:1})}function Ye(e){const t=T(e),n=t.getFullYear(),a=_(e,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const r=ne(a),o=_(e,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=ne(o);return t.getTime()>=r.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function Ne(e){const t=T(e);return t.setHours(0,0,0,0),t}function _e(e){const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function ae(e,t){const n=Ne(e),a=Ne(t),r=n.getTime()-_e(n),o=a.getTime()-_e(a);return Math.round((r-o)/kt)}function St(e){const t=Ye(e),n=_(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),ne(n)}function Mt(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Et(e){if(!Mt(e)&&typeof e!="number")return!1;const t=T(e);return!isNaN(Number(t))}function Tt(e){const t=T(e),n=_(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const xt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ct=(e,t,n)=>{let a;const r=xt[e];return typeof r=="string"?a=r:t===1?a=r.one:a=r.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function he(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const At={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Pt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ot={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ht={date:he({formats:At,defaultWidth:"full"}),time:he({formats:Pt,defaultWidth:"full"}),dateTime:he({formats:Ot,defaultWidth:"full"})},Nt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},_t=(e,t,n,a)=>Nt[e];function q(e){return(t,n)=>{const a=n!=null&&n.context?String(n.context):"standalone";let r;if(a==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,s=n!=null&&n.width?String(n.width):i;r=e.formattingValues[s]||e.formattingValues[i]}else{const i=e.defaultWidth,s=n!=null&&n.width?String(n.width):e.defaultWidth;r=e.values[s]||e.values[i]}const o=e.argumentCallback?e.argumentCallback(t):t;return r[o]}}const $t={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Bt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},It={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ft={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Wt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Rt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Lt=(e,t)=>{const n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},qt={ordinalNumber:Lt,era:q({values:$t,defaultWidth:"wide"}),quarter:q({values:Bt,defaultWidth:"wide",argumentCallback:e=>e-1}),month:q({values:It,defaultWidth:"wide"}),day:q({values:Ft,defaultWidth:"wide"}),dayPeriod:q({values:Wt,defaultWidth:"wide",formattingValues:Rt,defaultFormattingWidth:"wide"})};function G(e){return(t,n={})=>{const a=n.width,r=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=t.match(r);if(!o)return null;const i=o[0],s=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(s)?Qt(s,h=>h.test(i)):Gt(s,h=>h.test(i));let l;l=e.valueCallback?e.valueCallback(d):d,l=n.valueCallback?n.valueCallback(l):l;const c=t.slice(i.length);return{value:l,rest:c}}}function Gt(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Qt(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function Yt(e){return(t,n={})=>{const a=t.match(e.matchPattern);if(!a)return null;const r=a[0],o=t.match(e.parsePattern);if(!o)return null;let i=e.valueCallback?e.valueCallback(o[0]):o[0];i=n.valueCallback?n.valueCallback(i):i;const s=t.slice(r.length);return{value:i,rest:s}}}const Vt=/^(\d+)(th|st|nd|rd)?/i,zt=/\d+/i,jt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Kt={any:[/^b/i,/^(a|c)/i]},Ut={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Xt={any:[/1/i,/2/i,/3/i,/4/i]},Jt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Zt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},en={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},tn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},nn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},an={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},rn={ordinalNumber:Yt({matchPattern:Vt,parsePattern:zt,valueCallback:e=>parseInt(e,10)}),era:G({matchPatterns:jt,defaultMatchWidth:"wide",parsePatterns:Kt,defaultParseWidth:"any"}),quarter:G({matchPatterns:Ut,defaultMatchWidth:"wide",parsePatterns:Xt,defaultParseWidth:"any",valueCallback:e=>e+1}),month:G({matchPatterns:Jt,defaultMatchWidth:"wide",parsePatterns:Zt,defaultParseWidth:"any"}),day:G({matchPatterns:en,defaultMatchWidth:"wide",parsePatterns:tn,defaultParseWidth:"any"}),dayPeriod:G({matchPatterns:nn,defaultMatchWidth:"any",parsePatterns:an,defaultParseWidth:"any"})},on={code:"en-US",formatDistance:Ct,formatLong:Ht,formatRelative:_t,localize:qt,match:rn,options:{weekStartsOn:0,firstWeekContainsDate:1}};function sn(e){const t=T(e);return ae(t,Tt(t))+1}function ln(e){const t=T(e),n=ne(t).getTime()-St(t).getTime();return Math.round(n/Qe)+1}function Ve(e,t){var c,h,f,y;const n=T(e),a=n.getFullYear(),r=oe(),o=(t==null?void 0:t.firstWeekContainsDate)??((h=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:h.firstWeekContainsDate)??r.firstWeekContainsDate??((y=(f=r.locale)==null?void 0:f.options)==null?void 0:y.firstWeekContainsDate)??1,i=_(e,0);i.setFullYear(a+1,0,o),i.setHours(0,0,0,0);const s=z(i,t),d=_(e,0);d.setFullYear(a,0,o),d.setHours(0,0,0,0);const l=z(d,t);return n.getTime()>=s.getTime()?a+1:n.getTime()>=l.getTime()?a:a-1}function dn(e,t){var s,d,l,c;const n=oe(),a=(t==null?void 0:t.firstWeekContainsDate)??((d=(s=t==null?void 0:t.locale)==null?void 0:s.options)==null?void 0:d.firstWeekContainsDate)??n.firstWeekContainsDate??((c=(l=n.locale)==null?void 0:l.options)==null?void 0:c.firstWeekContainsDate)??1,r=Ve(e,t),o=_(e,0);return o.setFullYear(r,0,a),o.setHours(0,0,0,0),z(o,t)}function cn(e,t){const n=T(e),a=z(n,t).getTime()-dn(n,t).getTime();return Math.round(a/Qe)+1}function b(e,t){const n=e<0?"-":"",a=Math.abs(e).toString().padStart(t,"0");return n+a}const C={y(e,t){const n=e.getFullYear(),a=n>0?n:1-n;return b(t==="yy"?a%100:a,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):b(n+1,2)},d(e,t){return b(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return b(e.getHours()%12||12,t.length)},H(e,t){return b(e.getHours(),t.length)},m(e,t){return b(e.getMinutes(),t.length)},s(e,t){return b(e.getSeconds(),t.length)},S(e,t){const n=t.length,a=e.getMilliseconds(),r=Math.floor(a*Math.pow(10,n-3));return b(r,t.length)}},I={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},un={G:function(e,t,n){const a=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const a=e.getFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return C.y(e,t)},Y:function(e,t,n,a){const r=Ve(e,a),o=r>0?r:1-r;if(t==="YY"){const i=o%100;return b(i,2)}return t==="Yo"?n.ordinalNumber(o,{unit:"year"}):b(o,t.length)},R:function(e,t){const n=Ye(e);return b(n,t.length)},u:function(e,t){const n=e.getFullYear();return b(n,t.length)},Q:function(e,t,n){const a=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return b(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){const a=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return b(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){const a=e.getMonth();switch(t){case"M":case"MM":return C.M(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){const a=e.getMonth();switch(t){case"L":return String(a+1);case"LL":return b(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){const r=cn(e,a);return t==="wo"?n.ordinalNumber(r,{unit:"week"}):b(r,t.length)},I:function(e,t,n){const a=ln(e);return t==="Io"?n.ordinalNumber(a,{unit:"week"}):b(a,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):C.d(e,t)},D:function(e,t,n){const a=sn(e);return t==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):b(a,t.length)},E:function(e,t,n){const a=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){const r=e.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return b(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){const r=e.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return b(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){const a=e.getDay(),r=a===0?7:a;switch(t){case"i":return String(r);case"ii":return b(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){const a=e.getHours();let r;switch(a===12?r=I.noon:a===0?r=I.midnight:r=a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){const a=e.getHours();let r;switch(a>=17?r=I.evening:a>=12?r=I.afternoon:a>=4?r=I.morning:r=I.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let a=e.getHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return C.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):C.H(e,t)},K:function(e,t,n){const a=e.getHours()%12;return t==="Ko"?n.ordinalNumber(a,{unit:"hour"}):b(a,t.length)},k:function(e,t,n){let a=e.getHours();return a===0&&(a=24),t==="ko"?n.ordinalNumber(a,{unit:"hour"}):b(a,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):C.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):C.s(e,t)},S:function(e,t){return C.S(e,t)},X:function(e,t,n,a){const o=(a._originalDate||e).getTimezoneOffset();if(o===0)return"Z";switch(t){case"X":return Be(o);case"XXXX":case"XX":return N(o);case"XXXXX":case"XXX":default:return N(o,":")}},x:function(e,t,n,a){const o=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return Be(o);case"xxxx":case"xx":return N(o);case"xxxxx":case"xxx":default:return N(o,":")}},O:function(e,t,n,a){const o=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+$e(o,":");case"OOOO":default:return"GMT"+N(o,":")}},z:function(e,t,n,a){const o=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+$e(o,":");case"zzzz":default:return"GMT"+N(o,":")}},t:function(e,t,n,a){const r=a._originalDate||e,o=Math.floor(r.getTime()/1e3);return b(o,t.length)},T:function(e,t,n,a){const o=(a._originalDate||e).getTime();return b(o,t.length)}};function $e(e,t=""){const n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),o=a%60;return o===0?n+String(r):n+String(r)+t+b(o,2)}function Be(e,t){return e%60===0?(e>0?"-":"+")+b(Math.abs(e)/60,2):N(e,t)}function N(e,t=""){const n=e>0?"-":"+",a=Math.abs(e),r=b(Math.floor(a/60),2),o=b(a%60,2);return n+r+t+o}const Ie=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},ze=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},hn=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return Ie(e,t);let o;switch(a){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;case"PPPP":default:o=t.dateTime({width:"full"});break}return o.replace("{{date}}",Ie(a,t)).replace("{{time}}",ze(r,t))},mn={p:ze,P:hn},fn=/^D+$/,gn=/^Y+$/,pn=["D","DD","YY","YYYY"];function yn(e){return fn.test(e)}function bn(e){return gn.test(e)}function Fe(e,t,n){const a=vn(e,t,n);if(console.warn(a),pn.includes(e))throw new RangeError(a)}function vn(e,t,n){const a=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const wn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,kn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Dn=/^'([^]*?)'?$/,Sn=/''/g,Mn=/[a-zA-Z]/;function En(e,t,n){var c,h,f,y,k,p,g,S;const a=oe(),r=(n==null?void 0:n.locale)??a.locale??on,o=(n==null?void 0:n.firstWeekContainsDate)??((h=(c=n==null?void 0:n.locale)==null?void 0:c.options)==null?void 0:h.firstWeekContainsDate)??a.firstWeekContainsDate??((y=(f=a.locale)==null?void 0:f.options)==null?void 0:y.firstWeekContainsDate)??1,i=(n==null?void 0:n.weekStartsOn)??((p=(k=n==null?void 0:n.locale)==null?void 0:k.options)==null?void 0:p.weekStartsOn)??a.weekStartsOn??((S=(g=a.locale)==null?void 0:g.options)==null?void 0:S.weekStartsOn)??0,s=T(e);if(!Et(s))throw new RangeError("Invalid time value");const d={firstWeekContainsDate:o,weekStartsOn:i,locale:r,_originalDate:s};return t.match(kn).map(function(u){const D=u[0];if(D==="p"||D==="P"){const X=mn[D];return X(u,r.formatLong)}return u}).join("").match(wn).map(function(u){if(u==="''")return"'";const D=u[0];if(D==="'")return Tn(u);const X=un[D];if(X)return!(n!=null&&n.useAdditionalWeekYearTokens)&&bn(u)&&Fe(u,t,String(e)),!(n!=null&&n.useAdditionalDayOfYearTokens)&&yn(u)&&Fe(u,t,String(e)),X(s,u,r.localize,d);if(D.match(Mn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");return u}).join("")}function Tn(e){const t=e.match(Dn);return t?t[1].replace(Sn,"'"):e}var L=window.CustomEvent;(!L||typeof L=="object")&&(L=function(t,n){n=n||{};var a=document.createEvent("CustomEvent");return a.initCustomEvent(t,!!n.bubbles,!!n.cancelable,n.detail||null),a},L.prototype=window.Event.prototype);function je(e,t){var n="on"+t.type.toLowerCase();return typeof e[n]=="function"&&e[n](t),e.dispatchEvent(t)}function xn(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),n=function(a,r){return!(t[a]===void 0||t[a]===r)};if(t.opacity<1||n("zIndex","auto")||n("transform","none")||n("mixBlendMode","normal")||n("filter","none")||n("perspective","none")||t.isolation==="isolate"||t.position==="fixed"||t.webkitOverflowScrolling==="touch")return!0;e=e.parentElement}return!1}function V(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Ke(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function Cn(e,t){for(var n=0;n<e.length;++n)if(e[n]===t)return!0;return!1}function me(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Ue(e){var t=["button","input","keygen","select","textarea"],n=t.map(function(i){return i+":not([disabled])"});n.push('[tabindex]:not([disabled]):not([tabindex=""])');var a=e.querySelector(n.join(", "));if(!a&&"attachShadow"in Element.prototype)for(var r=e.querySelectorAll("*"),o=0;o<r.length&&!(r[o].tagName&&r[o].shadowRoot&&(a=Ue(r[o].shadowRoot),a));o++);return a}function We(e){return e.isConnected||document.body.contains(e)}function Xe(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var n=m.formSubmitter;if(!n){var a=e.target,r="getRootNode"in a&&a.getRootNode()||document;n=r.activeElement}return!n||n.form!==t?null:n}function An(e){if(!e.defaultPrevented){var t=e.target,n=m.imagemapUseValue,a=Xe(e);n===null&&a&&(n=a.value);var r=V(t);if(r){var o=a&&a.getAttribute("formmethod")||t.getAttribute("method");o==="dialog"&&(e.preventDefault(),n!=null?r.close(n):r.close())}}}function Je(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",An,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var t=new MutationObserver(this.maybeHideModal.bind(this));t.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var n=!1,a=(function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}).bind(this),r,o=function(i){if(i.target===e){var s="DOMNodeRemoved";n|=i.type.substr(0,s.length)===s,window.clearTimeout(r),r=window.setTimeout(a,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,o)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}Je.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&We(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),m.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Ue(this.dialog_)),Ke(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!We(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!m.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");xn(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,m.needsCentering(this.dialog_)?(m.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var t=new L("close",{bubbles:!1,cancelable:!1});je(this.dialog_,t)}};var m={};m.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,n=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,n)+"px"};m.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var n=document.styleSheets[t],a=null;try{a=n.cssRules}catch{}if(a)for(var r=0;r<a.length;++r){var o=a[r],i=null;try{i=document.querySelectorAll(o.selectorText)}catch{}if(!(!i||!Cn(i,e))){var s=o.style.getPropertyValue("top"),d=o.style.getPropertyValue("bottom");if(s&&s!=="auto"||d&&d!=="auto")return!0}}}return!1};m.needsCentering=function(e){var t=window.getComputedStyle(e);return t.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!m.isInlinePositionSetByStylesheet(e)};m.forceRegisterDialog=function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new Je(e)};m.registerDialog=function(e){e.showModal||m.forceRegisterDialog(e)};m.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var n=[];t.forEach(function(a){for(var r=0,o;o=a.removedNodes[r];++r){if(o instanceof Element)o.localName==="dialog"&&n.push(o);else continue;n=n.concat(o.querySelectorAll("dialog"))}}),n.length&&e(n)}))};m.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};m.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};m.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,t=0,n;n=this.pendingDialogStack[t];++t)n.updateZIndex(--e,--e),t===0&&(this.overlay.style.zIndex=--e);var a=this.pendingDialogStack[0];if(a){var r=a.dialog.parentNode||document.body;r.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};m.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=V(e);){for(var t=0,n;n=this.pendingDialogStack[t];++t)if(n.dialog===e)return t===0;e=e.parentElement}return!1};m.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Ke(t),this.forwardTab_!==void 0)){var n=this.pendingDialogStack[0],a=n.dialog,r=a.compareDocumentPosition(t);return r&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?n.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}};m.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var t=new L("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&je(n.dialog,t)&&n.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};m.DialogManager.prototype.checkDOM_=function(e){var t=this.pendingDialogStack.slice();t.forEach(function(n){e.indexOf(n.dialog)!==-1?n.downgradeModal():n.maybeHideModal()})};m.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=t?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};m.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);t!==-1&&(this.pendingDialogStack.splice(t,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};m.dm=new m.DialogManager;m.formSubmitter=null;m.imagemapUseValue=null;if(window.HTMLDialogElement===void 0){var Re=document.createElement("form");if(Re.setAttribute("method","dialog"),Re.method!=="dialog"){var F=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(F){var Pn=F.get;F.get=function(){return me(this)?"dialog":Pn.call(this)};var On=F.set;F.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):On.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",F)}}document.addEventListener("click",function(e){if(m.formSubmitter=null,m.imagemapUseValue=null,!e.defaultPrevented){var t=e.target;if("composedPath"in e){var n=e.composedPath();t=n.shift()||t}if(!(!t||!me(t.form))){var a=t.type==="submit"&&["button","input"].indexOf(t.localName)>-1;if(!a){if(!(t.localName==="input"&&t.type==="image"))return;m.imagemapUseValue=e.offsetX+","+e.offsetY}var r=V(t);r&&(m.formSubmitter=t)}}},!1),document.addEventListener("submit",function(e){var t=e.target,n=V(t);if(!n){var a=Xe(e),r=a&&a.getAttribute("formmethod")||t.getAttribute("method");r==="dialog"&&e.preventDefault()}});var Hn=HTMLFormElement.prototype.submit,Nn=function(){if(!me(this))return Hn.call(this);var e=V(this);e&&e.close()};HTMLFormElement.prototype.submit=Nn}const _n=["arctics","beaches","caves","cliffs","coasts","countrysides","deserts","fields","forests","hills","islands","lakes","land","meadows","mountains","oceans","rainforests","rivers","seas","valleys","volcanos","wilds","lush","grass","floral","vivid","abloom","vibrant","dense","earth","diversified","scarce","dry","barren","dead","floods","flowering","budding","bushes","shrubs","hedges","grass","moss","mushrooms","herbs","ferns","reeds","bamboo","ivy","poison ivy","sun","humid","stifling","gloomy","rain","dry","clouds","fog","clear","crisp","cool","winds","breezes","wet","fair","mild","still","overcast","seed","root","stem","stalk","leaf","petal","bud","thorn","branch","twig","bark","daffodil","rose","dandelion","daisys","lilys","tulips","sunflowers","maples","oaks","birchs","willows","poplars","pines","bays","lakes","seas","oceans","rivers","creeks","waterfalls","canyons","glaciers","meadows","forests","mountains","hills","plains","marshes","islands","peninsula","savannas","valleys","deserts","tundras","cliffs","caves","beaches","fields","bedrock","sedimentary rock","igneous rock","metamorphic rock","craters","erosion","fossils","gems","geysers","hot springs","earthquakes","volcanos","magma","lava","eruptions","tsunami","islands","bays","riverbanks","beachs","seas","oceans","coasts","grounds","dunes","deserts","cliffs","parks","meadows","jungles","forests","glaciers","lands","hills","fields","grass","soil","sea shells","mushrooms","pebbles","rocks","stones","smoke","ponds","rivers","waves","sky","water","trees","plantss","moss","flower","bushes","sand","mud","stars","planets","mines","paths","roads","tunnels","volcanos","caves"],$n=["aggressive","alive","ancient","anxious","arrow","attractive","average","bad","beautiful","beige","biter","big","bitter","black","blue","brown","bumpy","busy","careful","cheap","chestnut","clear","cold","combative","cool","cotton","crazy","crooked","crystal","dangerous","dead","delicious","dim","drab","dry","dull","dusty","elderly","excited","expensive","fancy","fat","few","filthy","fresh","fuzzy","giant","good","graceful","granite","green","handsome","happy","hard","harsh","hollow","hot","huge","hungry","large","lazy","light","long","low","massive","mellow","melodic","miniscule","modern","new","noisy","oak","octagonal","old","orange","oval","petite","pink","plain","plastic","poor","puny","purple","quiet","rainy","red","rich","right","round","sad","safe","salty","sane","scared","shallow","sharp","shiny","short","shrill","shy","skinny","small","soft","solid","sore","sour","square","steep","sticky","strong","superior","sweet","swift","tan","tart","teak","teeny","terrible","tiny","tired","tremendous","triangular","ugly","unusual","weak","weary","wet","whispering","white","wild","wooden","woolen","wrong","yellow","young","runner","diver","dancer","eater","seer","leerer","crier","giver","fighter","diver","biter","finder","maker","baby-faced","bow-legged","broken-hearted","bull-headed","candy-stripped","four-sided","freckle-faced","hard-hearted","hard-nosed","heavy-handed","ice-cold","left-handed","life-giving","long-legged","long-winded","pigeon-toed","red-blooded","self-centered","short-tempered","sure-footed","thin-skinned","tight-pawed"],Bn=["shrewdness","cete","colony","cloud","camp","sloth","sleuth","swarm","gang","obstinacy","caravan","destruction","quiver","bask","murder","litter","drove","convocation","parade","gang","herd","cast","business","school","stand","skulk","leash","gaggle","tower","band","bloat","cackle","shadow","smack","troop","mob","conspiracy","leap","pride","labor","barrel","troop","pack","family","team","yoke","parliament","pandemonium","drift","drove","sounder","prickle","herd","colony","unkindness","crash","shiver","stench","nest","dray","scurry","fever","wedge","ambush","streak","knot","gang","rafter","bale","nest","colony","gang","pack","gam","pack","zeal","troop","shrewdness","flange","cete","colony","cauldron","sleuth","sloth","colony","family","sute","sounder","obstinacy","gang","caravan","flock","train","herd","clowder","pounce","glaring","destruction","mob","coalition","rag","rake","herd","parcel","pack","cowardice","pod","pace","herd","parade","memory","gang","business","hob","jill","kit","leash","skulk","earth","tower","implausibility","trip","drove","herd","flock","tribe","troop","band","array","thunder","bloat","clan","cackle","Jaguars","mob","troop","kindle","litter","intrigue","conspiracy","leap","pride","sawt","richness","labor","troop","barrel","pack","span","barren","blessing","raft","romp","drove","team","yoke","embarrassment","drift","drove","sounder","team","passel","pack","aurora","celebration","prickle","turmoil","pod","school","herd","colonies","coteries","colony","nest","warren","husk","down","herd","gaze","boars","sows","stubbornness","crash","harem","bed","scurry","dray","streak","ambush","pod","gam","herd","pack","rout","route","wisdom","herd","zeal","dazzle","sedge","wake","chain","cover","gulp","clutch","murder","horde","unkindness","conspiracy","trip","dule","pitying","brace","team","flock","raft","paddling","badling","convocation","cast","charm","stand","flamboyance","flock","gaggle","skein","pack","cast","kettle","boil","sedge","siege","charm","scold","party","deceit","exaltation","musket","brace","sord","tiding","charm","gulp","watch","parliament","pandemonium","company","covey","ostentation","muster","Pod","squadron","convent","tuxedo","colony","muster","parcel","rookery","nest","nide","nye","guff","bouquet","congregation","wing","covey","building","bevy","covey","unkindness","squabble","walk","wisp","host","murmuration","muster","mustering","bevy","game","wedge","spring","mutation","gang","rafter","committee","kettle","wake","fall","descent","congregation","battery","quiver","bask","bed","draft","nest","run","school","shoal","army","army","slaughter","bank","rhumba","maelstrom","run","family","shiver","nest","pit","den","fever","knot","hover","bale","nest","generation","grist","hive","swarm","kaleidoscope","flutter","swarm","army","bed","intrusion","cast","consortium","business","cloud","bloom","fluther","smack","risk","plague","swarm","scourge","consortium","rally","bed","rout","walk","hood","escargatoire","cluster","audience","bunch"],In=["Elias","Onni","Eetu","Leo","Aleksi","Leevi","Veeti","Joona","Niilo","Oliver","Lauri","Eino","Eemeli","Matias","Lenni","Mikael","Viljami","Akseli","Julius","Joel","Rasmus","Väinö","Juho","Vilho","Valtteri","Niklas","Aapo","Aatu","Otto","Daniel","Aaro","Konsta","Peetu","Samuel","Eeli","Miro","Anton","Niko","Jesse","Oskari","Arttu","Eelis","Eemil","Emil","Kasper","Topias","Nooa","Samu","Luka","Sofia","Venla","Aada","Emma","Aino","Ella","Emilia","Iida","Siiri","Anni","Helmi","Sara","Veera","Vilma","Elli","Elsa","Lotta","Olivia","Viivi","Kerttu","Amanda","Nella","Iina","Enni","Emmi","Lilja","Pihla","Oona","Alisa","Minea","Ronja","Milla","Sanni","Linnea","Pinja","Ilona","Ellen","Nelli","Nea","Julia","Eevi","Hilla","Minttu","Inka","Peppi","Milja","Anna","Neea","Laura","Matilda","Acha","Noig","Shylt","Piaw","Iwari","Eoughi","Food","Jys","Noont","Sok","Eperu","Draech","Leist","Uone","Moed","Emv","Oeri","Ceih","Iaph","Rynq","Staim","Syr","Giash","Essnt","Ytoro","Ytoni","Loud","Worr","Yero","Daurr","Souh","Yeyl","Uskb","Yrila","Enthn","Loil","Bok","Ane","Quass","Tinp","Eumu","Iessu","Queld","Beas","Oiae","Moss","Itm","Tuid","Asp","Ashth","Eiri","Ebani","Tich","Erodo","Wary","Tair","Ted","Etiao","Oima","Yhatu","Joer","Kis","Seyll","Neunn","Slest","Garh","Uyera","Enthn","Alert","Mish","Croend","Ildgh","Stiar","Sygh","Lalt","Okele","Ilyei","Traull","Naig","Eemy","Orodo","Irani","Nyq","Ovori","Pheut","Ingu","Adm","Morv","Eenga","Samr","Stoust","Loil","Asb","Ghat","Atai","Nalt","Radk","Ayery","Roch","Angr","Obela","Yis","Yait","Staush","Raknn","Whin","Iashi","Quev","Brot","Chres","Veyl","Odela","Zhyl","Ywory","Ethera","Athsh","Ikimi","Skelld","Hoeg","Eryera","Pytin","Mosyk","Engdyne","Urnlye","Erut","Sat","Taias","Kimbur","Untwurn","Etinau","Banbani","Dator","Veran","Wytur","Raklold","Burkal","Arroth","Ashunt","Essath","Taixther","Kalhem","Hinsaya","Issden","Ackshye","Trabel","Ardbiss","Daryt","Beltur","Rilsay","Rakill","Sayal","Dartser","Turddyn","Alector","Rilak","Yumos","Quebelo","Quem","Rothvtan","Vuris","Turgach","Alealee","Rakyr","Hatseru","Queish","Aldif","Hatbmor","Shyas","Unthon","Daraso","Stroskel","Delok","Vesup","Cheneng","Rayrotho","Rothormu","Rodnyso","Undek","Oskel","Denunt","Quaild","Diar","Tinfen","Kobur","Ightshy","Kimktai","Banyc","Undusk","Tonesta","Delchei","Ustlkel","Risgha","Ernom","Adrako","Onom","Darough","Tinor","Torwban","Siril","Belnyer","Crakim","Polel","Lyeelme","Zheat","Kelird","Wornurn","Saytsul","Veroth","Yerud","Botia","Threess","Tanab","Eted","Asaughe","Etiz","Riscet","Tindden","Inasque","Bluald","Sihat","Soris","Enit","Banirt","Arur","Sayen","Ingcage","Erhino","Ardety","Estor","Yerkim","Dendsam","Dehon","Banild","Lyelen","Daend","Gior","Polyn","Ighton","Anouk","Cerys","Clio","Cyra","Ione","Isolde","Jacinta","Ondine","Paz","Sask","Sidra","Tempest","Toril","Decima","Isolde","Taur","Tert","Tull","Tur","Valer","Ver","Zel","Abena","Eshe","Ife","Nemy","Nuru","Nyal","Taci","Taraj","Zur","Brey","Remor","Sachi","Tanik","Tur","Tyls","Venc","Kalat","Khager","Leyter","Myrker","Sarch","Tamar","Vrumad","Zover","Zad","Zel","Zella","Zelm","Zilph","Zita","Zol","Zul","Omer","Tal","Mar","Noor","Nur"],Fn=["Abaddon","Incarnate","Abated","Mass","Flesh","Abhorrence","Ablaze","Sorrow","Aborted","Abramelin","Abscess","Absence","Abysmal","Dawn","Abysmal","Torment","Acheron","Acid","Bath","Aeon","Aeternus","Afflicted","Agonist","Akercocke","Alchemist","Aletheian","Altar","Amenta","Amon","Amarth","Amoral","Amorphis","Anata","Anathema","Angelcorpse","Animosity","Antestor","Anvil","Doom","Die","Apokalyptischen","Reiter","Arch","Enemy","Archeon","Architects","Arise","Armageddon","Armoured","Angel","Arsis","As","Lay","Dying","Asesino","Asphyx","Assück","At","Gates","Atheist","Atrocity","Atrophia","Red","Sun","Austrian","Death","Machine","Autokrator","Autopsy","Autopsy","Torment","Avulsed","Battlelore","Becoming","Archetype","Beheaded","Behemoth","Belphegor","Benea","Reach","Beneath","Massacre","Benighted","Berzerker","Bestial","Warlust","Between","Buried","Beyond","Sixth","Seal","Bilocate","Black","Dahlia","Murder","Blinded","Colony","Blood","Duster","Blood","Red","Throne","Blood","Stain","Bloodbath","Bolt","Thrower","Born","Osiris","Brain","Drill","Brodequin","Broken","Hope","Brujeria","Brutal","Truth","Night","Cadacross","Cadaver","Callenish","Circle","Cancer","Caninus","Cannibal","Corpse","Capharnaum","Carbonized","Carcass","Cardinal","Sin","Carnage","Carnival","Coal","Cattle","Decapitation","Cavalera","Conspiracy","Celtic","Frost","Cemetary","Cenotaph","Centinex","Cephalic","Carnage","Ceremonial","Oath","Chain","Collector","Changer","Chasm","Bodom","Circle","Dead","Coldworker","Comecon","Concubine","Condemned","Consolation","Coprofago","Corpus","Mortale","County","Medical","Examiners","Cradle","Filth","Cryptic","Shift","Crimson","Armada","Crimson","Death","Crimson","Thorn","Crionics","Crown","Cryogenic","Cryptopsy","Cynic","Dååth","Damaged","Dance","Club","Massacre","Dark","Age","Dark","Heresy","Dark","Lunacy","Dark","Tranquillity","Darkest","Hour","Darkthrone","Dawn","Azazel","Daylight","Dies","Dead","Horse","Dead","Infection","Deadlock","Death","Death","Breath","Death","Organ","Death","Requisite","Deathbound","Deathchain","Debauchery","Decadence","Decapitated","Deceased","Decrepit","Birth","Deeds","Flesh","Defeated","Sanity","Defecation","Defleshed","Deicide","Demenzia","Demigod","Demilich","Demiricous","Demonoid","Desecration","Despised","Icon","Despite","Destroy","Desultory","Dethklok","Detonation","Deuteronomium","Devian","DevilDriver","Devilish","Impressions","Devolved","Devourment","Diablo","Diabolic","Dies","Irae","Different","Breed","Killer","Dimension","Zero","Disarmonia","Mundi","Disavowed","Disbelief","Disentomb","Disgorge","Disharmonic","Orchestra","Disillusion","Disincarnate","Disinterment","Diskreet","Dismember","Diocletian","Dispatched","Dissection","Distorted","Divine","Heresy","Dominion","Dominus","Dr.","Shrinker","Drottnar","Duskfall","Dying","Fetus","Ebony","Tears","Edge","Sanity","Elysia","Elysium","Embalmer","Embodyment","Ensiferum","Entombed","Epoch","Unlight","Eternal","Lord","Eternal","Oath","Eternal","Tears","Sorrow","Eucharist","Evoken","Ex","Deo","Exhumed","Expulsion","Extol","Extreme","Noise","Terror","Face","Down","Faceless","Fading","Falchion","Farmakon","Fear","Factory","Fear","Thoughts","Festerday","Fission","Fleshcrawl","Fleshgod","Apocalypse","Fragments","Unbecoming","From","Second","Story","Window","From","Shallows","Frontside","Funeral","Pyre","Gates","Ishtar","Gathering","Gehenna","General","Surgery","Ghost","Brigade","Ghoul","Glass","Casket","Goatlord","Goatwhore","God","Dethroned","God","Forbid","God","Macabre","Godgory","Gojira","Gone","Postal","Goreaphobia","Gorefest","Gorelord","Gorerotted","Gorguts","Gory","Blister","Grave","Graves","Valor","Grenouer","Grief","War","Grotesque","Gut","Gutworm","Hacride","Haemorrhage","Haggard","Hate","Hate","Eternal","Hatebeak","Hatesphere","Haunted","Hearse","Heaven","Shall","Burn","Hecate","Enthroned","Hellhammer","Helltrain","Hibernus","Mortis","Hollenthon","Hooded","Menace","Human","Human","Remains","Hybrid","Hypocrisy","Illdisposed","Immolation","Immortal","Souls","Impaled","Impaled","Nazarene","Impending","Doom","Impetigo","Impious","Battle","Flames","Mourning","Incantation","Inevitable","End","Infernäl","Mäjesty","Inhumate","Inhume","Iniquity","Insision","Insomnium","Eternity","Moat","Jungle","Rot","Kaamos","Kalmah","Katafalk","Kataklysm","Katatonia","Kekal","Killing","Addiction","Knights","Abyss","Konkhra","Krabathor","Krisiun","Kronos","Legion","Damned","Leng","Tch'e","Liers","Wait","Living","Sacrifice","Lock","Up","Lost","Soul","Loudblast","Lyzanxia","Macabre","Malefice","Malignancy","Malevolent","Creation","Manimal","Marionette","Martyr","Massacra","Massacre","Master","Mendeed","Mental","Horror","Mercenary","Merlin","Meshuggah","Messiah","Misanthrope","Miseration","Misery","Misery","Mistress","Mnemic","Molotov","Solution","Monstrosity","Morbid","Angel","Morgion","Morgoth","Morphia","Mors","Principium","Est","Mortem","Mortician","Mortification","Murder","Squad","My","Dying","Bride","Mygrain","Myrkskog","Nahemah","Napalm","Death","Nasum","Neaera","Necare","Necrophagia","Necrophagist","Necrophobic","Nefastus","Dies","Nefilim","Nembrionic","Neptune","Neuraxis","Nightfall","Nightrage","Nights","Like","These","Nihilist","Nile","Nocturnus","Nonexist","Norther","Noumena","Novembre","Death","Obituary","Obliterate","Obscene","Eulogy","Obscura","Oceano","October","Tide","Odious","Mortem","Old","Man's","Omnium","Gatherum","Thorns","Lay","One","Man","Army","Undead","Quartet","Opeth","Ophiolatry","Oppressor","Opprobrium","Order","from","Chaos","Origin","Orphaned","Land","Paganizer","Painstruck","Panzerchrist","Paradise","Lost","Paths","Possession","Persefone","Pavor","Pestilence","Pig","Destroyer","Portal","Possessed","Hate","Disfigurement","Psycroptic","Pungent","Stench","Pyogenesis","Vadis","Raise","Hell","Raintime","Rapture","Raunchy","Rebaelliun","Red","Chord","Red","Death","Red","Shore","Regurgitate","Renascent","Ribspreader","Ripping","Corpse","Rotted","Rotten","Sound","Rudra","Runemagick","Sacrificium","Sadist","Sadistic","Intent","Sadistik","Exekution","Sadus","Salt","Wound","Sarcófago","Satariel","Saturnus","Scar","Symmetry","Scarve","Schaliach","Sceptic","Sculptured","Seance","Sentenced","Septic","Flesh","Sepultura","Severe","Torture","Shadows","Fall","Showdown","Sinate","Sinister","Six","Feet","Under","Skinless","Skyfire","Slaughter","Soilent","Green","Soilwork","Solamors","Solution",".45","Sonic","Syndicate","Sons","Azrael","Sotajumala","Soul","Demise","Soul","Embraced","Soulburn","Spawn","Possession","Stovokor","Strapping","Young","Lad","Success","Will","Write","Apocalypse","Across","Sky","Suffocation","Susperia","Swallow","Sun","Switchblade","Sylosis","Sympathy","Terror","Terrorizer","Terrorust","Thanatos","Thanatoschizo","Theory","Practice","Therion","Thirdmoon","This","Ending","Thorr's","Hammer","Threat","Signal","Through","Eyes","Dead","Thy","Disease","Tiamat","Torture","Killer","Torture","Squad","Tourniquet","Trap","Them","Tristwood","Unanimated","Underoath","Unleashed","Vader","Vastum","Venom","Prison","Vile","Visceral","Bleeding","Vital","Remains","Vomitory","Vorkreist","Waltari","Wayd","Winter","With","Blood","Comes","Cleansing","Scavenging","Shocker","blaster","Shambling","Cricket","Soulanger","Searcher","Strokeiron","Displacer","Thief","drowner","Lesser","Slick","Ghost","Lost","Crusher","devourer","Metal","Corpse","Mistblaze","Ooze","Rider","Prismatic","Bolt","Babbler","Profane","Shade","Reptile","Dissector","vagabond","Acidmemory","Thief","Barbed","Battler","behemoth","Camel","Assasin","Dead","Blinder","Dinosaur","Mold","First","Wraith","Glow","Revenant","Houndslaughter","Anger","Owl","Beholder","rider","Black","Rainbow","Heap","Burnemerald","Medusa","Corpse","Butterfly","Decaying","Slasher","Fallen","Plant","Fear","Dweller","First","Vine","Mass","Flashmagic","Disenchanter","Forester","retriever","Grasping","Dominator","corpse","Lummox","Otter","Man","Jelly","Mysterious","Kitten","Quipper","Mystic","Slayer","Parasite","Vision","Pixie","Tree","Plagueforest","Boss","Secret","Howl","Dog","Slay","Consumer","Sonic","Terror","Southern","Tooth","Sphinx","Jackal","Unthinkable","Bee","Demon","Bull","Binder","Celestial","Ray","Chaotic","Succubus","Curseheap","Damned","Wisp","Dead","Cleaver","grub","Ember","Swan","Embermagic","Turtle","Fogmoon","Dissolver","Glove","Amoeba","Greater","Gorilla","Hunter","sucker","King","Babbler","rotter","Liquid","Shocker","Mule","Beast","Rancid","Rotter","River","Singer","Shadeback","Spikethief","Swarm","Steel","Stinger","singer","Swordcrash","Wisp","Piercer","Wood","Catfish","Yellow","Chill","Herder","Basilisk","Wolverine","Bee","Rinocerous","Clay","Lord","trapper","Death","Cube","Doomchange","Plant","Evil","Lich","Forgotten","Cold","Warlock","Giant","Plant","Vampire","Handcorpse","Executioner","King","Grimoire","Ram","Mass","Ray","Mist","Subjugator","Mystic","Liquid","Enveloper","Mystic","Stalker","lummox","Ochre","Tearer","slayer","Rainbow","Mastodon","Red","Dart","Cactus","Rootplant","Stun","Lynx","Subjugator","swimmer","Thunderer","heap","Tombminion","Wasp","Tree","Heap","Wood","Fungus","Zombie","Cube","Astral","Hacker","thinker","Barracuda","Howler","Blessed","Man","displacer","Caveillusion","Faerie","Chargetail","Devil","Enchanter","stinger","Frozen","Crab","Ghost","Goat","Haunter","rider","Jackal","Killer","Keeper","Hawk","Legendary","Hook","Drowner","Mantis","Succubus","Poisonous","Blinder","cube","Retriever","Entity","Returned","roper","Rotting","Maw","Secret","Swimmer","charmer","Throat","Swarm","Twistershift","Unthinkable","Insect","Hangman","Violent","Gremlin","Wicked","Vivisector","breeder","Agonydune","Choker","Blowweb","Manipulator","Buried","Freezer","wonder","Cactusmold","Chromatic","Stinger","Queen","Damned","Squealer","chiller","Decaying","Deer","Demon","Ooze","Giant","Otter","Goblin","Sphinx","Grasper","Skin","Hellbloom","Shadow","Jelly","pudding","Magician","Leech","Minioncurse","Emperor","Oblivionacid","Kraken","Ooze","Flame","Rust","Sapphire","Drake","Sandocean","Enchanter","Slug","Binder","Sneakcharge","Basher","Stenchbone","Terrible","Hate","Doppleganger","Undead","Vulpine","Violet","Witherer","devourer","Burning","Seducer","Charred","Hangman","Clay","Corpse","hangman","Devouring","Herder","quipper","Evillightning","Scorpion","Fallen","Bolt","Fleshflare","Grasping","Choke","Hellish","Enchanter","Hunger","Chimera","Lavaslay","Lesser","Arc","Behemoth","Lump","Thunderer","Mad","Smasher","crusher","Maskbrain","Medusa","Flicker","Metallic","Ram","Mound","Spider","Mysterious","Cactus","Phased","Spectator","devourer","Rivershiver","Tracker","Scum","Wraith","Singer","Transposer","Sucker","slaughterer","Wicked","Sheet","Warrior"],Y=e=>{const t=e.replace(/([A-Z])/g," $1");return t.charAt(0).toUpperCase()+t.slice(1)},Ze={addOneToMaxHealth:(e,t)=>{t?e.maxHp+=1:e.maxHp-=1},addTwoToMaxHealth:(e,t)=>{t?e.maxHp+=2:e.maxHp-=2},addOneToGoldWhenGained:(e,t)=>{t?e.goldBonus+=1:e.goldBonus-=1},addTwoToGoldWhenGained:(e,t)=>{t?e.goldBonus+=2:e.goldBonus-=2},addOneToExperienceWhenGained:(e,t)=>{t?e.xpBonus+=1:e.xpBonus-=1}},et={addThreeToMaxHealth:(e,t)=>{t?e.maxHp+=3:e.maxHp-=3},addFourToMaxHealth:(e,t)=>{t?e.maxHp+=4:e.maxHp-=4},addThreeToGoldWhenGained:(e,t)=>{t?e.goldBonus+=3:e.goldBonus-=3}},tt={addTwoToExperienceWhenGained:(e,t)=>{t?e.xpBonus+=2:e.xpBonus-=2},addThreeToExperienceWhenGained:(e,t)=>{t?e.xpBonus+=3:e.xpBonus-=3},addFourToExperienceWhenGained:(e,t)=>{t?e.xpBonus+=4:e.xpBonus-=4},addFourToGoldWhenGained:(e,t)=>{t?e.goldBonus+=4:e.goldBonus-=4}};function nt(e){const t=Math.random()<.1;let n;Math.random()>.2?n="The "+A($n)+" "+A(Bn)+" of "+A(_n):n=A(In)+" the "+A(Fn);const a="#"+Math.floor(Math.random()*16777215).toString(16),r="#"+Math.floor(Math.random()*16777215).toString(16),o=[],i=Object.keys(Ze),s=Object.keys(et),d=Object.keys(tt);return e==="common"?o.push(A(i)):e==="uncommon"?o.push(A(s)):o.push(A(d)),{id:Date.now(),name:n,effects:o,colors:[a,r],isThumb:t,rarity:e}}function A(e){return e[Math.floor(Math.random()*e.length)]}var Wn={BASE_URL:"/task-quest/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};function at(e,t){let n;try{n=e()}catch{return}return{getItem:r=>{var o;const i=d=>d===null?null:JSON.parse(d,t==null?void 0:t.reviver),s=(o=n.getItem(r))!=null?o:null;return s instanceof Promise?s.then(i):i(s)},setItem:(r,o)=>n.setItem(r,JSON.stringify(o,t==null?void 0:t.replacer)),removeItem:r=>n.removeItem(r)}}const j=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(a){return j(a)(n)},catch(a){return this}}}catch(n){return{then(a){return this},catch(a){return j(a)(n)}}}},Rn=(e,t)=>(n,a,r)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:g=>g,version:0,merge:(g,S)=>({...S,...g}),...t},i=!1;const s=new Set,d=new Set;let l;try{l=o.getStorage()}catch{}if(!l)return e((...g)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...g)},a,r);const c=j(o.serialize),h=()=>{const g=o.partialize({...a()});let S;const u=c({state:g,version:o.version}).then(D=>l.setItem(o.name,D)).catch(D=>{S=D});if(S)throw S;return u},f=r.setState;r.setState=(g,S)=>{f(g,S),h()};const y=e((...g)=>{n(...g),h()},a,r);let k;const p=()=>{var g;if(!l)return;i=!1,s.forEach(u=>u(a()));const S=((g=o.onRehydrateStorage)==null?void 0:g.call(o,a()))||void 0;return j(l.getItem.bind(l))(o.name).then(u=>{if(u)return o.deserialize(u)}).then(u=>{if(u)if(typeof u.version=="number"&&u.version!==o.version){if(o.migrate)return o.migrate(u.state,u.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return u.state}).then(u=>{var D;return k=o.merge(u,(D=a())!=null?D:y),n(k,!0),h()}).then(()=>{S==null||S(k,void 0),i=!0,d.forEach(u=>u(k))}).catch(u=>{S==null||S(void 0,u)})};return r.persist={setOptions:g=>{o={...o,...g},g.getStorage&&(l=g.getStorage())},clearStorage:()=>{l==null||l.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>p(),hasHydrated:()=>i,onHydrate:g=>(s.add(g),()=>{s.delete(g)}),onFinishHydration:g=>(d.add(g),()=>{d.delete(g)})},p(),k||y},Ln=(e,t)=>(n,a,r)=>{let o={storage:at(()=>localStorage),partialize:p=>p,version:0,merge:(p,g)=>({...g,...p}),...t},i=!1;const s=new Set,d=new Set;let l=o.storage;if(!l)return e((...p)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...p)},a,r);const c=()=>{const p=o.partialize({...a()});return l.setItem(o.name,{state:p,version:o.version})},h=r.setState;r.setState=(p,g)=>{h(p,g),c()};const f=e((...p)=>{n(...p),c()},a,r);let y;const k=()=>{var p,g;if(!l)return;i=!1,s.forEach(u=>{var D;return u((D=a())!=null?D:f)});const S=((g=o.onRehydrateStorage)==null?void 0:g.call(o,(p=a())!=null?p:f))||void 0;return j(l.getItem.bind(l))(o.name).then(u=>{if(u)if(typeof u.version=="number"&&u.version!==o.version){if(o.migrate)return o.migrate(u.state,u.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return u.state}).then(u=>{var D;return y=o.merge(u,(D=a())!=null?D:f),n(y,!0),c()}).then(()=>{S==null||S(y,void 0),y=a(),i=!0,d.forEach(u=>u(y))}).catch(u=>{S==null||S(void 0,u)})};return r.persist={setOptions:p=>{o={...o,...p},p.storage&&(l=p.storage)},clearStorage:()=>{l==null||l.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>k(),hasHydrated:()=>i,onHydrate:p=>(s.add(p),()=>{s.delete(p)}),onFinishHydration:p=>(d.add(p),()=>{d.delete(p)})},o.skipHydration||k(),y||f},qn=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?((Wn?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Rn(e,t)):Ln(e,t),Gn=qn,K=[1,5,11,20,40,80,120,160,200,240,280,320,360,400,440,480,520,560,600,640,680,720,760,800,840,880,920,960,1e3,1040,1080,1120,1160,1200,1240,1280,1320,1360,1400,1440,1480,1520,1560,1600,1640,1680,1720,1760,1800,1840,1880,1920,1960,2e3,2040,2080,2120,2160,2200,2240,2280,2320,2360,2400,2440,2480,2520,2560,2600,2640,2680,2720,2760,2800,2840,2880,2920,2960,3e3,3040,3080,3120,3160,3200,3240,3280,3320,3360,3400,3440,3480,3520,3560,3600,3640,3680,3720,3760,3800,3840],re=e=>{for(let t=0;t<K.length;t++)if(e<K[t])return t},fe={...Ze,...et,...tt};function rt(){return["common","common","uncommon","rare"].map(t=>nt(t))}const Qn={image:"5.jpg",name:"Viv",lvlXp:0,hp:10,maxHp:10,xp:0,gold:500,xpBonus:0,goldBonus:0,currentView:"quests",rewards1:[{id:1,name:"10 min of internet vegging."},{id:2,name:"15 min of internet vegging."},{id:3,name:"10 min Pet cuddle break."}],rewards2:[{id:4,name:"Pizza tonight!"},{id:5,name:"Watch an episode of your favorite show when you have free time."}],rewards3:[{id:5,name:"Pizza party!"},{id:6,name:"Get yourself something you've been meaning to get yourself."}],activeQuests:[{id:2,name:"Clean Dishes",difficulty:"1",importance:"1",reoccurs:!1,dueDateDays:"1",created:1704666895899},{id:3,name:"Feed Cat",difficulty:"4",importance:"4",reoccurs:!1,dueDateDays:"31",created:1704666895899},{id:4,name:"Get exercise",difficulty:"3",importance:"4",reoccurs:!0,dueDateDays:"1",created:1704666895899}],completedQuests:[],failedQuests:[],wontDoQuests:[],rightHand:{forefinger:{},middleFinger:{},ringFinger:{}},leftHand:{forefinger:{},middleFinger:{},ringFinger:{}},inventory:[{id:1,name:"The superior flock of lava",effects:["addOneToMaxHealth"],colors:["#5ef776","#cdbbad"],isThumb:!1,rarity:"common"},{id:2,name:"Croend the Mäjesty",effects:["addTwoToMaxHealth"],colors:["#75fa3e","#4f8aec"],isThumb:!1,rarity:"common"},{id:3,name:"Queld the Transposer",effects:["addThreeToMaxHealth"],colors:["#2b75c8","#500efa"],isThumb:!1,rarity:"uncommon"},{id:4,name:"The crier musket of lava",effects:["addThreeToExperienceWhenGained"],colors:["#396b2c","#6f02df"],isThumb:!1,rarity:"rare"}],ringsInShop:rt()},$=wt(Gn((e,t)=>({state:{...Qn},setCurrentView:n=>{const a=t().state;a.currentView=n,e({state:a})},setAvatar:n=>{const a=t().state;a.image=n,e({state:a})},setName:n=>{const a=t().state;a.name=n,e({state:a})},addActiveQuest:n=>{const a=t().state;a.activeQuests.push(n),e({state:a})},moveQuest:(n,a,r)=>{const o=t().state,i=o[n].findIndex(d=>d.id+""===r||d.id===r),s=o[n].splice(i,1);if(a==="completedQuests"){const d=parseInt(s[0].dueDateDays,10),l=parseInt(s[0].difficulty,10),c=parseInt(s[0].importance,10),h=d-ae(new Date(s[0].created),Date.now()),f=re(o.lvlXp),y=l+c*2+h;if(o.lvlXp+=Math.floor(y/10)+o.xpBonus,o.lvlXp>=K[K.length-2]&&alert("You have won task quest! You have reached max level and will not be able to level again without the game exploding. Please create a new character. Honestly, I had no idea somone would play this enough to reach this level. Congratulations!"),o.xp=o.xp+y,o.gold=o.gold+Math.ceil(y/2)+o.goldBonus,f<re(o.lvlXp)){window.confettiBomb(),new Audio("./lvl.mp3").play();const p=document.getElementById("dialog-level-up");m.registerDialog(p),p.showModal()}else new Audio("./xp.mp3").play()}a==="failedQuests"&&(o.hp-=1,o.hp<1&&alert("You have lost please reset your character")),(s[0].reoccurs&&a==="failedQuests"||a==="completedQuests")&&o.activeQuests.push({...s[0],created:Date.now(),id:Date.now()}),o[a].push(s[0]),e({state:o})},deleteQuest:(n,a)=>{const r=t().state,o=r[n].findIndex(i=>i.id+""===a||i.id===a);r[n].splice(o,1),e({state:r})},addReward:(n,a)=>{const r=t().state;r[a].push(n),e({state:r})},deleteReward:(n,a)=>{const r=t().state,o=r[n].findIndex(i=>i.id+""===a||i.id===a);r[n].splice(o,1),e({state:r})},purchaseItem:(n,a)=>{const r=t().state,o=r.ringsInShop.findIndex(d=>d.id+""===n||d.id===n),i=nt(r.ringsInShop[o].rarity),s=r.ringsInShop.splice(o,1,i);r.gold-=a,r.inventory.push(s[0]),e({state:r})},purchaseHealthPotion:()=>{const n=t().state;n.gold-=100,n.hp+10>n.maxHp?n.hp=n.maxHp:n.hp+=10,e({state:n})},equipItem:(n,a,r)=>{var d;const o=t().state,i=o.inventory.findIndex(l=>l.id+""===n||l.id===n),s=o.inventory.splice(i,1)[0];if((d=o[a][r])!=null&&d.name){const l={...o[a][r]};l.effects.forEach(c=>fe[c](o,!1)),o.inventory.push(l)}o[a][r]={...s},s.effects.forEach(l=>fe[l](o,!0)),e({state:o})},sellItem:(n,a)=>{const r=t().state;let o,i;Object.keys(r.leftHand).forEach(l=>{r.leftHand[l].id===n&&(o=l)}),Object.keys(r.rightHand).forEach(l=>{r.rightHand[l].id===n&&(i=l)});const s=o?"leftHand":"rightHand",d=o||i;r[s][d].effects.forEach(l=>fe[l](r,!1)),r.gold+=a,r[s][d]={},e({state:r})},resetGame:()=>{const n=t().state;n.image=void 0,n.name=void 0,n.lvlXp=0,n.hp=10,n.maxHp=10,n.xp=0,n.gold=500,n.xpBonus=0,n.goldBonus=0,n.currentView="quests",n.rewards1=[{id:1,name:"10 min of internet vegging."},{id:2,name:"15 min of internet vegging."},{id:3,name:"10 min Pet cuddle break."}],n.rewards2=[{id:4,name:"Pizza tonight!"},{id:5,name:"Watch an episode of your favorite show when you have free time."}],n.rewards3=[{id:5,name:"Pizza party!"},{id:6,name:"Get yourself something you've been meaning to get yourself."}],n.activeQuests=[],n.completedQuests=[],n.failedQuests=[],n.wontDoQuests=[],n.rightHand={forefinger:{},middleFinger:{},ringFinger:{}},n.leftHand={forefinger:{},middleFinger:{},ringFinger:{}},n.inventory=[],n.ringsInShop=rt(),e({state:n})}}),{name:"task-quest-storage",storage:at(()=>localStorage)})),{isArray:Te}=Array,{getPrototypeOf:Yn,getOwnPropertyDescriptor:Vn}=Object,zn="http://www.w3.org/2000/svg",H=[],ot=()=>document.createRange(),xe=(e,t,n)=>(e.set(t,n),n),jn=(e,t)=>{let n;do n=Vn(e,t);while(!n&&(e=Yn(e)));return n},Kn=(e,t,n)=>({c:e,e:t,l:n}),Un=()=>({n:null}),Xn=(e,t,n,a)=>({v:e,u:t,t:n,n:a}),ge=(e,t,n,a="")=>({t:e,p:t,u:n,n:a}),Se=e=>({s:e,t:null,n:null,d:H}),Jn=(e,t)=>({n:e,d:t}),Zn=2,ea=3,Me=8,ta=11;/*! (c) Andrea Giammarchi - ISC */const{setPrototypeOf:na}=Object,aa=e=>{function t(n){return na(n,new.target.prototype)}return t.prototype=e.prototype,t};let W;const ra=(e,t,n)=>(W||(W=ot()),n?W.setStartAfter(e):W.setStartBefore(e),W.setEndAfter(t),W.deleteContents(),e),Ee=({firstChild:e,lastChild:t},n)=>ra(e,t,n);let it=!1;const oa=(e,t)=>it&&e.nodeType===ta?1/t<0?t?Ee(e,!0):e.lastChild:t?e.valueOf():e.firstChild:e;var O,U;class ia extends aa(DocumentFragment){constructor(n){const a=[...n.childNodes];super(n);ce(this,O,void 0);ce(this,U,void 0);ue(this,O,a),ue(this,U,a.length),it=!0}get firstChild(){return B(this,O)[0]}get lastChild(){return B(this,O).at(-1)}get parentNode(){return B(this,O)[0].parentNode}remove(){Ee(this,!1)}replaceWith(n){Ee(this,!0).replaceWith(n)}valueOf(){return this.childNodes.length!==B(this,U)&&this.replaceChildren(...B(this,O)),this}}O=new WeakMap,U=new WeakMap;const sa=(e,t)=>t.reduceRight(la,e),la=(e,t)=>e.childNodes[t],st=e=>(t,n)=>{const{c:a,e:r,l:o}=e(t,n),i=a.cloneNode(!0);let s,d,l=r.length,c=l?r.slice(0):H;for(;l--;){const{t:h,p:f,u:y,n:k}=r[l],p=f===d?s:s=sa(i,d=f),g=h===Me?y():y;c[l]=Xn(g(p,n[l],k,H),g,p,k)}return Jn(o===1?i.firstChild||s:new ia(i),c)},da=/^(?:plaintext|script|style|textarea|title|xmp)$/i,ca=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;/*! (c) Andrea Giammarchi - ISC */const ua=/<([a-zA-Z0-9]+[a-zA-Z0-9:._-]*)([^>]*?)(\/?)>/g,ha=/([^\s\\>"'=]+)\s*=\s*(['"]?)\x01/g,ma=/[\x01\x02]/g,fa=(e,t,n)=>{let a=0;return e.join("").trim().replace(ua,(r,o,i,s)=>`<${o}${i.replace(ha,"=$2$1").trimEnd()}${s?n||ca.test(o)?" /":`></${o}`:""}>`).replace(ma,r=>r===""?`<!--${t+a++}-->`:t+a++)},ga=(e,t,n,a,r)=>{const o=n.length;let i=t.length,s=o,d=0,l=0,c=null;for(;d<i||l<s;)if(i===d){const h=s<o?l?a(n[l-1],-0).nextSibling:a(n[s-l],0):r;for(;l<s;)e.insertBefore(a(n[l++],1),h)}else if(s===l)for(;d<i;)(!c||!c.has(t[d]))&&e.removeChild(a(t[d],-1)),d++;else if(t[d]===n[l])d++,l++;else if(t[i-1]===n[s-1])i--,s--;else if(t[d]===n[s-1]&&n[l]===t[i-1]){const h=a(t[--i],-1).nextSibling;e.insertBefore(a(n[l++],1),a(t[d++],-1).nextSibling),e.insertBefore(a(n[--s],1),h),t[i]=n[s]}else{if(!c){c=new Map;let h=l;for(;h<s;)c.set(n[h],h++)}if(c.has(t[d])){const h=c.get(t[d]);if(l<h&&h<s){let f=d,y=1;for(;++f<i&&f<s&&c.get(t[f])===h+y;)y++;if(y>h-l){const k=a(t[d],0);for(;l<h;)e.insertBefore(a(n[l++],1),k)}else e.replaceChild(a(n[l++],1),a(t[d++],-1))}else d++}else e.removeChild(a(t[d++],-1))}return n},lt=(e,t,n)=>e.setAttribute(t,n),ie=(e,t)=>e.removeAttribute(t),pa=(e,t)=>{for(const n in t){const a=t[n],r=n==="role"?n:`aria-${n}`;a==null?ie(e,r):lt(e,r,a)}return t},ya=()=>Ea;let J;const ba=(e,t,n)=>{n=n.slice(1),J||(J=new WeakMap);const a=J.get(e)||xe(J,e,{});let r=a[n];return r&&r[0]&&e.removeEventListener(n,...r),r=Te(t)?t:[t,!1],a[n]=r,r[0]&&e.addEventListener(n,...r),t};function va(e,t){const n=this.n||(this.n=e);switch(typeof t){case"string":case"number":case"boolean":{n!==e&&n.replaceWith(this.n=e),this.n.data=t;break}case"object":case"undefined":{t==null?(this.n=e).data="":this.n=t.valueOf(),n.replaceWith(this.n);break}}return t}const Le=()=>va.bind(Un()),wa=(e,t)=>Ce(e,t,t==null?"class":"className"),ka=(e,t)=>{const{dataset:n}=e;for(const a in t)t[a]==null?delete n[a]:n[a]=t[a];return t},se=(e,t,n)=>e[n]=t,Da=(e,t,n)=>se(e,t,n.slice(1)),Ce=(e,t,n)=>t==null?(ie(e,n),t):se(e,t,n),dt=(e,t)=>(typeof t=="function"?t(e):t.current=e,t),pe=(e,t,n)=>(t==null?ie(e,n):lt(e,n,t),t),Sa=(e,t)=>t==null?Ce(e,t,"style"):se(e.style,t,"cssText"),Ma=(e,t,n)=>(e.toggleAttribute(n.slice(1),t),t),Ea=(e,t,n,a)=>ga(e.parentNode,a,t.length?t:H,oa,e),Ta=new Map([["aria",pa],["class",wa],["data",ka],["ref",dt],["style",Sa]]),xa=(e,t,n)=>{var a;switch(t[0]){case".":return Da;case"?":return Ma;case"@":return ba;default:return n||"ownerSVGElement"in e?t==="ref"?dt:pe:Ta.get(t)||(t in e?t.startsWith("on")?se:(a=jn(e,t))!=null&&a.set?Ce:pe:pe)}},Ca=(e,t)=>(e.textContent=t??"",t);let Z=document.createElement("template"),ye,be;const Aa=(e,t)=>{if(t)return ye||(ye=document.createElementNS(zn,"svg"),be=ot(),be.selectNodeContents(ye)),be.createContextualFragment(e);Z.innerHTML=e;const{content:n}=Z;return Z=Z.cloneNode(!1),n},ve=e=>{const t=[];let n;for(;n=e.parentNode;)t.push(t.indexOf.call(n.childNodes,e)),e=n;return t},Pa=(e,t,n)=>{const a=Aa(fa(e,Q,n),n),{length:r}=e;let o=!1,i=H;if(r>1){const d=document.createTreeWalker(a,129),l=[];let c=0,h=`${Q}${c++}`;for(i=[];c<r;){const f=d.nextNode();if(f.nodeType===Me){if(f.data===h){let y=Te(t[c-1])?ya:Le;y===Le?l.push(f):o=!0,i.push(ge(Me,ve(f),y)),h=`${Q}${c++}`}}else{let y;for(;f.hasAttribute(h);){y||(y=ve(f));const k=f.getAttribute(h);i.push(ge(Zn,y,xa(f,k,n),k)),ie(f,h),h=`${Q}${c++}`}da.test(f.localName)&&f.textContent.trim()===`<!--${h}-->`&&(i.push(ge(ea,y||ve(f),Ca)),h=`${Q}${c++}`)}}for(c=0;c<l.length;c++)l[c].replaceWith(document.createTextNode(""))}const s=a.childNodes.length;return xe(ct,e,Kn(a,i,s===1&&o?0:s))},ct=new WeakMap,Q="isµ",ut=e=>(t,n)=>ct.get(t)||Pa(t,n,e),Oa=st(ut(!1)),Ha=st(ut(!0)),ht=(e,{s:t,t:n,v:a})=>{a.length&&e.s===H&&(e.s=[]);const r=mt(e,a);if(e.t!==n){const{n:o,d:i}=(t?Ha:Oa)(n,a);e.t=n,e.n=o,e.d=i}else{const{d:o}=e;for(let i=0;i<r;i++){const s=a[i],d=o[i],{v:l}=d;if(s!==l){const{u:c,t:h,n:f}=d;d.v=c(h,s,f,l)}}}return e.n},mt=({s:e},t)=>{const{length:n}=t;for(let a=0;a<n;a++){const r=t[a];r instanceof ft?t[a]=ht(e[a]||(e[a]=Se(H)),r):Te(r)?mt(e[a]||(e[a]=Se([])),r):e[a]=null}return n<e.length&&e.splice(n),n};class ft{constructor(t,n,a){this.s=t,this.t=n,this.v=a}}const qe=new WeakMap,Na=(e,t)=>{const n=qe.get(e)||xe(qe,e,Se(H));return n.n!==ht(n,typeof t=="function"?t():t)&&e.replaceChildren(n.n),e};/*! (c) Andrea Giammarchi - MIT */const gt=e=>(t,...n)=>new ft(e,t,n),v=gt(!1),_a=gt(!0),{getState:pt}=$,we=pt().moveQuest,$a=pt().deleteQuest,ee=(e,t,n)=>v`
    <details class="quest-details" data-key=${e.id}>
        <summary>${e.name} 
            ${t==="activeQuests"||t==="wontDoQuests"?v`- ${e.dueDateDays-ae(new Date(e.created),Date.now())} days`:null}
        <br/> 
            ${t==="activeQuests"||t==="wontDoQuests"?v`
                    <span>
                        <button type="button" class="nes-btn is-success is-small" onclick=${()=>{const a=document.getElementById("dialog-complete-quest"+e.id);m.registerDialog(a),a.showModal()}}>
                            <span>&nbsp;<i class="nes-icon trophy is-small"></i>&nbsp;</span>
                        </button>
                        <dialog class="nes-dialog" id=${"dialog-complete-quest"+e.id}>
                            <form method="dialog">
                            <p class="title">Complete Quest?</p>
                            <p>Are you sure you would like to complete this quest? This action cannot be undone.</p>
                            <menu class="dialog-menu">
                                <button class="nes-btn">Nay</button>
                                <button class="nes-btn is-primary" onclick=${()=>we(t,"completedQuests",e.id)}>Complete</button>
                            </menu>
                            </form>
                        </dialog>
                        <button type="button" class="nes-btn is-error is-small" onclick=${()=>{const a=document.getElementById("dialog-fail-quest"+e.id);m.registerDialog(a),a.showModal()}}>
                            <span>&nbsp;<i class="nes-icon close is-small"></i>&nbsp;</span>
                        </button>
                        <dialog class="nes-dialog" id=${"dialog-fail-quest"+e.id}>
                        <form method="dialog">
                            <p class="title">Fail Quest?</p>
                            <p>Are you sure you would like to fail this quest? This action cannot be undone.</p>
                            <menu class="dialog-menu">
                                <button class="nes-btn">Nay</button>
                                <button class="nes-btn is-primary" onclick=${()=>we(t,"failedQuests",e.id)}>Fail</button>
                            </menu>
                            </form>
                        </dialog>
                        <button type="button" class="nes-btn is-small" onclick=${()=>we(t,"wontDoQuests",e.id)}>
                            <span>&nbsp;╍&nbsp;</span>
                        </button>
                    </span>
                `:null}  

            ${t==="wontDoQuests"?v`
            <button type="button" class="nes-btn is-small" onclick=${()=>{const a=document.getElementById("dialog-delete-quest"+e.id);m.registerDialog(a),a.showModal()}}>
                <span>Delete</span>
            </button>
            `:null}
            <dialog class="nes-dialog" id=${"dialog-delete-quest"+e.id}>
            <form method="dialog">
                <p class="title">Delete Quest?</p>
                <p>Are you sure you would like to delete this quest? This action cannot be undone.</p>
                <menu class="dialog-menu">
                    <button class="nes-btn">Nay</button>
                    <button class="nes-btn is-primary" onclick=${()=>$a("wontDoQuests",e.id)}>Delete</button>
                </menu>
                </form>
            </dialog>
        </summary>
            <div class="details-content">
                <div>Difficulty: ${e.difficulty}</div>
                <div>Importance: ${e.importance}</div>
                <div>Days left: ${e.dueDateDays-ae(new Date(e.created),Date.now())}</div>
                <div>Created at: ${e.created?En(new Date(e.created),"MMMM do yyyy"):null}</div>
                <div>Reoccurs: ${e.reoccurs}</div>
            </div>
        </div>
    </details>
`,{getState:yt}=$,x=yt().state,Ba=yt().addActiveQuest,Ia=(e,t)=>{const n=a=>{a.preventDefault();const r=document.querySelector("#quest-form"),o=new FormData(r);var i={};o.forEach((s,d)=>i[d]=s),Ba({id:x.activeQuests.length+x.completedQuests.length+x.failedQuests.length+x.wontDoQuests.length+1,name:i.name??"Untitled task",difficulty:i.difficulty??1,importance:i.importance??1,reoccurs:i.reoccurs===!0,dueDateDays:i.dueDateDays??1,created:Date.now()}),r.reset()};return v`
<div class="quests-wrapper">
    <details open=${x.activeQuests.length===0}>
    <summary><h3 style="display:inline-block">Create quest</h3></summary>
    <form id="quest-form">
        <div class="nes-field">
            <input type="text" required id="name_quest_field" name="name" class="nes-input" placeholder="quest name">
        </div>
        <div class="quest-selects">
            <div class="nes-select">
                <select id="select_difficulty" name="difficulty">
                    <option value="" disabled selected hidden>Difficulty</option>
                    <option value="1">low</option>
                    <option value="2">medium</option>
                    <option value="3">high</option>
                    <option value="4">Epic</option>
                </select>
            </div>
            <div class="nes-select">
                <select id="select_importance" name="importance">
                    <option value="" disabled selected hidden>Importance</option>
                    <option value="1">low</option>
                    <option value="2">medium</option>
                    <option value="3">high</option>
                    <option value="4">Epic</option>
                </select>
            </div>
        </div>
        <div class="quest-selects">
            <div class="nes-select">
                <select id="select_days_due" name="dueDateDays">
                    <option value="" disabled selected hidden>Days till due</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
            </div>
            <div class="nes-select">
                <label>
                    <input type="checkbox" class="nes-checkbox" name="reoccurs" />
                    <span>Reoccurs</span>
                </label>
            </div>
        </div>
        <div class="quest-submit-wrapper">
            <button type="submit" class="nes-btn is-primary quest-submit" onclick=${n}>Add Quest</button>
        </div>
    </form>
    </details>
    
    <div class="spacer"></div>
    <div>
        <div class="nes-container with-title is-dark quests active-quests">
            <p class="title">Active quests</p>
            <p>
                <!-- Sort by days until due -->
                ${x.activeQuests.map((a,r)=>ee(a,"activeQuests"))}
            </p>
        </div>
    </div>
    <div class="spacer"></div>
    <div>
        <div class="nes-container with-title is-dark">
            <p class="title">Completed quests</p>
            <p>
                <!-- Sort by days until due -->
                ${x.completedQuests.map((a,r)=>ee(a,"completedQuests"))}
            </p>
        </div>
    </div>
    <div class="spacer"></div>
    <div>
        <div class="nes-container with-title is-dark">
            <p class="title">Failed quests</p>
            <p>
                <!-- Sort by days until due -->
                ${x.failedQuests.map((a,r)=>ee(a,"failedQuests"))}
            </p>
        </div>
    </div>
    <div class="spacer"></div>
    <div>
        <div class="nes-container with-title is-dark">
            <p class="title">Wont do quests</p>
            <p>
                <!-- Sort by days until due -->
                ${x.wontDoQuests.map((a,r)=>ee(a,"wontDoQuests"))}
            </p>
        </div>
    </div>
</div>
`},{getState:Ae}=$,R=Ae().state,Fa=Ae().addReward,ke=Ae().deleteReward,Wa=(e,t)=>v`
<div class="quests-wrapper">
    <details>
    <summary><h3 style="display:inline-block">Create reward</h3></summary>
    <form id="reward-form">
        <div class="nes-field">
            <input type="text" required id="name_reward_field" name="name" class="nes-input" placeholder="reward name">
        </div>

        <div class="nes-select">
            <select id="select_level" name="level">
                <option value="" disabled selected hidden>Quality</option>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
            </select>
        </div>

        <div class="quest-submit-wrapper">
            <button type="submit" class="nes-btn is-primary quest-submit" onclick=${a=>{a.preventDefault();const r=document.querySelector("#reward-form"),o=new FormData(r);var i={};o.forEach((s,d)=>i[d]=s),Fa({id:R.rewards1.length+R.rewards2.length+R.rewards3.length+1,name:i.name??"Untitled reward"},i.level?"rewards"+i.level:"rewards1"),r.reset()}}>Add Quest</button>
        </div>
    </form>
    </details>
    <div class="spacer"></div>
    <div>
        <div class="nes-container with-title is-dark quests">
            <p class="title"><i class="nes-icon is-small star"></i></p>
            <div>
                ${R.rewards1.map(a=>v`<div class="reward">
                    <div class="name-reward">${a.name}</div>
                    <div class="remove-reward">
                    <button type="button" class="nes-btn is-error" onclick=${()=>{const r=document.getElementById("dialog-delete-reward1");m.registerDialog(r),r.showModal()}} >
                        <span>&nbsp;<i class="nes-icon close is-small"></i>&nbsp;</span>
                    </button>
                    <dialog class="nes-dialog" id="dialog-delete-reward1">
                    <form method="dialog">
                        <p class="title">Delete level 1 reward?</p>
                        <p>Are you sure you would like to delete this reward? This action cannot be undone.</p>
                        <menu class="dialog-menu">
                            <button class="nes-btn">Nay</button>
                            <button class="nes-btn is-primary" onclick=${()=>ke("rewards1",a.id)}>Delete</button>
                        </menu>
                        </form>
                    </dialog>
                    </div>

                <div>`)}
            </div>
        </div>

    </div>
    <div class="spacer"></div>
    <div>
        <div class="nes-container with-title is-dark">
            <p class="title"><i class="nes-icon is-small star"></i><i class="nes-icon is-small star"></i></p>
            <div>
                ${R.rewards2.map(a=>v`<div class="reward">
                    <div class="name-reward">${a.name}</div>
                    <div class="remove-reward">
                        <button type="button" class="nes-btn is-error" onclick=${()=>{const r=document.getElementById("dialog-delete-reward2");m.registerDialog(r),r.showModal()}} >
                            <span>&nbsp;<i class="nes-icon close is-small"></i>&nbsp;</span>
                        </button>
                        <dialog class="nes-dialog" id="dialog-delete-reward2">
                        <form method="dialog">
                            <p class="title">Delete level 2 reward?</p>
                            <p>Are you sure you would like to delete this reward? This action cannot be undone.</p>
                            <menu class="dialog-menu">
                                <button class="nes-btn">Nay</button>
                                <button class="nes-btn is-primary" onclick=${()=>ke("rewards2",a.id)}>Delete</button>
                            </menu>
                            </form>
                        </dialog>
                    </div>

                <div>`)}
            </div>
        </div>

    </div>
    <div class="spacer"></div>
    <div>
        <div class="nes-container with-title is-dark">
            <p class="title"><i class="nes-icon is-small star"></i><i class="nes-icon is-small star"></i><i class="nes-icon is-small star"></i></p>
            <div>
                ${R.rewards3.map(a=>v`<div class="reward">
                    <div class="name-reward">${a.name}</div>
                    <div class="remove-reward">
                        <button type="button" class="nes-btn is-error" onclick=${()=>{const r=document.getElementById("dialog-delete-reward3");m.registerDialog(r),r.showModal()}} >
                            <span>&nbsp;<i class="nes-icon close is-small"></i>&nbsp;</span>
                        </button>
                        <dialog class="nes-dialog" id="dialog-delete-reward3">
                        <form method="dialog">
                            <p class="title">Delete level 3 reward?</p>
                            <p>Are you sure you would like to delete this reward? This action cannot be undone.</p>
                            <menu class="dialog-menu">
                                <button class="nes-btn">Nay</button>
                                <button class="nes-btn is-primary" onclick=${()=>ke("rewards3",a.id)}>Delete</button>
                            </menu>
                            </form>
                        </dialog>
                    </div>

                <div>`)}
            </div>
        </div>

    </div>
</div>
`,{getState:le}=$,w=le().state,Ge=le().equipItem,Ra=le().sellItem,La=le().resetGame;let M;const qa=()=>{const e=re(w.lvlXp),t=n=>n==="common"?50:n==="uncommon"?150:500;return v`
<div>
  <div class="nes-container is-dark">
  <div class="character-stats-wrapper">
    <img src=${"./characters/"+w.image} />
    <div>
      <h3>${w.name}</h3>
      <div>HP: ${w.hp} <progress class="nes-progress is-error hp-progress" value=${w.hp} max=${w.maxHp}></progress></div>
      <div>XP: ${w.lvlXp} <progress class="nes-progress is-warning hp-progress" value=${w.lvlXp} max=${K[e]}></progress></div>
      <div>Gold: ${w.gold}</div>
    </div>
  </div>
  </div>
  <div class="nes-container is-dark with-title">
    <p class="title">Left Hand</p>
    <div>
      ${Object.keys(w.leftHand).map(n=>{var a,r;return v`
          <div class="nes-container is-dark with-title">
            <p class="title">${Y(n)}</p>
            <div class="nes-select">
                <select id=${"rings-leftHand-"+n} class=${w.leftHand[n].name===void 0?"hidden":""} name=${"rings-leftHand-"+n} onchange=${o=>Ge(o.target.value,"leftHand",n)}>
                    <option value="" disabled selected=${w.leftHand[n].name===void 0} hidden>Rings to equip</option>
                    ${w.inventory.map(o=>v`<option value=${o.id} selected=${o.id===w.leftHand[n].id}>${o.name}</option>`)}
                </select>
            </div>
            ${((a=w.leftHand[n])==null?void 0:a.name)!==void 0?v`
            <div>${(r=w.leftHand[n])==null?void 0:r.name}</div>
            ${w.leftHand[n].effects.map(o=>v`${Y(o)}`)} 
            <div><button type="button" class="nes-btn is-error" onclick=${()=>{M=w.leftHand[n];const o=document.getElementById("dialog-sell");m.registerDialog(o),o.showModal()}}>Sell</button>`:"No ring equipped"}</div>
          </div>
          `})}
    </div>
  </div>
  <div class="nes-container is-dark with-title">
    <p class="title">Right Hand</p>
    <div>
      ${Object.keys(w.rightHand).map(n=>{var a,r;return v`
          <div class="nes-container is-dark with-title">
            <p class="title">${Y(n)}</p>
            <div class="nes-select">
                <select id=${"rings-rightHand-"+n}  class=${w.rightHand[n].name===void 0?"hidden":""} name=${"rings-rightHand-"+n} onchange=${o=>Ge(o.target.value,"rightHand",n)}>
                    <option value="" disabled selected hidden>Rings to equip</option>
                    ${w.inventory.map(o=>v`<option value="1">${o.name}</option>`)}
                </select>
            </div>
            ${((a=w.rightHand[n])==null?void 0:a.name)!==void 0?v`
            <div>${(r=w.rightHand[n])==null?void 0:r.name}</div>
            ${w.rightHand[n].effects.map(o=>v`${Y(o)}`)} <div><button type="button" class="nes-btn is-error">Sell</button>`:"No ring equipped"}</div>
          </div>
          `})}
    </div>
  </div>
  <dialog class="nes-dialog" id="dialog-sell">
    <form method="dialog">
        <p class="title">Sell ring?</p>
        <p>Are you sure you would like to sell this ring for ${t(M==null?void 0:M.rarity)} gold? This action cannot be undone.</p>
        <menu class="dialog-menu">
            <button class="nes-btn is-primary">Nay</button>
            <button class="nes-btn is-primary" onclick=${()=>Ra(M==null?void 0:M.id,t(M==null?void 0:M.rarity))}>Sell</button>
        </menu>
    </form>
</dialog>
  <div>
  <button type="button" class="nes-btn is-error" style="margin-top: 16px; float: right" onclick=${()=>{const n=document.getElementById("dialog-delete-data");m.registerDialog(n),n.showModal()}}>Delete Data</button>
  <dialog class="nes-dialog" id="dialog-delete-data">
  <form method="dialog">
      <p class="title">Sell ring?</p>
      <p>Are you sure you would like to delete this character and start over? This action cannot be undone.</p>
      <menu class="dialog-menu">
          <button class="nes-btn is-primary">Nay</button>
          <button class="nes-btn is-primary" onclick=${La}>Delete Character</button>
      </menu>
  </form>
</dialog>
</div>

`},Ga=(e,t,n)=>_a`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 100%">
    <defs>
      <linearGradient data-key=${n} id=${"ringGradient"+n} gradientTransform="rotate(90)">
        <stop offset="5%" stop-color=${e[0]} />
        <stop offset="95%" stop-color=${t?e[1]:e[0]} />
      </linearGradient>
    </defs>
    <g>
      <path d="M255.157 123c-68.66 0-137.1 18.922-182.867 55.275.234 14.35 1.818 35.624 9.332 48.23 110.634-60.336 236.436-60.336 347.07 0 7.513-12.606 9.098-33.88 9.332-48.23C392.257 141.922 323.817 123 255.157 123zm199.81 76.057c-.324 2.98-.718 6.02-1.246 9.082-2.226 12.93-6.213 26.458-15.99 35.98-14.436 18.637-40.806 30.462-72.858 38.603C332.392 290.973 293.79 295 255.157 295c-38.632 0-77.235-4.028-109.715-12.277-31.907-8.104-58.17-19.868-72.648-38.36-11.983-11.982-16.234-28.786-17.77-43.857-13.73 27.256-11.503 62.122.672 98.648C69.988 342.03 129.406 389 255.156 389c125.75 0 185.17-46.97 199.462-89.846l.1-.297.12-.287c15.134-36.712 15.61-71.983.13-99.513z" fill=${`url('#${"ringGradient"+n}')`} fill-opacity="1"></path>
    </g>
  </svg>
`,{getState:Pe}=$,De=Pe().state,Qa=Pe().purchaseItem,Ya=Pe().purchaseHealthPotion;let E;const Va=()=>{const e=t=>t==="common"?200:t==="uncommon"?500:1500;return v`
    <div class="shop-wrapper">
        <div class="nes-container is-dark is-rounded mechant-wrapper">
            <img src="./merchants/merchant3.jpg" />
            <div>
            <div class="nes-balloon from-left is-dark">
                <p>My wares are top notch! Rings can be equipped for bonuses in the character menu.</p>
            </div>
            </div>
        </div>
        <div class="nes-container is-dark with-title">
            <p class="title">Health Potion</p>
            <div class="ring-content-wrapper"><div class="ring-image-wrapper">
                <img src="./remedy.svg">
            </div> 
                <div>Add 10 to health lost after failed quests.</div>
            </div>
            <div class="ring-buy-button">
                <div>100 gold</div> <button type="button" onclick=${()=>{if(De.gold>=100){const t=document.getElementById("dialog-purchase-potion");m.registerDialog(t),t.showModal()}else{const t=document.getElementById("dialog-no-money");m.registerDialog(t),t.showModal()}}} class="nes-btn is-success">Buy</button>
            </div>
        </div>
        ${De.ringsInShop.map((t,n)=>v`
            <div class="nes-container is-dark with-title" data-id=${t.id}>
                <p class="title">${t.name}</p>
                <div class="ring-content-wrapper"><div class="ring-image-wrapper">${Ga(t.colors,t.rarity==="rare"||t.rarity==="uncommon",n)}</div> <div>${t.rarity} - ${t.effects.map(a=>v`${Y(a)}`)}</div>
                </div>
                <div class="ring-buy-button" onclick=${()=>{if(De.gold<=e(t.rarity)){const a=document.getElementById("dialog-no-money");m.registerDialog(a),a.showModal()}else{E=t;const a=document.getElementById("dialog-purchase");m.registerDialog(a),a.showModal()}}}>
                   <div>${e(t.rarity)} gold</div> <button type="button" class="nes-btn is-success">Buy</button>
                </div>

            </div>
            `)}
        <dialog class="nes-dialog" id="dialog-purchase">
            <form method="dialog">
                <p class="title">Purchase ring?</p>
                <p>Are you sure you would like to purchase this ring for ${e(E==null?void 0:E.rarity)} gold? This action cannot be undone.</p>
                <menu class="dialog-menu">
                    <button class="nes-btn is-primary">Nay</button>
                    <button class="nes-btn is-primary" onclick=${()=>Qa(E==null?void 0:E.id,e(E==null?void 0:E.rarity))}>Purchase</button>
                </menu>
            </form>
        </dialog>
        <dialog class="nes-dialog" id="dialog-no-money">
            <form method="dialog">
                <p class="title">Not enough gold</p>
                <p>You do not have enough gold to purchase this item. Complete more tasks!</p>
                <menu class="dialog-menu">
                    <button class="nes-btn is-primary">Got it</button>
                </menu>
            </form>
        </dialog>

        <dialog class="nes-dialog" id="dialog-purchase-potion">
            <form method="dialog">
                <p class="title">Purchase health potion?</p>
                <p>Are you sure you would like to purchase a health potion for 100 gold? This action cannot be undone.</p>
                <menu class="dialog-menu">
                    <button class="nes-btn is-primary">Nay</button>
                    <button class="nes-btn is-primary" onclick=${()=>Ya()}>Purchase</button>
                </menu>
            </form>
        </dialog>


    </div>

`},za=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg"],{getState:de}=$,P=de().state,te=de().setCurrentView,ja=de().setAvatar,Ka=de().setName,Ua=()=>{const e=document.getElementById("dialog-start-game");return P.name===void 0&&e.getAttribute("open")===null&&(m.registerDialog(e),e.showModal()),v`
    <div class="game-wrapper">
        <header>
            <button type="button" class="nes-btn is-primary" onclick=${()=>te("character")}>
                <span class="button-text">Character</span>
                <img class="button-icon" src="./icons/3d-meeple.svg">
            </button>
            <button type="button" class="nes-btn is-error" onclick=${()=>te("quests")}>
                <span class="button-text">Quests</span>
                <img class="button-icon" src="./icons/check-mark.svg">
            </button>
            <button type="button" class="nes-btn is-warning" onclick=${()=>te("rewards")}>
                <span class="button-text">Rewards</span>
                <img class="button-icon" src="./icons/holy-grail.svg">
            </button>
            <button type="button" class="nes-btn is-success" onclick=${()=>te("shop")}>
                <span class="button-text">Store</span>
                <img class="button-icon" src="./icons/two-coins.svg">
            </button>
        </header>
        <div class="stats-wrapper">
            <div class="stats">
                <span><i class="nes-icon is-small star"></i> LVL:${re(P.lvlXp)}</span>
                <span><i class="nes-icon heart is-small"></i> HP:${P.hp}</span>
                <span><i class="nes-icon trophy is-small"></i></i> XP:${P.lvlXp}</span>
                <span><i class="nes-icon coin is-small"></i> COIN:${P.gold}</span>
            </div>
        </div>
        <main>
            ${{character:v`${qa()}`,quests:v`${Ia()}`,rewards:v`${Wa()}`,shop:v`${Va()}`}[P.currentView??"character"]}
        </main>
        <dialog class="nes-dialog" id="dialog-level-up">
            <form method="dialog">
            <p class="title">You leveled up!</p>
            <p>Your are now level ${P.lvl}. Congratulations!</p>
            <menu class="dialog-menu">
                <button class="nes-btn is-primary">Yay</button>
            </menu>
            </form>
        </dialog>

        <dialog class="nes-dialog" id="dialog-start-game">
            <form method="dialog">
            <p class="title">You leveled up!</p>
            <div>Choose a name and an avatar:</div>
            <div class="nes-field">
                <input type="text" required id="name_character_field" name="character-name" class="nes-input" placeholder="quest name">
            </div>
            <div>
                ${za.map(t=>v`
                            <img src=${"./characters/"+t} onclick=${()=>ja(t)} class=${t===P.image?"avatars selected":"avatars"} />
                        `)}
            </div>
            <menu class="dialog-menu">
                <button class="nes-btn is-primary" onclick=${()=>{const t=document.querySelector("#name_character_field");Ka(t.value)}} >Begin Quest!</button>
            </menu>
            </form>
        </dialog>
    </div>
`},Xa=document.querySelector("#app"),{subscribe:Ja,getState:Za}=$;Za().state;window.addEventListener("load",bt);Ja(bt);async function bt(){Na(Xa,v`${Ua()}`)}
