(this.webpackJsonpprojekt01=this.webpackJsonpprojekt01||[]).push([[0],{13:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),c=a.n(r),u=a(2),m=(a(13),function(e){var t=e.setTown,a=Object(n.useState)(),r=Object(u.a)(a,2),c=r[0],m=r[1];return l.a.createElement("div",{className:"Search"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},l.a.createElement("label",null,l.a.createElement("input",{type:"text",placeholder:"Miasto",onChange:function(e){m(e.target.value)}})),l.a.createElement("button",{type:"submit",onClick:function(){t(c)}},"Search")))}),i=function(){return l.a.createElement("div",{id:"cube--background"},l.a.createElement("div",{id:"cube"},l.a.createElement("div",{className:"wall cube--front"},"M",l.a.createElement("sup",null,"H")),l.a.createElement("div",{className:"wall cube--back"},"M",l.a.createElement("sup",null,"H")),l.a.createElement("div",{className:"wall cube--top"}," ","M",l.a.createElement("sup",null,"H")),l.a.createElement("div",{className:"wall cube--bottom"},"M",l.a.createElement("sup",null,"H")),l.a.createElement("div",{className:"wall cube--left"},"M",l.a.createElement("sup",null,"H")),l.a.createElement("div",{className:"wall cube--right"},"M",l.a.createElement("sup",null,"H"))))},s=function(e){var t=e.weather;return l.a.createElement("div",{className:"Weather"},l.a.createElement("figure",null," ",l.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(t.icon,"@2x.png"),alt:"blad"})),l.a.createElement("p",null,l.a.createElement("span",null,"Miasto: "),t.name),l.a.createElement("asp",null,l.a.createElement("span",null,"Temperatura: "),t.temperature," \u2103"),l.a.createElement("p",null,l.a.createElement("span",null,"Temperatura odczuwalna: "),t.feels_temp," \u2103"),l.a.createElement("p",null,l.a.createElement("span",null,"Ci\u015bnienie: "),t.pressure,"hPa"),l.a.createElement("p",null,l.a.createElement("span",null,"Wilgotno\u015b\u0107: "),t.humidity,"%"))},o=a(7),p=function(){var e=Object(n.useState)({temperature:"",icon:"",name:"",feels_temp:"",pressure:"",humidity:""}),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("Warszawa"),p=Object(u.a)(c,2),E=p[0],f=p[1],d="http://api.openweathermap.org/data/2.5/weather?q=".concat(E,"&units=metric&appid=92aec1912fb9a605ef4f50a1975508a0");return Object(n.useEffect)((function(){fetch(d).then((function(e){return e.json()})).then((function(e){r({temperature:e.main.temp,icon:e.weather[0].icon,name:e.name,feels_temp:e.main.feels_like,pressure:e.main.pressure,humidity:e.main.humidity})})).catch((function(e){return console.error(e)}))}),[E]),l.a.createElement("div",{className:"container"},l.a.createElement(i,null),l.a.createElement(o.a,{to:"/"},"Home"),l.a.createElement(m,{setTown:f}),l.a.createElement(s,{weather:a}))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(20)}},[[8,1,2]]]);
//# sourceMappingURL=main.d6bb09d3.chunk.js.map