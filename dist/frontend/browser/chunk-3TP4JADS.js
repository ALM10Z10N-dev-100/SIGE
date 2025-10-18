import"./chunk-7UZYWCAJ.js";import{c as M,d as y,f as C,g as h,h as S}from"./chunk-DUKSTT3K.js";import{e as A,g as L}from"./chunk-GJPBTFLJ.js";import"./chunk-JSKRQQM4.js";import{c as U,d as V}from"./chunk-OVSKQHQG.js";import{Ab as _,Ba as T,Ca as i,Cb as x,Ha as B,Mb as F,Na as w,Nb as P,Ob as b,Pa as H,Sa as u,Ua as I,ba as f,ca as v,eb as a,fb as c,gb as l,hb as m,hc as N,jc as G,nb as D,nc as R,pb as p,qa as O,rb as s,yb as d}from"./chunk-PRL6CGS5.js";var k=class n{clicHamburguesa=new I;onClick(){console.log("\xA1Clic en el \xEDcono del men\xFA!"),this.clicHamburguesa.emit()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=H({type:n,selectors:[["","btnHamburguesa",""]],hostBindings:function(e,o){e&1&&p("click",function(){return o.onClick()})},outputs:{clicHamburguesa:"clicHamburguesa"}})};var E=(n,t)=>({"texto-abierto":n,"texto-cerrado":t});function j(n,t){if(n&1&&(c(0,"div",15)(1,"a",16),_(2),P(3,"translate"),l()()),n&2){let e=s(2);a("@colapsarPanel",e.estadoPanel),i(2),x(" ",b(3,2,"HAMBURGUESA.CONFIGURACION")," ")}}function q(n,t){if(n&1&&(c(0,"div",15)(1,"div",17)(2,"a",18),_(3),P(4,"translate"),l()()()),n&2){let e=s(2);a("@colapsarPanel",e.estadoPanel),i(),a("ngClass",F(5,E,e.activePanel==="recursos",e.activePanel!=="recursos")),i(2),x(" ",b(4,3,"HAMBURGUESA.RECURSOS")," ")}}function K(n,t){if(n&1&&(c(0,"div",15)(1,"div",17)(2,"a",19),_(3),P(4,"translate"),l()()()),n&2){let e=s(2);a("@colapsarPanel",e.estadoPanel),i(),a("ngClass",F(5,E,e.activePanel==="calendario",e.activePanel!=="calendario")),i(2),x(" ",b(4,3,"HAMBURGUESA.CALENDARIO")," ")}}function J(n,t){if(n&1&&(c(0,"div",15)(1,"div",17)(2,"a",20),_(3),P(4,"translate"),l()()()),n&2){let e=s(2);a("@colapsarPanel",e.estadoPanel),i(),a("ngClass",F(5,E,e.activePanel==="login",e.activePanel!=="login")),i(2),x(" ",b(4,3,"HAMBURGUESA.LOGIN")," ")}}function Q(n,t){if(n&1&&(c(0,"div",15)(1,"div",17)(2,"a",21),_(3),P(4,"translate"),l()()()),n&2){let e=s(2);a("@colapsarPanel",e.estadoPanel),i(),a("ngClass",F(5,E,e.activePanel==="calificaciones",e.activePanel!=="calificaciones")),i(2),x(" ",b(4,3,"HAMBURGUESA.EVALUACIONES")," ")}}function X(n,t){if(n&1){let e=D();c(0,"div",3)(1,"div",4),p("click",function(r){return f(e),s().togglePanel("configuracion"),v(r.stopPropagation())}),m(2,"animated-icons",5),u(3,j,4,4,"div",6),l(),c(4,"div",7),p("click",function(r){return f(e),s().togglePanel("recursos"),v(r.stopPropagation())}),m(5,"animated-icons",8),u(6,q,5,8,"div",6),l(),c(7,"div",9),p("click",function(r){return f(e),s().togglePanel("calendario"),v(r.stopPropagation())}),m(8,"animated-icons",10),u(9,K,5,8,"div",6),l(),c(10,"div",11),p("click",function(r){return f(e),s().togglePanel("login"),v(r.stopPropagation())}),m(11,"animated-icons",12),u(12,J,5,8,"div",6),l(),c(13,"div",13),p("click",function(r){return f(e),s().togglePanel("calificaciones"),v(r.stopPropagation())}),m(14,"animated-icons",14),u(15,Q,5,8,"div",6),l()()}if(n&2){let e=s();a("@colapsarMenu",e.mostrarMenu?"expandido":"colapsado"),i(),d("disabled",e.activePanel&&e.activePanel!=="configuracion"),i(),d("abierto",e.activePanel==="configuracion")("cerrado",e.activePanel!=="configuracion"),i(),a("ngIf",e.activePanel==="configuracion"),i(),d("disabled",e.activePanel&&e.activePanel!=="recursos"),i(),d("abierto",e.activePanel==="recursos")("cerrado",e.activePanel!=="recursos")("expandido",e.activePanel==="recursos"),i(),a("ngIf",e.activePanel==="recursos"),i(),d("disabled",e.activePanel&&e.activePanel!=="calendario"),i(),d("abierto",e.activePanel==="calendario")("cerrado",e.activePanel!=="calendario")("expandido",e.activePanel==="calendario"),i(),a("ngIf",e.activePanel==="calendario"),i(),d("disabled",e.activePanel&&e.activePanel!=="login"),i(),d("abierto",e.activePanel==="login")("cerrado",e.activePanel!=="login")("expandido",e.activePanel==="login"),i(),a("ngIf",e.activePanel==="login"),i(),d("disabled",e.activePanel&&e.activePanel!=="calificaciones"),i(),d("abierto",e.activePanel==="calificaciones")("cerrado",e.activePanel!=="calificaciones")("expandido",e.activePanel==="calificaciones"),i(),a("ngIf",e.activePanel==="calificaciones")}}var W=class n{constructor(t){this.elRef=t}mostrarMenu=!1;activePanel=null;estadoPanel="colapsado";alternarMenu(){this.mostrarMenu=!this.mostrarMenu,this.mostrarMenu||this.togglePanel(null)}cerrarMenu(){this.mostrarMenu=!1,this.togglePanel(null)}togglePanel(t=null){t===this.activePanel?this.activePanel=null:this.activePanel=t,this.estadoPanel=this.activePanel?"expandido":"colapsado"}onGlobalClick(t){let e=t.target,o=this.elRef.nativeElement.contains(e);if(this.mostrarMenu&&!o){this.cerrarMenu();return}this.activePanel}static \u0275fac=function(e){return new(e||n)(B(O))};static \u0275cmp=w({type:n,selectors:[["app-side-bar"]],hostBindings:function(e,o){e&1&&p("mousedown",function(g){return o.onGlobalClick(g)},T)},decls:3,vars:1,consts:[["btnHamburguesa","",1,"menu","icon",3,"clicHamburguesa"],["src","https://animatedicons.co/get-icon?name=Menu&style=minimalistic&token=c9a15816-8582-4762-810c-23adfb75a127","trigger","click","attributes",`{
      "variationThumbColour":"#536DFE",
      "variationName":"Two Tone",
      "variationNumber":2,
      "numberOfGroups":2,
      "backgroundIsGroup":false,
      "strokeWidth":1.5,
      "defaultColours":{
        "group-1":"#265FDDFF",
        "group-2":"#0027FFFF",
        "background":"#E4EEF5FF"
      }
    }`,"height","24px","width","24px"],["class","menu-ham",4,"ngIf"],[1,"menu-ham"],[1,"panel-icono","configuracion",3,"click"],["src","https://animatedicons.co/get-icon?name=setting&style=minimalistic&token=dca75500-0e08-4c4f-b3f9-78b4fe6c03df","trigger","click","attributes",`{
          "variationThumbColour":"#536DFE",
          "variationName":"Two Tone",
          "variationNumber":2,
          "numberOfGroups":2,
          "backgroundIsGroup":false,
          "strokeWidth":1.5,
          "defaultColours":{
            "group-1":"#265FDDFF",
            "group-2":"#0027FFFF",
            "background":"#E4EEF5FF"
          }
        }`,"width","40px","height","40px"],["class","panel-contenido",4,"ngIf"],[1,"panel-icono","recursos",3,"click"],["src","https://animatedicons.co/get-icon?name=Learned&style=minimalistic&token=49b1299b-1bb0-4144-8e32-4265bddc1e65","trigger","click","attributes",`{
          "variationThumbColour":"#536DFE",
          "variationName":"Two Tone",
          "variationNumber":2,
          "numberOfGroups":2,
          "backgroundIsGroup":false,
          "strokeWidth":1.5,
          "defaultColours":{
            "group-1":"#265FDDFF",
            "group-2":"#0027FFFF",
            "background":"#E4EEF5FF"
          }
        }`,"width","40px","height","40px"],[1,"panel-icono","calendario",3,"click"],["src","https://animatedicons.co/get-icon?name=calendar%20V3&style=minimalistic&token=4c41ae18-3a92-43bc-b097-59c6f2c21510","trigger","click","attributes",`{
          "variationThumbColour":"#536DFE",
          "variationName":"Two Tone",
          "variationNumber":2,
          "numberOfGroups":2,
          "backgroundIsGroup":false,
          "strokeWidth":1.5,
          "defaultColours":{
            "group-1":"#265FDDFF",
            "group-2":"#0027FFFF",
            "background":"#E4EEF5FF"
          }
        }`,"height","40px","width","40px"],[1,"panel-icono","login",3,"click"],["src","https://animatedicons.co/get-icon?name=login&style=minimalistic&token=e611dfb8-fad8-4fd7-80da-af68bebdafb8","trigger","click","attributes",`{
          "variationThumbColour":"#536DFE",
          "variationName":"Two Tone",
          "variationNumber":2,
          "numberOfGroups":2,
          "backgroundIsGroup":false,
          "strokeWidth":1.5,
          "defaultColours":{
            "group-1":"#FFF",
            "group-2":"#0027FFFF",
            "background":"#E4EEF5FF"
          }
        }`,"height","40px","width","40px"],[1,"panel-icono","calificaciones",3,"click"],["src","https://animatedicons.co/get-icon?name=Accreditation&style=minimalistic&token=f7f902ac-91df-4d7d-8444-71b41d1a2a9e","trigger","click","attributes",`{
          "variationThumbColour":"#536DFE",
          "variationName":"Two Tone",
          "variationNumber":2,
          "numberOfGroups":2,
          "backgroundIsGroup":false,
          "strokeWidth":1.5,
          "defaultColours":{
            "group-1":"#FFF",
            "group-2":"#0027FFFF",
            "background":"#E4EEF5FF"
          }
        }`,"height","40px","width","40px"],[1,"panel-contenido"],["routerLink","/configuracion",1,"a_Con"],[1,"panel-texto",3,"ngClass"],["routerLink","/recursos",1,"a_Rec"],["routerLink","/calendario",1,"a_Cal"],["routerLink","/login",1,"a_Log"],["routerLink","/Evaluaciones",1,"a_Cali"]],template:function(e,o){e&1&&(c(0,"div",0),p("clicHamburguesa",function(){return o.alternarMenu()}),m(1,"animated-icons",1),u(2,X,16,44,"div",2),l()),e&2&&(i(2),a("ngIf",o.mostrarMenu))},dependencies:[L,A,k,R,N,G,V,U],styles:['@charset "UTF-8";.menu-ham[_ngcontent-%COMP%]{position:absolute;height:60%;border-radius:20px;background:linear-gradient(to bottom,#003cff,#538ce0);z-index:10000;padding:10px;display:flex;justify-content:space-between;flex-direction:column}.panel-icono[_ngcontent-%COMP%]{position:relative;display:flex;cursor:pointer}.configuracion[_ngcontent-%COMP%]{position:inherit;top:85%}.recursos[_ngcontent-%COMP%]{position:inherit;top:45%}.calendario[_ngcontent-%COMP%]{position:inherit;top:65%}.calificaciones[_ngcontent-%COMP%]{position:inherit;top:25%}.login[_ngcontent-%COMP%]{position:fixed;top:7%}.panel-contenido[_ngcontent-%COMP%]{top:-3px;padding:0;min-width:100%;height:50px;right:18%;display:flex;position:relative;border:#FFF 2px solid;border-radius:20px}.panel-texto[_ngcontent-%COMP%]{padding:6px 12px;transition:border-radius .3s ease}.panel-icono[_ngcontent-%COMP%]   animated-icons.cerrado[_ngcontent-%COMP%]{border:#FFF solid 2px;border-radius:50%}.a_Con[_ngcontent-%COMP%], .a_Rec[_ngcontent-%COMP%], .a_Cal[_ngcontent-%COMP%], .a_Log[_ngcontent-%COMP%], .a_Cali[_ngcontent-%COMP%]{position:relative;display:flex;color:azure;font-family:Kalam,cursive;font-style:oblique;font-size:30px;text-decoration:none;transition:filter .2s ease;text-align:center}.a_Con[_ngcontent-%COMP%]{display:flex;margin-left:0;left:35px;margin-top:-8px}.a_Rec[_ngcontent-%COMP%]{display:flex;margin-top:-14px;margin-left:35px;left:10px}.a_Cal[_ngcontent-%COMP%]{display:flex;margin-top:-13px;margin-left:20px;left:10px}.a_Cali[_ngcontent-%COMP%]{display:flex;margin-top:-14px;margin-left:-15px;left:38px}.a_Log[_ngcontent-%COMP%]{display:flex;margin-left:-20px;left:41px;margin-top:-13px}a[_ngcontent-%COMP%]:hover{filter:drop-shadow(1px 1px 1px #FFF)}.disabled[_ngcontent-%COMP%]{pointer-events:auto;opacity:.4;filter:blur(1px)}'],data:{animation:[M("colapsarMenu",[h("expandido",C({width:"250px",opacity:1})),h("colapsado",C({width:"60px",opacity:1})),S("expandido <=> colapsado",y("300ms ease-in-out"))]),M("colapsarPanel",[h("expandido",C({opacity:1,transform:"scale(1)",borderRadius:"20px",padding:"10px"})),h("colapsado",C({opacity:0,transform:"scale(0.8)",borderRadius:"20px",padding:"0px"})),S("expandido <=> colapsado",y("300ms ease-in-out"))])]}})};export{W as SideBar};
