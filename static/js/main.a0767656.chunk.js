(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{20:function(t,e,n){t.exports={form:"Form_form__9FNzK",button:"Form_button__Oxu_1"}},23:function(t,e,n){t.exports={button:"Contacts_button__18szi",item:"Contacts_item__2McL0"}},33:function(t,e,n){t.exports={Container:"Container_Container__1h1Ru"}},73:function(t,e,n){},75:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(13),o=n.n(a),u=(n(39),n(33)),i=n.n(u),s=n(1),b=function(t){var e=t.children;return Object(s.jsx)("div",{className:i.a.Container,children:e})},j=n(24),l=n(20),f=n.n(l),d=n(21),O=n.n(d),h=n(5),p=n(7),m=n.n(p),x=n(16),v=n(11),C=n.n(v),g=n(2),y=Object(g.b)("contacts/fetchContactRequest"),_=Object(g.b)("contacts/fetchContactSuccess"),k=Object(g.b)("contacts/fetchContactError"),w=Object(g.b)("contacts/addContactRequest"),F=Object(g.b)("contacts/addContactSuccess"),N=Object(g.b)("contacts/addContactError"),S=Object(g.b)("contacts/deleteContactRequest"),z=Object(g.b)("contacts/deleteContactSuccess"),A=Object(g.b)("contacts/deleteContactError"),q=Object(g.b)("contacts/changeFilter");C.a.defaults.baseURL="http://localhost:4040";var E=function(t){var e=t.name,n=t.number;return function(){var t=Object(x.a)(m.a.mark((function t(c){var r,a,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={name:e,number:n},c(w()),t.prev=2,t.next=5,C.a.post("/contacts",r);case 5:a=t.sent,o=a.data,c(F(o)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),c(N(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},L=function(t){return function(){var e=Object(x.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(S()),C.a.delete("/contacts/".concat(t)).then((function(){return n(z(t))})).catch((function(t){return n(A(t))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function(){return function(){var t=Object(x.a)(m.a.mark((function t(e){var n,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(y()),t.prev=1,t.next=4,C.a.get("/contacts");case 4:n=t.sent,c=n.data,e(_(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(k(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},D=n(9),J=function(t){return t.contacts.items},M=function(t){return t.contacts.filter},Z={getContacts:J,getFilter:M,getLoading:function(t){return t.contacts.loading},getVisibleContacts:Object(D.a)([J,M],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))};var B=Object(h.b)(null,(function(t){return{onSubmit:function(e,n){return t(E(e,n))}}}))((function(){var t=Object(c.useState)(""),e=Object(j.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(""),o=Object(j.a)(a,2),u=o[0],i=o[1],b=Object(h.d)(Z.getContacts),l=Object(h.c)(),d=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":r(c);break;case"number":i(c);break;default:return}},p=function(){r(""),i("")},m=O.a.generate(),x=O.a.generate();return Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),b.some((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):(l(E({name:n,number:u})),p())},className:f.a.form,children:[Object(s.jsxs)("label",{htmlFor:m,children:[Object(s.jsx)("p",{children:"Name"}),Object(s.jsx)("input",{value:n,onChange:d,id:m,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(s.jsxs)("label",{htmlFor:x,children:[Object(s.jsx)("p",{children:"Number"}),Object(s.jsx)("input",{value:u,onChange:d,id:x,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(s.jsx)("button",{type:"submit",className:f.a.button,children:"Add contact"})]})})),V=n(23),I=n.n(V),K=Object(h.b)((function(t){return{contacts:Z.getVisibleContacts(t)}}),(function(t){return{onDeleteContacts:function(e){return t(L(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContacts;return Object(s.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(s.jsxs)("li",{className:I.a.item,children:[Object(s.jsx)("p",{children:c}),Object(s.jsx)("span",{children:r}),Object(s.jsx)("button",{type:"button",onClick:function(){return n(e)},className:I.a.button,children:"Delete"})]},e)}))})})),P=Object(h.b)((function(t){return{value:Z.getFilter(t)}}),(function(t){return{onChange:function(e){return t(q(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(s.jsxs)("label",{children:[Object(s.jsx)("p",{children:"Find contacts by name"}),Object(s.jsx)("input",{type:"text",value:e,onChange:n})]})}));var T,U,$,G=Object(h.b)(null,(function(t){return{fetchContacts:function(){return t(R())}}}))((function(){var t=Object(h.c)();return Object(c.useEffect)((function(){return t(R())}),[t]),Object(s.jsxs)(b,{children:[Object(s.jsx)("h1",{children:"Phonebook"}),Object(s.jsx)(B,{}),Object(s.jsx)("h2",{children:"Contacts"}),Object(s.jsx)(P,{}),Object(s.jsx)(K,{})]})})),H=(n(73),n(15)),Q=n(34),W=n.n(Q),X=n(4),Y=n(3),tt=Object(g.c)([],(T={},Object(X.a)(T,_,(function(t,e){return e.payload})),Object(X.a)(T,F,(function(t,e){var n=e.payload;return[].concat(Object(H.a)(t),[n])})),Object(X.a)(T,z,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),T)),et=Object(g.c)("",Object(X.a)({},q,(function(t,e){return e.payload}))),nt=Object(g.c)(!1,(U={},Object(X.a)(U,y,(function(){return!0})),Object(X.a)(U,_,(function(){return!1})),Object(X.a)(U,k,(function(){return!1})),Object(X.a)(U,w,(function(){return!0})),Object(X.a)(U,F,(function(){return!1})),Object(X.a)(U,N,(function(){return!1})),Object(X.a)(U,S,(function(){return!0})),Object(X.a)(U,z,(function(){return!1})),Object(X.a)(U,A,(function(){return!1})),U)),ct=Object(g.c)(null,($={},Object(X.a)($,k,(function(t,e){return e.payload})),Object(X.a)($,y,(function(){return null})),$)),rt=Object(Y.b)({items:tt,filter:et,loading:nt,error:ct}),at=n(8),ot=[].concat(Object(H.a)(Object(g.d)({serializableCheck:{ignoredActions:[at.a,at.f,at.b,at.c,at.d,at.e]}})),[W.a]),ut=Object(g.a)({reducer:{contacts:rt},middleware:ot,devTools:!1});o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(h.a,{store:ut,children:Object(s.jsx)(G,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.a0767656.chunk.js.map