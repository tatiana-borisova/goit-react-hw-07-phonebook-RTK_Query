(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{14:function(e,t,n){e.exports={filter:"Filter_filter__1E5tH",label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},17:function(e,t,n){e.exports={title:"Section_title__2S6oE",section:"Section_section__Ap5Zy"}},18:function(e,t,n){e.exports={contacts:"ContactList_contacts__1Ny0J",contact:"ContactList_contact__3ZIyH"}},39:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(11),s=n.n(o),i=n(3),l=n(21),b=n(13),u=n(4),j=n(22),d=n.n(j),m=n(5),O=n(23),h=n.n(O),p=n(7),f=n(2),_={onSubmitHandler:Object(u.b)("contacts/submit"),deleteContact:Object(u.b)("contacts/delete"),onChangeFilter:Object(u.b)("contacts/changeFilter")},x=Object(u.c)([],(a={},Object(p.a)(a,_.onSubmitHandler,(function(e,t){var n=t.payload;return[].concat(Object(b.a)(e),[n])})),Object(p.a)(a,_.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),C=Object(u.c)("",Object(p.a)({},_.onChangeFilter,(function(e,t){return t.payload}))),v=Object(f.b)({items:x,filter:C}),N=[].concat(Object(b.a)(Object(u.d)({serializableCheck:{ignoredActions:[m.a,m.f,m.b,m.c,m.d,m.e]}})),[d.a]),g={key:"contacts",storage:h.a,blacklist:["filter"]},y=Object(u.a)({reducer:{contacts:Object(m.g)(g,v)},middleware:N,devTools:!1}),F={store:y,persistor:Object(m.h)(y)},w=(n(38),n(39),n(17)),S=n.n(w),k=n(1);function A(e){var t=e.title,n=e.children;return Object(k.jsxs)("section",{className:S.a.section,children:[t&&Object(k.jsx)("h2",{className:S.a.title,children:t}),n]})}A.defaultProps={title:""};var L=n(19),E=n(24),Z=n.n(E),T=function(e){return e.contacts.filter},z=function(e){return e.contacts.items},H=function(e){var t=z(e),n=T(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)||e.number.includes(n)}))},D=n(6),J=n.n(D),M=function(){var e=Object(c.useState)(""),t=Object(L.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(L.a)(r,2),s=o[0],l=o[1],b=Object(i.b)(),u=Object(i.c)(z),j=function(e){var t=e.currentTarget,n=t.name,c=t.value;"name"===n&&a(c),"number"===n&&l(c)};return Object(k.jsxs)("form",{className:J.a.form,onSubmit:function(e){e.preventDefault();var t=u.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})),c=u.find((function(e){return e.number.toLowerCase()===s.toLowerCase()}));t||c?alert("".concat(t?n:""," ").concat(c?s:""," is already in contacts")):b(_.onSubmitHandler({id:Z.a.generate(),name:n,number:s})),a(""),l("")},children:[Object(k.jsxs)("label",{className:J.a.label,children:["Name",Object(k.jsx)("input",{className:J.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"The name can only consist of letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc.",required:!0,placeholder:"Enter name",value:n,onChange:j})]}),Object(k.jsxs)("label",{className:J.a.label,children:["Number",Object(k.jsx)("input",{className:J.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter number",value:s,onChange:j})]}),Object(k.jsx)("button",{type:"submit",className:J.a.button,children:"Add contact"})]})},P=n(14),q=n.n(P),B=function(){var e=Object(i.c)(T),t=Object(i.b)();return Object(k.jsx)("p",{className:q.a.filter,children:Object(k.jsxs)("label",{className:q.a.label,children:["Find contacts",Object(k.jsx)("input",{className:q.a.input,type:"text",placeholder:"Enter name or number",value:e,onChange:function(e){return t(_.onChangeFilter(e.currentTarget.value))}})]})})},I=n(9),K=n.n(I),U=function(e){var t=e.data,n=t.name,a=t.number,c=t.id,r=Object(i.b)();return Object(k.jsxs)("div",{className:K.a.contact,children:[Object(k.jsxs)("span",{className:K.a.name,children:[n,":"]}),Object(k.jsx)("a",{className:K.a.number,href:"tel:".concat(a),children:a}),Object(k.jsx)("button",{className:K.a.button,type:"button",onClick:function(){return r(_.deleteContact(c))},children:"Delete"})]})},V=n(18),$=n.n(V),G=function(){var e=Object(i.c)(H);return Object(k.jsx)("div",{className:$.a.contacts,children:Object(k.jsx)("ul",{children:e.map((function(e){return Object(k.jsx)("li",{className:$.a.contact,children:Object(k.jsx)(U,{data:e})},e.id)}))})})},Q=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(A,{title:"Phonebook",children:Object(k.jsx)(M,{})}),Object(k.jsxs)(A,{title:"Contacts",children:[Object(k.jsx)(B,{}),Object(k.jsx)(G,{})]})]})};s.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(i.a,{store:F.store,children:Object(k.jsx)(l.a,{loading:null,persistor:F.persistor,children:Object(k.jsx)(Q,{})})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={form:"Form_form__2TM1N",label:"Form_label__15SAE",input:"Form_input__2ESfd",button:"Form_button__243jh"}},9:function(e,t,n){e.exports={contact:"Contact_contact__1m2re",name:"Contact_name__2ZcKm",number:"Contact_number__2MvnN",button:"Contact_button__1wUL0"}}},[[49,1,2]]]);
//# sourceMappingURL=main.11d475c7.chunk.js.map