(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),o=(a(14),a(1)),s=(a(16),a(2)),i=a.n(s);function m(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},e.text))))))}function u(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return e.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type))," : ",e.alert.msg)}function d(e){var t=Object(n.useState)("enter your thought"),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("div",{className:"mb-3 "},l.a.createElement("h1",null,e.heading),l.a.createElement("textarea",{className:"form-control",value:r,style:{background:"light"===e.mode?"white":"#364f5c",color:"light"===e.mode?"black":"white"},onChange:function(e){c(e.target.value)},id:"myBox",rows:"8"})),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){if(0!==r.length){var t=r.toUpperCase();c(t),e.showAlert("converted to uppercase","success")}}},"Convert To Uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){if(0!==r.length){var t=r.toLowerCase();c(t),e.showAlert("converted to lowercase","success")}}},"Convert To Lowercase"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){c("")}},"Clear Text"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){if(0!==r.length){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("copied to clipboard","success")}}},"Copy Text"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){if(0!==r.length){var t=r.replace(/\s+/g," ");c(t),e.showAlert("remove extra spaces","success")}}},"Remove Extra Spaces")),l.a.createElement("div",{className:"container my-3 "},l.a.createElement("h2",null,"your text summary"),l.a.createElement("p",null,r.split(" ").length," words and characters ",r.length),l.a.createElement("p",null,.008*r.split(" ").length," minutes to read"),l.a.createElement("h2",null,"preview"),l.a.createElement("p",null,0===r.length?"Enter something to preview":r)))}m.prototype={title:i.a.stringisRequired,about:i.a.stringisRequired},m.defaultProps={title:"util",aboutText:"about"};var b=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("Enable dark mode"),s=Object(o.a)(c,2),i=s[0],b=s[1],g=Object(n.useState)(null),h=Object(o.a)(g,2),p=h[0],v=h[1],E=function(e,t){v({msg:e,type:t}),setTimeout(function(){v(null)},2e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{title:"Textutil",aboutText:"about",mode:a,text:i,toggleMode:function(){"light"===a?(r("dark"),b("Enable light mode"),document.body.style.backgroundColor="#364f5c",document.body.style.color="white",E("Dark mode has been enabled","success"),document.title="textutils dark mode"):(r("light"),b("Enable dark mode"),document.body.style.backgroundColor="white",document.body.style.color="black",E("light mode has been enabled","success"),document.title="textutils light mode")}}),l.a.createElement(u,{alert:p}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(d,{heading:"Enter the text below",mode:a,showAlert:E})))},g=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,21)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null))),g()},5:function(e,t,a){e.exports=a(20)}},[[5,3,2]]]);
//# sourceMappingURL=main.db6edaa2.chunk.js.map