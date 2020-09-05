(this["webpackJsonpweather-api"]=this["webpackJsonpweather-api"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),i=a(1),s=a.n(i),l=a(4),m=a(5),h=a(6),u=a(8),d=a(7);a(15),a(16),a(17);var p=function(e){return r.a.createElement("div",{className:"container text-light"},r.a.createElement("div",{className:"cards pt-4"},r.a.createElement("h1",null,e.location),r.a.createElement("h4",{className:""},e.desc),r.a.createElement("h5",{className:"py-4"},r.a.createElement("i",{className:"wi ".concat(e.icon," display-1")})),e.temp?r.a.createElement("h1",{className:"py-2"},e.temp,"\xb0"):null,(t=e.tempMin,a=e.tempMax,t&&a?r.a.createElement("h3",null,r.a.createElement("span",{className:"px-4"},t,"\xb0"),r.a.createElement("span",{className:"px-4"},a,"\xb0")):null),e.wind?r.a.createElement("h4",{className:"py-2"},"wind: ",e.wind):null));var t,a};a(18);var f=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,e.error?r.a.createElement("div",{className:"alert alert-danger mx-5",role:"alert"},"Please Enter City and Country."):null),r.a.createElement("form",{onSubmit:e.loadWeather},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 offset-md-2"},r.a.createElement("input",{list:"cityNames",type:"text",className:"form-control",placeholder:"City...",name:"city",autoComplete:"off"}),r.a.createElement("datalist",{id:"cityNames"}," ",r.a.createElement("option",{value:"home"}))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Country(US)...",name:"country",autoComplete:"off"})),r.a.createElement("div",{className:"col-md-3 mt-2 mt-md-0"},r.a.createElement("button",{className:"btn btn-outline-light"},"Get Weather")))))};var w=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"pt-4 text-light"},"Your Weather"))},v=(a(19),a(20),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).getWeather=function(){var t=Object(l.a)(s.a.mark((function t(a){var n,r,c,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=a.target.elements.city.value,r=a.target.elements.country.value,!n||!r){t.next=15;break}return t.next=6,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(r,"&appid=").concat("87ef27d93fbc8f922380ae25b08fa55b"));case 6:return c=t.sent,t.next=9,c.json();case 9:o=t.sent,console.log(o),e.setState({location:"".concat(o.name,", ").concat(o.sys.country),temp:e.calcFahrenheit(o.main.temp),tempMax:e.calcFahrenheit(o.main.temp_max),tempMin:e.calcFahrenheit(o.main.temp_min),wind:o.wind.speed,desc:o.weather[0].description,error:!1}),e.getWeatherIcon(e.weatherIcon,o.weather[0].id),t.next=16;break;case 15:e.setState({error:!0});case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={icon:void 0,main:void 0,temp:void 0,tempMax:void 0,tempMin:void 0,wind:void 0,desc:"",error:!1},e.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e}return Object(h.a)(a,[{key:"getWeatherIcon",value:function(e,t){switch(!0){case t>=200&&t<232:this.setState({icon:e.Thunderstorm});break;case t>=300&&t<=321:this.setState({icon:e.Drizzle});break;case t>=500&&t<=521:this.setState({icon:e.Rain});break;case t>=600&&t<=622:this.setState({icon:e.Snow});break;case t>=701&&t<=781:this.setState({icon:e.Atmosphere});break;case 800===t:this.setState({icon:e.Clear});break;case t>=801&&t<=804:this.setState({icon:e.Clouds});break;default:this.setState({icon:e.Clouds})}}},{key:"calcFahrenheit",value:function(e){return Math.floor(1.8*(e-273.15)+32)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(f,{loadWeather:this.getWeather,error:this.state.error}),r.a.createElement(p,{location:this.state.location,temp:this.state.temp,tempMax:this.state.tempMax,tempMin:this.state.tempMin,wind:this.state.wind,desc:this.state.desc,icon:this.state.icon}))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.4a3d10ae.chunk.js.map