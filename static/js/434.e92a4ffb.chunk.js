"use strict";(self.webpackChunkgoit_react_hw_07_phonebook=self.webpackChunkgoit_react_hw_07_phonebook||[]).push([[434],{90:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,a,o,i,c,s,d,u,l=t(168),p=t(686),x=p.Z.div(r||(r=(0,l.Z)(["\n  max-width: 500px;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  background-color: #7cadd2;\n  margin: auto;\n  margin-top: 100px;\n  border-radius: 20px;\n"]))),h=t(439),f=t(434),m=p.Z.form(a||(a=(0,l.Z)(["\n  padding: 15px;\n  border: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n"]))),b=p.Z.label(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 10px;\n  width: 200px;\n"]))),g=p.Z.input(i||(i=(0,l.Z)(["\n  height: 25px;\n  border: 1px solid #080903;\n  border-radius: 6px;\n"]))),j=p.Z.button(c||(c=(0,l.Z)(["\n  width: 150px;\n  font-size: small;\n  padding: 5px 10px;\n  border-radius: 10px;\n  background-color: #48a567;\n  cursor: pointer;\n"]))),v=function(n){return n.phones.items},y=function(n){return n.filter.value},k=function(n){return n.phones.isLoading},C=function(n){return n.phones.error},Z=t(791),w=t(962),N=t(184),_=function(){var n=(0,Z.useState)(""),e=(0,h.Z)(n,2),t=e[0],r=e[1],a=(0,Z.useState)(""),o=(0,h.Z)(a,2),i=o[0],c=o[1],s=(0,f.I0)(),d=(0,f.v9)(v),u=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":c(a);break;default:return}};return(0,N.jsxs)(m,{autoComplete:"off",onSubmit:function(n){n.preventDefault();var e=d.some((function(n){return n.name.toLowerCase()===t.toLowerCase()})),a=d.find((function(n){return n.number===i}));if(e)return alert('Contact "'.concat(t,'" is already in contacts list'));if(a)return alert('Number "'.concat(i,'" is already in contacts list'));var o={name:t,phone:i};s((0,w.uK)(o)),r(""),c("")},children:[(0,N.jsxs)(b,{children:["Name",(0,N.jsx)(g,{type:"text",name:"name",value:t,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter name",required:!0,onChange:u})]}),(0,N.jsxs)(b,{children:["Number",(0,N.jsx)(g,{type:"tel",name:"number",value:i,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Enter number",required:!0,onChange:u})]}),(0,N.jsx)(j,{type:"submit",disabled:!t||!i,children:"Add Contact"})]})},L=p.Z.ul(s||(s=(0,l.Z)(["\n  display: flex;\n  gap: 15px;\n  align-items: center;\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 2px;\n  padding-left: 5px;\n  width: 450px;\n  justify-content: space-between;\n  background-color: beige;\n"]))),S=p.Z.button(d||(d=(0,l.Z)(["\n  width: 100px;\n  font-size: small;\n  padding: 5px 10px;\n  border-radius: 5px;\n  background-color: #e78972;\n  cursor: pointer;\n"]))),F=function(n){var e=n.contactName,t=n.contactNumber,r=n.onClick;return(0,N.jsxs)(L,{children:[e,": ",t,(0,N.jsx)(S,{type:"button",onClick:r,children:"Delete"})]})},I=p.Z.ul(u||(u=(0,l.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 10px;\n"]))),z=function(){var n=(0,f.I0)(),e=(0,f.v9)(v),t=(0,f.v9)(y),r=e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}));return(0,N.jsx)(I,{children:r.map((function(e){var t=e.id,r=e.name,a=e.phone;return(0,N.jsx)(F,{id:t,contactName:r,contactNumber:a,onClick:function(){return n((0,w.GK)(t))}},t)}))})},A=t(367),E=function(){var n=(0,f.I0)();return(0,N.jsxs)(b,{children:[(0,N.jsx)("h3",{children:"Find contacts name"}),(0,N.jsx)(g,{type:"text",name:"filter",onChange:function(e){return n((0,A.l)(e.target.value))}})]})};function q(){var n=(0,f.I0)(),e=(0,f.v9)(v),t=(0,f.v9)(k),r=(0,f.v9)(C);return(0,Z.useEffect)((function(){n((0,w.yF)())}),[n]),(0,N.jsxs)(x,{children:[(0,N.jsx)("h1",{children:"Phonebook"}),(0,N.jsx)(_,{}),(0,N.jsx)("h2",{children:"Contacts"}),(0,N.jsx)(E,{}),t&&(0,N.jsx)(N.Fragment,{children:(0,N.jsx)("h1",{children:"Loading..."})}),r&&(0,N.jsxs)("p",{children:["Sorry. ",r]}),!t&&!r&&e.length<1&&(0,N.jsx)("p",{children:"Sorry, there is no contacts yet"}),(0,N.jsx)(z,{})]})}}}]);
//# sourceMappingURL=434.e92a4ffb.chunk.js.map