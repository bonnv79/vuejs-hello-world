(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7613200c"],{6900:function(e,t,n){"use strict";n("8253")},"7ba7":function(e,t,n){},8253:function(e,t,n){},c8f9:function(e,t,n){"use strict";n("cf7e")},cf7e:function(e,t,n){},e266:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),l={class:""};function a(e,t,n,a,i,r){var o=Object(c["D"])("Example1"),u=Object(c["D"])("Example2"),b=Object(c["D"])("Example3"),s=Object(c["D"])("Example4"),j=Object(c["D"])("Example5"),h=Object(c["D"])("Example6"),O=Object(c["D"])("Example7");return Object(c["v"])(),Object(c["g"])("div",l,[Object(c["j"])(o),Object(c["j"])(u),Object(c["j"])(b),Object(c["j"])(s),Object(c["j"])(j),Object(c["j"])(h),Object(c["j"])(O)])}var i={class:""},r=Object(c["h"])("h3",null," 1. Let’s consider an example to understand why we need and when to use v-bind directive for data binding. ",-1),o=Object(c["h"])("br",null,null,-1),u=Object(c["h"])("a",{href:"hreflink",target:"_blank"}," Click Me no bind ",-1),b=Object(c["i"])(),s=Object(c["h"])("br",null,null,-1),j=Object(c["h"])("a",{href:"{{hreflink}}",target:"_blank"},"Click Me no bind ",-1),h=Object(c["i"])(),O=Object(c["h"])("br",null,null,-1),d=["href"],p=Object(c["i"])(),m=Object(c["h"])("br",null,null,-1);function v(e,t,n,l,a,v){return Object(c["v"])(),Object(c["g"])("div",i,[r,Object(c["i"])(" "+Object(c["H"])(e.title),1),o,u,b,s,j,h,O,Object(c["h"])("a",{href:e.hreflink,target:"_blank"},"Click Me bind ",8,d),p,m])}var f={name:"Example",props:{},setup:function(){return{}},data:function(){return{title:"DATA BINDING",hreflink:"http://www.google.com"}},methods:{},computed:{}};f.render=v;var g=f;Object(c["y"])("data-v-414660e6");var x={class:""},E=Object(c["h"])("h3",null,"2. Binding HTML Classes",-1),k=Object(c["i"])(" isActive: "),y=Object(c["i"])(" hasError: ");function w(e,t,n,l,a,i){return Object(c["v"])(),Object(c["g"])("div",x,[E,k,Object(c["Q"])(Object(c["h"])("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.isActive=t})},null,512),[[c["J"],e.isActive]]),y,Object(c["Q"])(Object(c["h"])("input",{type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.hasError=t})},null,512),[[c["J"],e.hasError]]),Object(c["h"])("div",{class:Object(c["p"])({title:!0,info:!0,active:e.isActive,displayError:e.hasError})},[Object(c["h"])("b",null,Object(c["H"])(e.title),1)],2)])}Object(c["w"])();var A={name:"Example",props:{},setup:function(){return{}},data:function(){return{title:"This is class binding example",isActive:!1,hasError:!1}},methods:{},computed:{}};n("6900");A.render=w,A.__scopeId="data-v-414660e6";var Q=A;Object(c["y"])("data-v-afa7cc46");var U={class:"root"},V=Object(c["h"])("h3",null," 3. We can also pass class as an array. Let us take an example to understand this. ",-1),I=Object(c["i"])(" isActive: "),D=Object(c["i"])(),H=Object(c["h"])("br",null,null,-1),M=Object(c["i"])(" isInfo: "),J=Object(c["i"])(),_=Object(c["h"])("br",null,null,-1),B=Object(c["i"])(" hasError: ");function C(e,t,n,l,a,i){return Object(c["v"])(),Object(c["g"])("div",U,[V,I,Object(c["Q"])(Object(c["h"])("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.isActive=t})},null,512),[[c["J"],e.isActive]]),D,H,M,Object(c["Q"])(Object(c["h"])("input",{type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.isInfo=t})},null,512),[[c["J"],e.isInfo]]),J,_,B,Object(c["Q"])(Object(c["h"])("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.hasError=t})},null,512),[[c["J"],e.hasError]]),Object(c["h"])("div",{class:Object(c["p"])([e.isActive?e.activeclass:"",e.hasError?e.errorclass:"",e.isInfo?e.infoclass:""])},Object(c["H"])(e.title),3)])}Object(c["w"])();var S={name:"Example",props:{},setup:function(){return{}},data:function(){return{title:"This is class binding example",activeclass:"active",infoclass:"info",errorclass:"displayError",isActive:!1,hasError:!1,isInfo:!1}},methods:{},computed:{}};n("e354");S.render=C,S.__scopeId="data-v-afa7cc46";var z=S;Object(c["y"])("data-v-e8db8092");var T={class:"root"},W=Object(c["h"])("h3",null," 4. In the following example, we have added a class to the component template and also to the component. ",-1),L=Object(c["i"])(" isActive: "),N=Object(c["i"])(),q=Object(c["h"])("br",null,null,-1);function K(e,t,n,l,a,i){var r=Object(c["D"])("new_component");return Object(c["v"])(),Object(c["g"])("div",T,[W,L,Object(c["Q"])(Object(c["h"])("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.isActive=t})},null,512),[[c["J"],e.isActive]]),N,q,Object(c["j"])(r,{class:Object(c["p"])({active:e.isActive})},null,8,["class"])])}Object(c["w"])();var P={class:"info"};function R(e,t,n,l,a,i){return Object(c["v"])(),Object(c["g"])("div",P,"Class Binding for component")}var X={name:"Example",props:{},components:{}};X.render=R;var F=X,G={name:"Example",props:{},components:{new_component:F},setup:function(){return{}},data:function(){return{isActive:!1}},methods:{},computed:{}};n("c8f9");G.render=K,G.__scopeId="data-v-e8db8092";var Y=G,Z={class:"root"},$=Object(c["h"])("h3",null,"5. Binding Inline Styles",-1),ee=Object(c["h"])("h4",null,"Basic",-1),te=Object(c["i"])(" isActive: "),ne=Object(c["i"])(),ce=Object(c["h"])("br",null,null,-1),le=Object(c["h"])("h4",null," We can also do the same thing by assigning all the values to a variable and then assigning the variable to the div. ",-1);function ae(e,t,n,l,a,i){return Object(c["v"])(),Object(c["g"])("div",Z,[$,ee,te,Object(c["Q"])(Object(c["h"])("input",{type:"number","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.fontSize=t})},null,512),[[c["M"],e.fontSize]]),ne,ce,Object(c["h"])("div",{style:Object(c["q"])({color:e.activeColor,fontSize:e.fontSize+"px"})},Object(c["H"])(e.title),5),le,Object(c["h"])("div",{style:Object(c["q"])(e.styleobj)},Object(c["H"])(e.title),5)])}var ie={name:"Example",props:{},setup:function(){return{}},data:function(){return{title:"Inline style Binding",activeColor:"red",fontSize:12,styleobj:{color:"red",fontSize:"40px"}}},methods:{},computed:{}};ie.render=ae;var re=ie,oe=(n("b0c0"),{class:"root"}),ue=Object(c["h"])("h3",null,"6. Form Input Bindings",-1),be=Object(c["h"])("h4",null,"TEXTBOX",-1),se=Object(c["h"])("hr",null,null,-1),je=Object(c["h"])("h4",null,"Textarea",-1),he=Object(c["h"])("hr",null,null,-1),Oe=Object(c["h"])("h4",null,"Checkbox",-1),de=Object(c["h"])("h4",null,"Radio",-1),pe=Object(c["h"])("label",{for:"black"},"Black",-1),me=Object(c["h"])("label",{for:"white"},"White",-1),ve=Object(c["h"])("hr",null,null,-1),fe=Object(c["h"])("h4",null,"Select",-1),ge=Object(c["h"])("option",{disabled:"",value:""},"Please select one",-1),xe=Object(c["h"])("option",null,"Java",-1),Ee=Object(c["h"])("option",null,"Javascript",-1),ke=Object(c["h"])("option",null,"Php",-1),ye=Object(c["h"])("option",null,"C",-1),we=Object(c["h"])("option",null,"C++",-1),Ae=[ge,xe,Ee,ke,ye,we],Qe=Object(c["h"])("hr",null,null,-1);function Ue(e,t,n,l,a,i){return Object(c["v"])(),Object(c["g"])("div",oe,[ue,be,Object(c["Q"])(Object(c["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.name=t}),placeholder:"Enter Name"},null,512),[[c["M"],e.name]]),Object(c["h"])("h4",null,"Name entered is : "+Object(c["H"])(e.name),1),se,je,Object(c["Q"])(Object(c["h"])("textarea",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.textmessage=t}),placeholder:"Add Details"},null,512),[[c["M"],e.textmessage]]),Object(c["h"])("h1",null,[Object(c["h"])("p",null,Object(c["H"])(e.textmessage),1)]),he,Oe,Object(c["Q"])(Object(c["h"])("input",{type:"checkbox",id:"checkbox","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.checked=t})},null,512),[[c["J"],e.checked]]),Object(c["i"])(" "+Object(c["H"])(e.checked)+" ",1),de,Object(c["Q"])(Object(c["h"])("input",{type:"radio",id:"black",value:"Black","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.picked=t})},null,512),[[c["K"],e.picked]]),pe,Object(c["Q"])(Object(c["h"])("input",{type:"radio",id:"white",value:"White","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.picked=t})},null,512),[[c["K"],e.picked]]),me,Object(c["h"])("h4",null,"Radio element clicked : "+Object(c["H"])(e.picked),1),ve,fe,Object(c["Q"])(Object(c["h"])("select",{"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.languages=t})},Ae,512),[[c["L"],e.languages]]),Object(c["h"])("h4",null,"Languages Selected is : "+Object(c["H"])(e.languages),1),Qe])}var Ve={name:"Example",props:{},setup:function(){return{}},data:function(){return{name:"",textmessage:"",checked:!1,picked:"White",languages:"Java"}},methods:{},computed:{}};Ve.render=Ue;var Ie=Ve,De={class:"root"},He=Object(c["h"])("h3",null," 7. We have used three modifiers in the example - trim, number, and lazy. ",-1),Me=Object(c["h"])("span",null,"Enter Age:",-1),Je=Object(c["h"])("br",null,null,-1),_e=Object(c["h"])("span",null,"Enter Message:",-1),Be=Object(c["h"])("br",null,null,-1),Ce=Object(c["h"])("span",null,"Enter Message : ",-1);function Se(e,t,n,l,a,i){return Object(c["v"])(),Object(c["g"])("div",De,[He,Me,Object(c["Q"])(Object(c["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.age=t}),type:"number"},null,512),[[c["M"],e.age,void 0,{number:!0}]]),Object(c["h"])("h4",null,"Display age : "+Object(c["H"])(e.age),1),Je,_e,Object(c["Q"])(Object(c["h"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.msg=t})},null,512),[[c["M"],e.msg,void 0,{lazy:!0}]]),Object(c["h"])("h4",null,"Display Message : "+Object(c["H"])(e.msg),1),Be,Ce,Object(c["Q"])(Object(c["h"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.message=t})},null,512),[[c["M"],e.message,void 0,{trim:!0}]]),Object(c["h"])("h4",null,"Display Message : "+Object(c["H"])(e.message),1)])}var ze={name:"Example",props:{},setup:function(){return{}},data:function(){return{age:0,msg:"",message:""}},methods:{},computed:{}};ze.render=Se;var Te=ze,We={name:"Index",components:{Example1:g,Example2:Q,Example3:z,Example4:Y,Example5:re,Example6:Ie,Example7:Te},props:{}};We.render=a;t["default"]=We},e354:function(e,t,n){"use strict";n("7ba7")}}]);
//# sourceMappingURL=chunk-7613200c.251a45ba.js.map