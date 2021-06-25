(this.webpackJsonpfinal_form=this.webpackJsonpfinal_form||[]).push([[0],{249:function(e,t,n){},250:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(8),a=n.n(c),s=n(12),i=n(283),j=n(13),o=n(17),l=n(58),u=n(286),b=n(2),d=function(e){var t=e.name,n=Object(l.a)(e,["name"]),r=Object(o.c)(t),c=Object(s.a)(r,2),a=c[0],i=c[1],d=Object(j.a)(Object(j.a)(Object(j.a)({},a),n),{},{fullWidth:!0,variant:"standard"});return i&&i.touched&&i.error&&(d.error=!0,d.helperText=i.error),Object(b.jsx)(u.a,Object(j.a)({},d))},h=n(287),m=function(e){var t=e.name,n=e.options,r=Object(l.a)(e,["name","options"]),c=Object(o.c)(t),a=Object(s.a)(c,2),i=a[0],d=a[1],m=Object(o.d)().setFieldValue,O=Object(j.a)(Object(j.a)(Object(j.a)({},i),r),{},{select:!0,variant:"standard",fullWidth:!0,onChange:function(e){var n=e.target.value;m(t,n)}});return d&&d.touched&&d.error&&(O.error=!0,O.helperText=d.error),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(u.a,Object(j.a)(Object(j.a)({},O),{},{children:Object.keys(n).map((function(e,t){return Object(b.jsx)(h.a,{value:e,children:n[e]},t)}))}))})},O=n(282),x=function(e){var t=e.FormField,n=e.title,r=e.button;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(o.a,{children:Object(b.jsxs)(O.a,{direction:"column",style:{margin:"auto"},container:!0,spacing:1,children:[Object(b.jsx)(O.a,{item:!0,children:Object(b.jsx)("h3",{style:{color:"#3399FF",letterSpacing:1},children:n})}),t.map((function(e){return Object(b.jsx)(O.a,{style:{color:"#3399FF"},xs:10,item:!0,children:e.options?Object(b.jsx)(m,{name:e.name,label:e.label,options:e.options}):Object(b.jsx)(d,{name:e.name,label:e.label})},e.name)})),Object(b.jsx)(O.a,{item:!0,children:Object(b.jsx)(i.a,{style:{color:"#3399FF",borderColor:"#3399FF"},type:"submit",variant:"outlined",children:r})})]})})})},p=n(43),g=p.c(),f=p.b().shape({agent:g.required("Agent is required"),request_id:g.required("Request Number is required")}),v=p.b().shape({customer_name:g.required("This Field is required"),mobile_number:g.required("This Field is required").length(10,"Mobile Number Should be exactly 10 digits"),amount:p.a().required("This Field is required").min(100,"Amount must be greater than or equal to NRS 100"),remarks:g.required("This Field is required"),purpose:g.required("This Field is required")}),_=[{name:"agent",label:"Select Agent",options:{"EMI 1":"EMI 1","EMI 2":"EMI 2","EMI 3":"EMI 3"}},{name:"request_id",label:"Request Number"}],F=[{name:"customer_name",label:"Customer Name"},{name:"mobile_number",label:"Mobile Number"},{name:"amount",label:"Amount"},{name:"purpose",label:"Purpose",options:{"car loan":"car loan","bike loan":"bike loan","house loan":"house loan"}},{name:"remarks",label:"Remarks"}],q=n(284),y=n(285),k=function(){var e=Object(r.useContext)(T),t=e.data,n=e.handleNext;return Object(b.jsx)("div",{children:Object(b.jsx)(O.a,{justify:"center",container:!0,children:Object(b.jsx)(O.a,{item:!0,children:Object(b.jsx)(q.a,{children:Object(b.jsx)(y.a,{children:Object(b.jsx)(o.b,{initialValues:Object(j.a)({},t),validationSchema:f,onSubmit:function(e){console.log(e),n(e,"get")},children:Object(b.jsx)(x,{title:"Enter Details To Proceed",FormField:_,button:"Next"})})})})})})})},C=function(e){var t=e.message,n=Object(r.useContext)(T).handlePrev;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(O.a,{container:!0,children:Object(b.jsxs)(O.a,{xs:12,item:!0,children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)(i.a,{onClick:n,variant:"outlined",children:"Back"})]})})})},S=function(e){var t=e.render;return Object(b.jsx)("span",{style:{color:"#009966",marginLeft:"4px"},children:t})},N=function(){var e=Object(r.useContext)(T),t=e.res,n=e.data;return 0===Object.keys(t).length?Object(b.jsx)("h4",{children:"Loading"}):Object(b.jsxs)(b.Fragment,{children:[console.log(n),Object(b.jsx)(O.a,{justify:"center",container:!0,children:Object(b.jsx)(q.a,{children:Object(b.jsx)(y.a,{children:0===t.response_code?Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:["Request Number :",Object(b.jsx)(S,{render:t.request_id})]}),Object(b.jsxs)("h3",{children:["Status :",Object(b.jsx)(S,{render:t.response_message})]}),Object(b.jsxs)("h3",{children:["Customer Name :",Object(b.jsx)(S,{render:n.customer_name})]}),Object(b.jsxs)("h3",{children:["Total Amount (Charge Inc.) :",Object(b.jsx)(S,{render:t.amount})]})]}):Object(b.jsx)(C,{message:t.Response})})})})]})},A=function(){var e=Object(r.useContext)(T),t=e.get,n=e.data,c=e.handleNext;return 0===Object.keys(t).length?Object(b.jsx)("h4",{children:"Loading"}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(q.a,{children:Object(b.jsx)(y.a,{children:0===t.response_code?Object(b.jsxs)(O.a,{spacing:4,alignItems:"center",container:!0,children:[Object(b.jsxs)(O.a,{xs:12,sm:8,item:!0,children:[Object(b.jsxs)("h3",{children:["Amount Due :",Object(b.jsx)(S,{render:t.amount})]}),Object(b.jsxs)("h3",{children:["Customer Name :",Object(b.jsx)(S,{render:t.properties.customer_name})]}),Object(b.jsx)(q.a,{children:Object(b.jsxs)(y.a,{children:[Object(b.jsx)("h3",{children:" Savings "}),Object(b.jsx)(O.a,{spacing:2,direction:"row",container:!0,children:t.properties.savings.map((function(e){return Object(b.jsx)(O.a,{style:{letterSpacing:1},xs:12,sm:4,item:!0,children:Object(b.jsxs)(q.a,{children:[Object(b.jsx)("div",{style:{backgroundColor:"#009966",height:"20px"}}),Object(b.jsxs)(y.a,{children:[Object(b.jsxs)("h5",{children:["Account Number : ",e.account_no]}),Object(b.jsxs)("h5",{children:["Account Type : ",e.account_type]}),Object(b.jsxs)("h5",{children:["Accrued Amount :",Object(b.jsx)(S,{render:e.accrued_amount})]}),Object(b.jsxs)("h5",{children:["Balance: ",e.balance]})]})]})},e.account_no)}))})]})})]}),Object(b.jsx)(O.a,{xs:12,sm:4,item:!0,children:Object(b.jsxs)(q.a,{children:[Object(b.jsx)("div",{style:{backgroundColor:"#3399FF",height:"20px"}}),Object(b.jsx)(y.a,{children:Object(b.jsx)(o.b,{initialValues:n,validationSchema:v,onSubmit:function(e){e.branch_name=t.properties.branch_name,c(e,"post")},children:Object(b.jsx)(x,{title:"Fill this form to pay",FormField:F,button:"Pay"})})})]})})]}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(C,{message:t.Response})})})})})},I=n(115),M=n.n(I).a.create({baseURL:"https://emi.sajilopay.com.np/api/uranus",headers:{Authorization:"token f30c9ae9edfe4f6228d0f2989ce4ca1e1bfe751d"}}),R=function(){var e=Object(r.useState)(0),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)({}),i=Object(s.a)(a,2),o=i[0],l=i[1],u=Object(r.useState)({}),b=Object(s.a)(u,2),d=b[0],h=b[1],m=Object(r.useState)({agent:"",branch_name:"",request_id:"",customer_name:"",mobile_number:"",amount:0,remarks:"",purpose:""}),O=Object(s.a)(m,2),x=O[0],p=O[1];return{handleNext:function(e,t){"post"===t&&function(e){var t={agent:e.agent,branch_name:e.branch_name,request_id:e.request_id,amount:e.amount,customer_number:e.mobile_number,customer_name:e.customer_name,remarks:e.remarks,purpose:e.purpose,all:e};M.post("/payment/",t).then((function(e){return l(e.data)})).catch((function(e){return e.message}))}(e),"get"===t&&function(e){var t={request_id:e.request_id};M.post("/get_detail/",t).then((function(e){h(e.data)})).catch((function(e){return e.message}))}(e),c((function(e){return e+1})),p((function(t){return Object(j.a)(Object(j.a)({},t),e)}))},handlePrev:function(){0===n&&h({}),l({}),c((function(e){return e-1}))},step:n,res:o,data:x,get:d}},T=Object(r.createContext)(),E=function(){var e=R(),t=e.handleNext,n=e.handlePrev,r=e.get,c=e.data,a=e.step,s=e.res,i=[Object(b.jsx)(k,{}),Object(b.jsx)(A,{}),Object(b.jsx)(N,{})];return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(T.Provider,{value:{handleNext:t,data:c,get:r,res:s,handlePrev:n},children:i[a]})})},P=function(){var e=Object(r.useState)(0),t=Object(s.a)(e,2),n=t[0],c=t[1];switch(n){case 1:return Object(b.jsx)(i.a,{onClick:function(){return c(1)},variant:"outlined",children:"Uranus"});case 2:return Object(b.jsx)("h1",{children:"Under Maintainance"});default:return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(E,{})})}},w=function(){return Object(b.jsx)("div",{children:"Remittance Coming soon..."})},L=function(){var e=Object(r.useState)(0),t=Object(s.a)(e,2),n=t[0],c=t[1];switch(n){case 1:return Object(b.jsx)(w,{});case 2:return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(i.a,{variant:"outlined",onClick:function(){return c(1)},children:"Remittance"}),Object(b.jsx)(i.a,{style:{marginLeft:"20px"},variant:"outlined",onClick:function(){return c(2)},children:"EMI"})]});default:return Object(b.jsx)(P,{})}};n(249);a.a.render(Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(L,{})}),document.getElementById("root"))}},[[250,1,2]]]);
//# sourceMappingURL=main.e9c0406a.chunk.js.map