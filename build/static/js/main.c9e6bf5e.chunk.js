(this["webpackJsonpguide-me"]=this["webpackJsonpguide-me"]||[]).push([[0],{119:function(e,t,a){e.exports=a.p+"static/media/thread.b8a8779b.jpg"},120:function(e,t,a){e.exports=a.p+"static/media/mentorpair.588b1a3d.png"},126:function(e,t,a){e.exports=a(291)},265:function(e,t,a){},284:function(e,t,a){},286:function(e,t,a){},287:function(e,t,a){},288:function(e,t,a){},290:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(47),i=a.n(l),c=a(15),o=a(21),u=a(10),s="".concat("https://dev-859860.okta.com","/oauth2/default"),m=window.location.origin,E={issuer:s,clientId:"0oab1o98844Wr6Oxt4x6",redirectUri:"".concat(m).concat("/implicit/callback"),scope:["openid","profile","email"],callbackPath:"/implicit/callback"},d=(a(265),a(7)),p={REGISTER_REQUEST:"USERS_REGISTER_REQUEST",REGISTER_SUCCESS:"USERS_REGISTER_SUCCESS",REGISTER_FAILURE:"USERS_REGISTER_FAILURE",LOGIN_REQUEST:"USERS_LOGIN_REQUEST",LOGIN_SUCCESS:"USERS_LOGIN_SUCCESS",LOGIN_FAILURE:"USERS_LOGIN_FAILURE",LOGOUT:"USERS_LOGOUT",GETALL_REQUEST:"USERS_GETALL_REQUEST",GETALL_SUCCESS:"USERS_GETALL_SUCCESS",GETALL_FAILURE:"USERS_GETALL_FAILURE",DELETE_REQUEST:"USERS_DELETE_REQUEST",DELETE_SUCCESS:"USERS_DELETE_SUCCESS",DELETE_FAILURE:"USERS_DELETE_FAILURE"},b=a(118),S=a.n(b),g=function(){return S.a.create({baseURL:"https://wyzerapp.herokuapp.com",headers:{Authorization:localStorage.getItem("accessToken")}})},f=function(){var e=Object(d.c)((function(e){return e.authReducer.user})),t=Object(u.useOktaAuth)(),a=t.authState,l=t.authService,i=Object(d.b)();return Object(n.useEffect)((function(){var e,t;i((e=a,t=l,function(a){var n=e.accessToken;localStorage.setItem("accessToken",n),t.getUser().then((function(e){g().post("users/email",{email:e.email}).then((function(t){t.data.length>0?(console.log(t.data[0]),a({type:p.LOGIN_SUCCESS,payload:t.data[0]})):g().post("users/",{email:e.email,given_name:e.given_name,family_name:e.family_name}).then((function(t){g().post("users/email",{email:e.email}).then((function(e){console.log(t.data[0]),a({type:p.LOGIN_SUCCESS,payload:e.data[0]})})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log("error in user post",e)}))})).catch((function(e){console.log("error in user by email",e)}))}))}))}),[]),r.a.createElement("div",null,0===e.id?r.a.createElement("p",null,"loading user info"):r.a.createElement("p",null))},h=(a(284),function(){var e=Object(u.useOktaAuth)().authService;return r.a.createElement("button",{onClick:function(){return e.login("/dashboard")}},"Login / Register")}),v=a(3),_=a.n(v),R=a(17),L=function(){var e=Object(u.useOktaAuth)().authService,t=function(){var t=Object(R.a)(_.a.mark((function t(){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.logout("/");case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("button",{className:"logout",onClick:t},"Log Out")},O=function(){var e=Object(u.useOktaAuth)().authState;return r.a.createElement("header",null,r.a.createElement("h1",null,"Wyzer"),e.isAuthenticated?r.a.createElement(L,null):r.a.createElement(h,null))},U=a(119),y=a.n(U),j=a(120),N=a.n(j),T=(a(286),function(){return r.a.createElement("section",{className:"home"},r.a.createElement("div",{className:"hometop"},r.a.createElement("h3",null,"Welcome to Wyzer Mentoring")),r.a.createElement("div",{className:"midhome"},r.a.createElement("h3",null,"What is Mentoring?"),r.a.createElement("img",{className:"thread",src:y.a,alt:""})),r.a.createElement("div",null,r.a.createElement("div",{className:"box"},r.a.createElement("p",null,"Sed dolor ex, sodales ornare sem id, tempus faucibus sapien. Aenean dapibus justo metus, at rutrum purus dignissim in. Donec neque dolor, laoreet eget diam id, ultricies blandit lectus. Etiam et facilisis massa. Ut sem dolor, accumsan non ipsum et, vestibulum viverra quam. Etiam euismod dolor vitae sagittis elementum. Nulla dapibus bibendum odio, sit amet faucibus ante mattis imperdiet."),r.a.createElement("p",null,"Sed dolor ex, sodales ornare sem id, tempus faucibus sapien. Aenean dapibus justo metus, at rutrum purus dignissim in. Donec neque dolor, laoreet eget diam id, ultricies blandit lectus. Etiam et facilisis massa. Ut sem dolor, accumsan non ipsum et, vestibulum viverra quam. Etiam euismod dolor vitae sagittis elementum. Nulla dapibus bibendum odio, sit amet faucibus ante mattis imperdiet."),r.a.createElement("p",null,"Sed dolor ex, sodales ornare sem id, tempus faucibus sapien. Aenean dapibus justo metus, at rutrum purus dignissim in. Donec neque dolor, laoreet eget diam id, ultricies blandit lectus. Etiam et facilisis massa. Ut sem dolor, accumsan non ipsum et, vestibulum viverra quam. Etiam euismod dolor vitae sagittis elementum. Nulla dapibus bibendum odio, sit amet faucibus ante mattis imperdiet."))),r.a.createElement("h3",{className:"midhome"},"Why Wyzer?"),r.a.createElement("div",{className:"box"},r.a.createElement("p",null,"Sed dolor ex, sodales ornare sem id, tempus faucibus sapien. Aenean dapibus justo metus, at rutrum purus dignissim in. Donec neque dolor, laoreet eget diam id, ultricies blandit lectus. Etiam et facilisis massa. Ut sem dolor, accumsan non ipsum et, vestibulum viverra quam. Etiam euismod dolor vitae sagittis elementum. Nulla dapibus bibendum odio, sit amet faucibus ante mattis imperdiet."),r.a.createElement("img",{className:"mentor",src:N.a,alt:""}),r.a.createElement("p",null,"Sed dolor ex, sodales ornare sem id, tempus faucibus sapien. Aenean dapibus justo metus, at rutrum purus dignissim in. Donec neque dolor, laoreet eget diam id, ultricies blandit lectus. Etiam et facilisis massa. Ut sem dolor, accumsan non ipsum et, vestibulum viverra quam. Etiam euismod dolor vitae sagittis elementum. Nulla dapibus bibendum odio, sit amet faucibus ante mattis imperdiet.")),r.a.createElement("h3",{className:"midhome"},"Give Us A Try!"))}),C=(a(287),a(288),function(){var e=Object(d.c)((function(e){return e.authReducer.user.isMentor})),t=Object(o.n)().url;return r.a.createElement("div",{className:"navContainer",id:e?"mentor":"notMentor"},r.a.createElement("nav",{className:"userNav"},r.a.createElement(c.Link,{to:"".concat(t,"/calendar")},"Calender"),r.a.createElement("a",{href:""},"Find a Mentor"),r.a.createElement("a",{href:""},"Notes"),r.a.createElement(c.Link,{to:"".concat(t,"/profile"),replace:!0},"Profile")),e?r.a.createElement("nav",{className:"mentorNav"},r.a.createElement("a",{href:""},"Mentor Profile"),r.a.createElement("a",{href:""},"Resources"),r.a.createElement("a",{href:""},"View Mentees")):r.a.createElement(c.Link,{className:"becomeMentor",to:"/mentor-registration"},"Become a Mentor"))}),I=a(5),A=a(124),G=a(121),k=a.n(G);function D(e){var t=Object(n.useState)(!1),a=Object(I.a)(t,2),l=(a[0],a[1],Object(d.c)((function(e){return e.authReducer.user})));return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("p",null,"Welcome back, ",l.given_name," ",l.family_name,"!"),r.a.createElement("div",null,r.a.createElement("p",null,"Location: ",l.location))))}var x=function(){var e=Object(n.useState)(new Date),t=Object(I.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)([]),c=Object(I.a)(i,2),o=c[0],u=(c[1],Object(d.c)((function(e){return e.authReducer.user})));return r.a.createElement("div",null,r.a.createElement(D,{user:u}),r.a.createElement(A.a,{onChange:function(e){l(e)},value:a}),a.toString(),r.a.createElement("div",null,"Your Rating:"," ",r.a.createElement(k.a,{name:"userRating",starCount:5})),o.forEach((function(e){return e})))},F=a(50),M=a(49),q=a.n(M);function w(){var e=Object(F.a)(),t=e.register,a=e.handleSubmit,l=(e.errors,Object(n.useState)(1)),i=Object(I.a)(l,2),c=i[0],o=i[1];return r.a.createElement("div",{className:"mentorRegistration"},r.a.createElement("form",{className:"mentorRegisterForm",onSubmit:a((function(e){return console.log(e)}))},r.a.createElement("label",null,"First Name:",r.a.createElement("input",{type:"text",placeholder:"First name",name:"First name",ref:t({required:!0,maxLength:80})})),r.a.createElement("label",null,"Last Name:",r.a.createElement("input",{type:"text",placeholder:"Last name",name:"Last name",ref:t({required:!0,maxLength:100})})),r.a.createElement("label",null,"Username:",r.a.createElement("input",{type:"text",placeholder:"Username",name:"Username",ref:t({required:!0,pattern:/^\S+@\S+$/i})})),r.a.createElement("label",null,"Location:",r.a.createElement("input",{type:"text",placeholder:"Location",name:"Location",ref:t})),r.a.createElement("label",null,"Bio:",r.a.createElement("textarea",{name:"Bio",ref:t})),c>0&&r.a.createElement("label",null,"Main Interest:",r.a.createElement("input",{name:"category_1",ref:t({required:!0})})),c>1&&r.a.createElement("label",null,"Secondary Interest",r.a.createElement("input",{name:"category_2",ref:t})),c>2&&r.a.createElement("label",null,"Third Interest",r.a.createElement("input",{name:"category_3",ref:t})),c<3&&r.a.createElement("label",null,r.a.createElement("div",{id:"addCategory",onClick:function(e){e.preventDefault(),o(c+1)}},r.a.createElement("img",{className:"plus",src:q.a,alt:"plus sign"}),r.a.createElement("p",null,"add another category")))," ",r.a.createElement("input",{type:"submit",className:"mentorRegisterSubmit",value:"Save Profile"})))}var Q=function(){var e=Object(o.n)().path;return r.a.createElement("div",{className:"dashContainer"},r.a.createElement(C,null),r.a.createElement(f,null),r.a.createElement("div",null,r.a.createElement(o.g,null,r.a.createElement(o.d,{path:"".concat(e,"/calendar")},r.a.createElement(x,null)),r.a.createElement(o.d,{path:"".concat(e,"/profile")},r.a.createElement(w,null)))))},B=(a(290),function(){var e=Object(F.a)(),t=e.register,a=e.handleSubmit,l=(e.watch,e.errors,Object(n.useState)(1)),i=Object(I.a)(l,2),c=i[0],u=i[1],s=Object(d.c)((function(e){return e.authReducer.user})),m=Object(d.b)(),E=Object(o.k)();return r.a.createElement("div",{className:"mentorRegistration"},r.a.createElement("form",{className:"mentorRegisterForm",onSubmit:a((function(e){var t,a,n={mentor_id:s.id,mentor_name:e.mentor_name,category_1:e.category_1,category_2:e.category_2,category_3:e.category_3,mentor_bio:e.mentor_bio};m((t=n,a=s.id,function(e){console.log(t,a),g().post("/mentors/",t).then((function(t){e({type:"ADD_MENTOR_SUCCESS",payload:t.data}),201===t.status&&g().put("/users/".concat(a),{isMentor:!0}).then().catch((function(e){return console.log(e)}))})).catch((function(t){e({type:"ADD_MENTOR_FAILURE",payload:t})}))})),E.push("/dashboard")}))},r.a.createElement("label",null,"Mentor Name",r.a.createElement("input",{name:"mentor_name",ref:t({required:!0})})),c>0&&r.a.createElement("label",null,"Mentor Category 1",r.a.createElement("input",{name:"category_1",ref:t({required:!0})})),c>1&&r.a.createElement("label",null,"Mentor Category 2",r.a.createElement("input",{name:"category_2",ref:t})),c>2&&r.a.createElement("label",null,"Mentor Category 3",r.a.createElement("input",{name:"category_3",ref:t})),c<3&&r.a.createElement("label",null,r.a.createElement("div",{id:"addCategory",onClick:function(e){e.preventDefault(),u(c+1)}},r.a.createElement("img",{className:"plus",src:q.a,alt:"plus sign"}),r.a.createElement("p",null,"add another category"))),r.a.createElement("label",null,"Bio",r.a.createElement("textarea",{className:"mentorBio",type:"text",name:"mentor_bio",ref:t})),r.a.createElement("input",{className:"mentorRegisterSubmit",type:"submit",value:"Register"})))});var W=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(c.BrowserRouter,null,r.a.createElement(o.d,{path:"/",exact:!0,component:T}),r.a.createElement(o.d,{path:E.callbackPath,component:u.LoginCallback}),r.a.createElement(u.SecureRoute,{path:"/dashboard",component:Q}),r.a.createElement(o.d,{path:"/mentor-registration",component:B})))},z=a(24),P=a(122),J=a(123),V=a.n(J),Y=a(125),$=a(6);var H={user:{id:0,email:"",given_name:"",family_name:"",username:"",location:"",interest_1:"",interest_2:"",interest_3:"",created_at:"",avatar:"",isMentor:!1,user_bio:"",user_rating:0},isAuthenticated:!1,isLoading:!1,isLoggedIn:!1,error:null};var K={mentor:{},error:null};var X=Object(z.c)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.GETALL_REQUEST:return{loading:!0};case p.GETALL_SUCCESS:return{items:t.users};case p.GETALL_FAILURE:return{error:t.error};case p.DELETE_REQIEST:return Object($.a)({},e,{items:e.items.map((function(e){return e.id===t.id?Object($.a)({},e,{deleting:!0}):e}))});case p.DELETE_SUCCESS:return Object($.a)({},e,{items:e.items.filter((function(e){return e.id!==t.id}))});case p.DELETE_FAILURE:return Object($.a)({},e,{items:e.items.map((function(e){if(e.id===t.id){e.deleting;var a=Object(Y.a)(e,["deleting"]);return Object($.a)({},a,{deleteError:t.error})}return e}))});default:return e}},authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.LOGIN_REQUEST:return Object($.a)({},e,{isLoading:!0,error:null});case p.LOGIN_SUCCESS:return console.log(t),Object($.a)({},e,{user:t.payload,isLoading:!1,isLoggedIn:!0,error:null});case p.LOGIN_FAILURE:return Object($.a)({},e,{isLoading:!1,isLoggedIn:!1,error:"Failed to log in"});case p.LOGOUT:return console.log("logout"),Object($.a)({},e,{isLoading:!1,isLoggedIn:!1,error:""});case p.REGISTER_REQUEST:return Object($.a)({},e,{isLoading:!0});case p.REGISTER_SUCCESS:return Object($.a)({},e,{isLoading:!1});case p.REGISTER_FAILURE:return Object($.a)({},e,{error:"Failed to Register"});default:return e}},mentorReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MENTOR_SUCCESS":return Object($.a)({},e,{mentor:t.payload,error:null});case"ADD_MENTOR_FAILURE":return Object($.a)({},e,{error:t.payload});default:return e}}}),Z=[P.a,V.a],ee=Object(z.d)(X,z.a.apply(void 0,Z)),te=r.a.createElement(d.a,{store:ee},r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.Security,E,r.a.createElement(c.BrowserRouter,null,r.a.createElement(W,null)))));i.a.render(te,document.getElementById("root"))},49:function(e,t,a){e.exports=a.p+"static/media/plus.b914966f.png"}},[[126,1,2]]]);
//# sourceMappingURL=main.c9e6bf5e.chunk.js.map