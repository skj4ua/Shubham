(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__YDfv7",BreadTop:"BurgerIngredient_BreadTop__9IKfk",Seeds1:"BurgerIngredient_Seeds1__3HT5p",Seeds2:"BurgerIngredient_Seeds2__hOB9j",Meat:"BurgerIngredient_Meat__dEo-E",Cheese:"BurgerIngredient_Cheese__2v_kw",Salad:"BurgerIngredient_Salad__300vK",Bacon:"BurgerIngredient_Bacon__1MyGE"}},,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__1Bi12",Open:"SideDrawer_Open__1GpuE",Close:"SideDrawer_Close__CZjby",Logo:"SideDrawer_Logo__1whah"}},function(e,t,n){e.exports={Input:"Input_Input__2gB7p",Label:"Input_Label__1SQAZ",InputElement:"Input_InputElement__F201W",Invalid:"Input_Invalid__1Gp4E"}},,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__3y5W0",Label:"BuildControl_Label__efAZ3",Less:"BuildControl_Less__3PknH",More:"BuildControl_More__uirkc"}},,,function(e,t,n){e.exports={Toolbar:"Toolbaar_Toolbar__3WPl2",Logo:"Toolbaar_Logo__1VxO9",DesktopOnly:"Toolbaar_DesktopOnly__2bmj1"}},,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__16DwC",active:"NavigationItem_active__2obEH"}},,,,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1GD-s",OrderButton:"BuildControls_OrderButton__190gN",enable:"BuildControls_enable__30VmC"}},function(e,t,n){e.exports={Button:"Button_Button__1GwC2",Success:"Button_Success__2HS1S",Danger:"Button_Danger__2Hy-M"}},,,,,,,,,,,function(e,t,n){e.exports={Content:"Layout_Content__3Tog8"}},function(e,t,n){e.exports={Logo:"Logo_Logo__3SI1s"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__NkPxm"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__i0pGs"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2tIfF"}},,function(e,t,n){e.exports={Burger:"Burger_Burger__3OYs_"}},function(e,t,n){e.exports={Modal:"Modal_Modal__3k1Sc"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__3LxS3",load5:"Spinner_load5__1djpG"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__1QBjB"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__1YP-A",Input:"ContactData_Input__1YKSs"}},function(e,t,n){e.exports={Order:"Order_Order__1gKYZ"}},function(e,t,n){e.exports={Auth:"Auth_Auth__pboXG",Input:"Auth_Input__1i8Gc"}},,,function(e,t,n){e.exports=n(89)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),i=n.n(o),l=(n(66),n(3)),c=n(4),u=n(6),s=n(5),d=function(e){return e.children},p=n(44),h=n.n(p),m=n(25),g=n.n(m),f=n(45),v=n.n(f),E=n(46),b=n.n(E),_=function(e){return r.a.createElement("div",{className:v.a.Logo},r.a.createElement("img",{src:b.a,alt:"Burger-Logo"}))},C=n(47),y=n.n(C),k=n(27),I=n.n(k),S=n(17),O=function(e){return r.a.createElement("li",{className:I.a.NavigationItem},r.a.createElement(S.b,{to:e.link,exact:e.exact,activeClassName:I.a.active},e.children))},j=function(e){return r.a.createElement("ul",{className:y.a.NavigationItems},r.a.createElement(O,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?r.a.createElement(O,{link:"/orders"},"Orders"):null,e.isAuthenticated?r.a.createElement(O,{link:"/Logout"},"Logout"):r.a.createElement(O,{link:"/Auth"},"Authentication"))},A=n(49),T=n.n(A),N=function(e){return r.a.createElement("div",{className:T.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},B=function(e){return r.a.createElement("header",{className:g.a.Toolbar},r.a.createElement(N,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:g.a.Logo},r.a.createElement(_,null)),r.a.createElement("nav",{className:g.a.DesktopOnly},r.a.createElement(j,{isAuthenticated:e.isAuth})))},R=n(50),D=n.n(R),w=function(e){return e.show?r.a.createElement("div",{className:D.a.Backdrop,onClick:e.clicked}):null},x=n(19),P=n.n(x),H=function(e){var t=[P.a.SideDrawer,P.a.Close];return e.open&&(t=[P.a.SideDrawer,P.a.Open]),r.a.createElement(d,null,r.a.createElement(w,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" "),onClick:e.closed},r.a.createElement("div",{className:P.a.Logo},r.a.createElement(_,null)),r.a.createElement("nav",null,r.a.createElement(j,{isAuthenticated:e.isAuth}))))},U=n(8),L=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showDrawer:!1},e.SideDrawerCloseHandler=function(){e.setState({showDrawer:!1})},e.SideDrawerToggleHandler=function(){e.setState((function(e){return{showDrawer:!e.showDrawer}}))},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(B,{isAuth:this.props.isAuth,drawerToggleClicked:this.SideDrawerToggleHandler}),r.a.createElement(H,{isAuth:this.props.isAuth,open:this.state.showDrawer,closed:this.SideDrawerCloseHandler}),r.a.createElement("main",{className:h.a.Content},this.props.children))}}]),n}(a.Component),G=Object(U.b)((function(e){return{isAuth:null!=e.auth.token}}))(L),F=n(7),M=n(60),Y=n(52),q=n.n(Y),Z=n(14),z=n.n(Z),W=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:z.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:z.a.BreadTop},r.a.createElement("div",{className:z.a.Seeds1}),r.a.createElement("div",{className:z.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:z.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:z.a.Cheese});break;case"bacon":e=r.a.createElement("div",{className:z.a.Bacon});break;case"salad":e=r.a.createElement("div",{className:z.a.Salad});break;default:e=null}return e}}]),n}(a.Component),K=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(M.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(W,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null," Please start adding the ingredients ")),r.a.createElement("div",{className:q.a.Burger},r.a.createElement(W,{type:"bread-top"}),t,r.a.createElement(W,{type:"bread-bottom"}))},V=n(22),X=n.n(V),$=function(e){return r.a.createElement("div",{className:X.a.BuildControl},r.a.createElement("div",{className:X.a.Label},e.label),r.a.createElement("button",{className:X.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:X.a.More,onClick:e.added},"More"))},J=n(32),Q=n.n(J),ee=[{label:"Salad",type:"salad"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"},{label:"Bacon",type:"bacon"}],te=function(e){return r.a.createElement("div",{className:Q.a.BuildControls},"Total Price :- ",r.a.createElement("strong",null,e.price.toFixed(2)),ee.map((function(t){return r.a.createElement($,{key:t.label,label:t.label,added:function(){return e.ingredientsadd(t.type)},removed:function(){return e.ingredientsrem(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:Q.a.OrderButton,disabled:!e.purchase,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN IN"))},ne=n(53),ae=n.n(ne),re=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(w,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:ae.a.Modal,style:{transform:this.props.show?"translateY(0)":"translate(-100vh)",opacity:this.props.show?"1":"0",display:this.props.show?"block":"none"}},this.props.children))}}]),n}(a.Component),oe=n(33),ie=n.n(oe),le=function(e){return r.a.createElement("button",{disabled:e.disabled,className:[ie.a.Button,ie.a[e.btntype]].join(" "),onClick:e.clicked},e.children)},ce=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])}));return r.a.createElement(d,null,r.a.createElement("h3",null," Your  Order"),r.a.createElement("p",null,"Your Burger has following ingredients"),r.a.createElement("ul",null,t,r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price :",this.props.totalPrice.toFixed(2))),r.a.createElement("p",null," Continue to Checkout ")),r.a.createElement(le,{btntype:"Danger",clicked:this.props.PurcahseCancel},"CANCEL"),r.a.createElement(le,{btntype:"Success",clicked:this.props.PurcahseContinue},"CONTINUE"))}}]),n}(a.Component),ue=n(54),se=n.n(ue),de=function(e){return r.a.createElement("div",{className:se.a.Loader},"Loading...")},pe=function(e,t){return function(n){Object(u.a)(o,n);var a=Object(s.a)(o);function o(){var e;Object(l.a)(this,o);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={error:null},e.errorConfirmedhandler=function(){e.setState({error:null})},e}return Object(c.a)(o,[{key:"componentWillMount",value:function(){var e=this;t.interceptors.request.use((function(t){return e.setState({error:null}),t})),t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(re,{show:this.state.error,modalClosed:this.errorConfirmedhandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),o}(a.Component)},he=n(24),me=n.n(he),ge=me.a.create({baseURL:"https://react-myapp-burger-9ed67.firebaseio.com/"}),fe=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},ve=function(){return localStorage.removeItem("Token"),localStorage.removeItem("tokenExpirationDate"),localStorage.removeItem("userId"),{type:"AUTH_LOGOUT"}},Ee=function(e){return function(t){setTimeout((function(){t(ve())}),1e3*e)}},be=function(e){return{type:"SET_AUTH_REDIRECT_PATH",path:e}},_e=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={purchasing:!1},e.UpdatePurchasestate=function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0},e.PurchaseHandler=function(){e.props.auth?e.setState({purchasing:!0}):(e.props.onSetAuthRedirectPath("./checkout"),e.props.history.push("/auth"))},e.PurcahseCancelhandler=function(){e.setState({purchasing:!1})},e.PurcahseContinuehandler=function(){e.props.onInitpurchase(),e.props.history.push("/checkout")},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitingrsdients()}},{key:"render",value:function(){var e=Object(F.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.props.error?r.a.createElement("p",null,"Ingredients cannot be loaded"):r.a.createElement(de,null);return this.props.ings&&(a=r.a.createElement(d,null,r.a.createElement(K,{ingredients:this.props.ings}),r.a.createElement(te,{ingredientsadd:this.props.onAddingredient,ingredientsrem:this.props.onRemoveingredient,disabled:e,price:this.props.price,purchase:this.UpdatePurchasestate(this.props.ings),ordered:this.PurchaseHandler,isAuth:this.props.auth})),n=r.a.createElement(ce,{ingredients:this.props.ings,PurcahseCancel:this.PurcahseCancelhandler,PurcahseContinue:this.PurcahseContinuehandler,totalPrice:this.props.price})),r.a.createElement(d,null,r.a.createElement(re,{show:this.state.purchasing,modalClosed:this.PurcahseCancelhandler},n),a)}}]),n}(a.Component),Ce=Object(U.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,auth:null!=e.auth.token}}),(function(e){return{onAddingredient:function(t){return e({type:"ADD_INGREDIENT",ingredientname:t})},onRemoveingredient:function(t){return e({type:"REMOVE_INGREDIENT",ingredientname:t})},onInitingrsdients:function(){return e((function(e){ge.get("https://react-myapp-burger-9ed67.firebaseio.com/ingredients.json").then((function(t){e({type:"SET_INGREDIENT",ingredients:t.data})})).catch((function(t){e({type:"FETCH_INGRDIENTS_FAILED"})}))}))},onInitpurchase:function(){return e({type:"PURCHASE_INIT"})},onSetAuthRedirectPath:function(t){return e(be(t))}}}))(pe(_e,ge)),ye=n(55),ke=n.n(ye),Ie=function(e){return r.a.createElement("div",{className:ke.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it taste well !!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(K,{ingredients:e.ingredients})),r.a.createElement(le,{btntype:"Danger",clicked:e.checkoutCanceledhandler},"CANCEL"),r.a.createElement(le,{btntype:"Success",clicked:e.checkoutContinuehandler},"CONTINUE"))},Se=n(56),Oe=n.n(Se),je=n(20),Ae=n.n(je),Te=function(e){var t=null,n=[Ae.a.InputElement];e.invalid&&e.validation&&e.touched&&n.push(Ae.a.Invalid);var a=null;switch(e.invalid&&e.touched&&(a=r.a.createElement("p",{style:{color:"red"}},"Please enter a valid value!")),e.elementtype){case"input":t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayvalue)})));break;default:t=r.a.createElement("input",Object.assign({className:Ae.a.InputElement},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:Ae.a.Input},r.a.createElement("label",{className:Ae.a.Label},e.label),t,a)},Ne=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={orderForm:{name:{elementtype:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{Required:!0},valid:!1,touched:!1},Area:{elementtype:"input",elementConfig:{type:"text",placeholder:"Your Area"},value:"",validation:{Required:!0},valid:!1,touched:!1},Zipcode:{elementtype:"input",elementConfig:{type:"text",placeholder:"Your Pincode"},value:"",validation:{Required:!0,minlength:5,maxlength:10,isNumeric:!0},valid:!1,touched:!1},Country:{elementtype:"input",elementConfig:{type:"text",placeholder:"Your Country"},value:"",validation:{Required:!0},valid:!1,touched:!1},email:{elementtype:"input",elementConfig:{type:"email",placeholder:"Your E-mail"},value:"",validation:{Required:!0,isEmail:!0},valid:!1,touched:!1},deliverymethod:{elementtype:"select",elementConfig:{options:[{value:"fast",displayvalue:"Fast"},{value:"cheap",displayvalue:"Cheap"}]},validation:{},value:"Fast",valid:!0}},formIsvalid:!1},e.orderHandler=function(t){t.preventDefault();var n={};for(var a in e.state.orderForm)n[a]=e.state.orderForm[a].value;var r={ingredients:e.props.ings,price:e.props.price,orderData:n,userId:e.props.userId};e.props.onOrderBurger(r,e.props.token)},e.checkValidation=function(e,t){var n=!0;if(!t)return!0;if(t.Required&&(n=""!=e.trim()&&n),t.minlength&&(n=e.length>=t.minlength&&n),t.maxlength&&(n=e.length<=t.maxlength&&n),t.isEmail){n=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n},e}return Object(c.a)(n,[{key:"InputChangeHandler",value:function(e,t){var n=Object(F.a)({},this.state.orderForm),a=Object(F.a)({},n[t]);a.value=e.target.value,a.valid=this.checkValidation(a.value,a.validation),a.touched=!0,n[t]=a;var r=!0;for(var o in n)r=n[o].valid&&r;console.log(r),this.setState({orderForm:n,formIsvalid:r})}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,Config:this.state.orderForm[n]});var a=r.a.createElement("form",null,t.map((function(t){return r.a.createElement(Te,{key:t.id,elementtype:t.Config.elementtype,elementConfig:t.Config.elementConfig,value:t.Config.value,invalid:!t.Config.valid,validation:t.Config.validation,touched:t.Config.touched,changed:function(n){return e.InputChangeHandler(n,t.id)}})})),r.a.createElement(le,{btntype:"Success",disabled:!this.state.formIsvalid,clicked:this.orderHandler},"ORDER"));return this.props.loading&&(a=r.a.createElement(de,null)),r.a.createElement("div",{className:Oe.a.ContactData},r.a.createElement("h4",null,"Enter your Contact Details"),a)}}]),n}(a.Component),Be=Object(U.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,n){return e(function(e,t){return function(n){n({type:"PURCHASE_BURGER_START"}),ge.post("/orders.json?auth="+t,e).then((function(t){console.log(t.data),n(function(e,t){return{type:"PURCHASE_BURGER_SUCCESS",orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:"PURCHASE_BURGER_FAIL",error:e}}(e))}))}}(t,n))}}}))(pe(Ne,ge)),Re=n(2),De=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).checkoutCanceledhandler=function(){e.props.history.goBack()},e.checkoutContinuehandler=function(){e.props.history.push(e.props.match.url+"/contact-data")},e}return Object(c.a)(n,[{key:"render",value:function(){var e=r.a.createElement(Re.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?r.a.createElement(Re.a,{to:"/"}):null;e=r.a.createElement("div",null,t,r.a.createElement(Ie,{ingredients:this.props.ings,checkoutCanceledhandler:this.checkoutCanceledhandler,checkoutContinuehandler:this.checkoutContinuehandler}),r.a.createElement(Re.b,{path:this.props.match.url+"/contact-data",component:Be}))}return r.a.createElement("div",null,e)}}]),n}(a.Component),we=Object(U.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(De),xe=n(57),Pe=n.n(xe),He=function(e){var t=[];for(var n in e.ingredients)t.push({Name:n,Amount:e.ingredients[n]});var a=t.map((function(e){return r.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.Name},e.Name," ",e.Amount)}));return r.a.createElement("div",{className:Pe.a.Order},r.a.createElement("p",null,"Ingredients : ",a),r.a.createElement("p",null,"Price : ",r.a.createElement("strong",null," Rs: ",e.price.toFixed(2))))},Ue=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=null;return this.props.loading&&(e=r.a.createElement(de,null)),this.props.orders&&(e=this.props.orders.map((function(e){return r.a.createElement(He,{key:e.id,ingredients:e.ingredients,price:+e.price})}))),r.a.createElement("div",null,e)}}]),n}(a.Component),Le=Object(U.b)((function(e){return{orders:e.order.order,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(t,n){return e(function(e,t){return function(n){n({type:"FETCH_BURGER_START"});var a="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';ge.get("./orders.json"+a).then((function(e){var t=[];for(var a in e.data)t.push(Object(F.a)(Object(F.a)({},e.data[a]),{},{id:a}));n({type:"FETCH_BURGER_SUCCESS",orders:t})})).catch((function(e){n({type:"FETCH_BURGER_SUCCESS",error:e})}))}}(t,n))}}}))(pe(Ue,ge)),Ge=n(15),Fe=n(58),Me=n.n(Fe),Ye=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={controls:{email:{elementtype:"input",elementConfig:{type:"email",placeholder:"Your Email Address"},value:"",validation:{Required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementtype:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{Required:!0,minlength:7},valid:!1,touched:!1}},isSigup:!0},e.checkValidation=function(e,t){var n=!0;if(!t)return!0;if(t.Required&&(n=""!==e.trim()&&n),t.minlength&&(n=e.length>=t.minlength&&n),t.maxlength&&(n=e.length<=t.maxlength&&n),t.isEmail){n=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n},e.InputChangeHandler=function(t,n){var a=Object(F.a)(Object(F.a)({},e.state.controls),{},Object(Ge.a)({},n,Object(F.a)(Object(F.a)({},e.state.controls[n]),{},{value:t.target.value,valid:e.checkValidation(t.target.value,e.state.controls[n].validation),touched:!0})));e.setState({controls:a})},e.submitHandler=function(t){t.preventDefault(),e.props.Auth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSigup)},e.switchAuthModeHandler=function(){e.setState((function(e){return{isSigup:!e.isSigup}}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"==this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,Config:this.state.controls[n]});var a=r.a.createElement("form",null,t.map((function(t){return r.a.createElement(Te,{key:t.id,elementtype:t.Config.elementtype,elementConfig:t.Config.elementConfig,value:t.Config.value,invalid:!t.Config.valid,validation:t.Config.validation,touched:t.Config.touched,changed:function(n){return e.InputChangeHandler(n,t.id)}})})));this.props.loading&&(a=r.a.createElement(de,null));var o=null;this.props.error&&(o=r.a.createElement("p",null,this.props.error.message));var i=null;return this.props.auth&&(i=r.a.createElement(Re.a,{to:this.props.authRedirectPath})),r.a.createElement("div",{className:Me.a.Auth},i,o,r.a.createElement("form",{onSubmit:this.submitHandler},a,r.a.createElement(le,{btntype:"Success"}," SUBMIT")),r.a.createElement(le,{clicked:this.switchAuthModeHandler,btntype:"Danger"},"SWITCH TO ",this.state.isSigup?"SIGNUP":"LOGIN"))}}]),n}(a.Component),qe=Object(U.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,auth:null!=e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{Auth:function(t,n,a){return e(function(e,t,n){return function(a){a({type:"AUTH_START"});var r={email:e,password:t,returnSecureToken:!0},o="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA3h0kxY0lKXWSnXtuazKZOiINFAywe4bE";n||(o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA3h0kxY0lKXWSnXtuazKZOiINFAywe4bE"),me.a.post(o,r).then((function(e){console.log(e);var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("Token",e.data.idToken),localStorage.setItem("tokenExpirationDate",t),localStorage.setItem("userId",e.data.localId),a(fe(e.data.idToken,e.data.localId)),a(Ee(e.data.expiresIn))})).catch((function(e){console.log(e),console.log(e.response),a(function(e){return{type:"AUTH_FAIL",error:e}}(e.response.data.error))}))}}(t,n,a))},onSetAuthRedirectPath:function(){return e(be("/"))}}}))(Ye),Ze=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return r.a.createElement(Re.a,{to:"/"})}}]),n}(a.Component),ze=Object(U.b)(null,(function(e){return{onLogout:function(){return e(ve())}}}))(Ze),We=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=r.a.createElement(Re.d,null,r.a.createElement(Re.b,{path:"/Auth",component:qe}),r.a.createElement(Re.b,{path:"/",exact:!0,component:Ce}),r.a.createElement(Re.a,{to:"/"}));return this.props.isAuth&&(e=r.a.createElement(Re.d,null,r.a.createElement(Re.b,{path:"/checkout",component:we}),r.a.createElement(Re.b,{path:"/orders",component:Le}),r.a.createElement(Re.b,{path:"/Logout",component:ze}),r.a.createElement(Re.b,{path:"/Auth",component:qe}),r.a.createElement(Re.b,{path:"/",exact:!0,component:Ce}),r.a.createElement(Re.a,{to:"/"}))),r.a.createElement("div",null,r.a.createElement(G,null,e))}}]),n}(a.Component),Ke=Object(Re.g)(Object(U.b)((function(e){return{isAuth:null!=e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("Token");if(t){var n=new Date(localStorage.getItem("tokenExpirationDate"));if(n<=new Date)e(ve());else{var a=localStorage.getItem("userId");e(fe(t,a)),e(Ee((n.getTime()-(new Date).getTime())/1e3))}}else e(ve())}))}}}))(We)),Ve=n(16),Xe=function(e,t){return Object(F.a)(Object(F.a)({},e),t)},$e={ingredients:null,totalPrice:50,error:!1,building:!1},Je={salad:10.2,bacon:20,meat:30.3,cheese:35},Qe=function(e,t){var n=Object(Ge.a)({},t.ingredientname,e.ingredients[t.ingredientname]+1),a={ingredients:Xe(e.ingredients,n),totalPrice:e.totalPrice+Je[t.ingredientname],building:!0};return Xe(e,a)},et=function(e,t){var n=Object(Ge.a)({},t.ingredientname,e.ingredients[t.ingredientname]-1),a={ingredients:Xe(e.ingredients,n),totalPrice:e.totalPrice+Je[t.ingredientname],building:!0};return Xe(e,a)},tt=function(e,t){return Xe(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:50,error:!1,building:!1})},nt=function(e,t){return Xe(e,{error:!0})},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return Qe(e,t);case"REMOVE_INGREDIENT":return et(e,t);case"SET_INGREDIENT":return tt(e,t);case"FETCH_INGRDIENTS_FAILED":return nt(e);default:return e}},rt={order:[],loading:!1,purchased:!1},ot=function(e,t){return Xe(e,{purchased:!1})},it=function(e,t){return Xe(e,{loading:!0})},lt=function(e,t){return Xe(e,{loading:!1})},ct=function(e,t){return Xe(e,{loading:!0})},ut=function(e,t){return Xe(e,{order:t.orders,loading:!1})},st=function(e,t){return Xe(e,{loading:!1})},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PURCHASE_INIT":return ot(e);case"PURCHASE_BURGER_START":it(e);case"PURCHASE_BURGER_SUCCESS":var n=Object(F.a)(Object(F.a)({},t.orderData),{},{id:t.orderId});return Object(F.a)(Object(F.a)({},e),{},{loading:!1,purchased:!0,order:e.order.concat(n)});case"PURCHASE_BURGER_FAIL":return lt(e);case"FETCH_BURGER_START":return ct(e);case"FETCH_BURGER_SUCCESS":return ut(e,t);case"FETCH_BURGER_START":return st(e);default:return e}},pt={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},ht=function(e,t){return Xe(e,{loading:!0,error:null})},mt=function(e,t){return Xe(e,{loading:!1,token:t.idToken,userId:t.userId,error:null})},gt=function(e,t){return Xe(e,{loading:!1,error:t.error})},ft=function(e,t){return Xe(e,{token:null,userId:null})},vt=function(e,t){return Xe(e,{authRedirectPath:t.path})},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return ht(e);case"AUTH_SUCCESS":return mt(e,t);case"AUTH_FAIL":return gt(e,t);case"AUTH_LOGOUT":return ft(e);case"SET_AUTH_REDIRECT_PATH":return vt(e,t);default:return e}},bt=n(59),_t=Ve.d,Ct=Object(Ve.c)({burgerBuilder:at,order:dt,auth:Et}),yt=Object(Ve.e)(Ct,_t(Object(Ve.a)(bt.a))),kt=r.a.createElement(U.a,{store:yt},r.a.createElement(S.a,null,r.a.createElement(Ke,null)));i.a.render(kt,document.getElementById("root"))}],[[61,1,2]]]);
//# sourceMappingURL=main.7b7ee146.chunk.js.map