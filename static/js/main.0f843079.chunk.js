(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__14qwf",modal:"ErrorModal_modal__TNmTV",header:"ErrorModal_header__19wht",content:"ErrorModal_content__1O4Xj",actions:"ErrorModal_actions__14rwm"}},,,,,function(e,t,n){e.exports={button:"Button_button__Rs8rW"}},function(e,t,n){e.exports={card:"Card_card__1sEDa"}},function(e,t,n){e.exports={input:"AddUser_input__D5ow9"}},function(e,t,n){e.exports={users:"UsersList_users__3WHAY"}},,,,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),s=(n(21),n(12)),o=n(2),i=n(8),l=n.n(i),d=n(0),u=function(e){return Object(d.jsx)("button",{type:e.type||"button",className:l.a.button,onClick:e.onClick,children:e.children})},j=n(9),b=n.n(j),m=function(e){return Object(d.jsx)("div",{className:"".concat(b.a.card," ").concat(e.className),children:e.children})},h=n(3),O=n.n(h),v=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],r=n[1],s=function(){r(!1),e.onUserNameInvalid(!1),e.onAgeInvalid(!1)},i=function(){c||r(!0)},l=Object(d.jsx)("p",{children:"Please enter a valid name and age (non-empty values)."});if(e.userNameInvalid?i():e.ageInvalid&&(l=Object(d.jsxs)("p",{children:["Please enter a valid age (",">","0)"]}),i()),c)return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:O.a.backdrop,onClick:s}),Object(d.jsxs)(m,{className:O.a.modal,children:[Object(d.jsx)("header",{className:O.a.header,children:Object(d.jsx)("h2",{children:"Invalid input"})}),Object(d.jsx)("div",{className:O.a.content,children:l}),Object(d.jsx)("footer",{className:O.a.actions,children:Object(d.jsx)(u,{type:"button",onClick:s,children:"Okay"})})]})]})},x=n(10),p=n.n(x),g=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),i=Object(o.a)(s,2),l=i[0],j=i[1];return Object(d.jsx)(m,{className:p.a.input,children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==c.trim().length?0===l.trim().length||+l<1?e.onAgeInvalid(!0):(e.onAddUser({name:c,age:l}),r(""),j("")):e.onUserNameInvalid(!0)},children:[Object(d.jsx)("label",{htmlFor:"name",children:"Username"}),Object(d.jsx)("input",{id:"name",type:"text",value:c,onChange:function(t){t.target.value.trim().length>0&&e.onUserNameInvalid(!1),r(t.target.value)}}),Object(d.jsx)("label",{htmlFor:"age",children:"Age (Years)"}),Object(d.jsx)("input",{id:"age",type:"number",value:l,onChange:function(t){t.target.value.trim().length>0&&e.onAgeInvalid(!1),j(t.target.value)}}),Object(d.jsx)(u,{type:"submit",children:"Add User"})]})})},f=n(11),_=n.n(f),N=function(e){var t=Object(d.jsx)("h2",{children:"No users found."});return e.usersList.length>0&&(t=Object(d.jsx)("ul",{children:e.usersList.map((function(e){return Object(d.jsxs)("li",{children:[e.name," (",e.age," years old)"]},Math.random())}))})),Object(d.jsx)(m,{className:_.a.users,children:t})};var I=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),i=Object(o.a)(r,2),l=i[0],u=i[1],j=Object(a.useState)(!1),b=Object(o.a)(j,2),m=b[0],h=b[1],O=function(e){u(e)},x=function(e){h(e)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{onAddUser:function(e){c((function(t){return[e].concat(Object(s.a)(t))}))},onUserNameInvalid:O,onAgeInvalid:x}),Object(d.jsx)(N,{usersList:n}),Object(d.jsx)(v,{userNameInvalid:l,ageInvalid:m,onUserNameInvalid:O,onAgeInvalid:x})]})};r.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(I,{}))}],[[23,1,2]]]);
//# sourceMappingURL=main.0f843079.chunk.js.map