(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d508967c"],{4364:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),l=Object(c["h"])("hr",null,null,-1);function a(t,e,n,a,i,u){var b=Object(c["D"])("Example1"),j=Object(c["D"])("Example2");return Object(c["v"])(),Object(c["g"])(c["a"],null,[Object(c["j"])(b),l,Object(c["j"])(j)],64)}n("b0c0");var i=Object(c["h"])("h2",null,"model",-1),u=Object(c["i"])(" FirstName : "),b=Object(c["i"])(),j=Object(c["h"])("br",null,null,-1),O=Object(c["i"])(" LastName : "),r=Object(c["i"])(),s=Object(c["h"])("br",null,null,-1),o=Object(c["h"])("h2",null,"computed",-1),m=Object(c["h"])("h2",null,"component",-1),h=Object(c["h"])("h2",null,"data",-1),d=Object(c["h"])("h2",null,"function",-1),f=Object(c["h"])("h2",null,"for array",-1),v=Object(c["h"])("h2",null,"for object",-1),p=Object(c["h"])("h2",null,"htmlcontent",-1),g=["innerHTML"],H=Object(c["h"])("h2",null,"imgsrc",-1),y=["src"];function k(t,e,n,l,a,k){var x=Object(c["D"])("Text");return Object(c["v"])(),Object(c["g"])(c["a"],null,[i,u,Object(c["Q"])(Object(c["h"])("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.firstname=e})},null,512),[[c["M"],t.firstname]]),b,j,O,Object(c["Q"])(Object(c["h"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.lastname=e})},null,512),[[c["M"],t.lastname]]),r,s,Object(c["h"])("div",null,"My name is "+Object(c["H"])(t.firstname)+" "+Object(c["H"])(t.lastname),1),Object(c["h"])("div",null,"Using computed method : "+Object(c["H"])(k.getfullname),1),o,Object(c["h"])("div",null,"a: "+Object(c["H"])(t.a),1),Object(c["h"])("div",null,"aDouble: "+Object(c["H"])(k.aDouble),1),Object(c["h"])("div",null,"aPlus: "+Object(c["H"])(k.aPlus),1),m,Object(c["j"])(x,{title:"Text component",msg:t.lastname,data:t.todos},null,8,["msg","data"]),h,Object(c["h"])("div",null,Object(c["H"])(t.lastname),1),d,Object(c["h"])("div",null,Object(c["H"])(k.mydetails()),1),Object(c["h"])("button",{onClick:e[2]||(e[2]=function(){return k.onClick&&k.onClick.apply(k,arguments)})},"click"),f,(Object(c["v"])(!0),Object(c["g"])(c["a"],null,Object(c["B"])(t.todos,(function(t,e){return Object(c["v"])(),Object(c["g"])("li",{key:t.id},Object(c["H"])(t.name)+" - "+Object(c["H"])(e),1)})),128)),v,(Object(c["v"])(!0),Object(c["g"])(c["a"],null,Object(c["B"])(t.myObject,(function(t,e){return Object(c["v"])(),Object(c["g"])("li",{key:t},Object(c["H"])(e)+": "+Object(c["H"])(t),1)})),128)),p,Object(c["h"])("div",{innerHTML:t.htmlcontent},null,8,g),H,Object(c["h"])("img",{src:t.imgsrc,width:"300",height:"250"},null,8,y)],64)}var x=n("5c40"),w={class:"hello"},T=Object(c["h"])("h5",null,"setup",-1);function D(t,e,n,l,a,i){return Object(c["v"])(),Object(c["g"])("div",w,[Object(c["h"])("h5",null,"Title: "+Object(c["H"])(n.title),1),Object(c["h"])("div",null,"msg: "+Object(c["H"])(n.msg),1),(Object(c["v"])(!0),Object(c["g"])(c["a"],null,Object(c["B"])(n.data,(function(t,e){return Object(c["v"])(),Object(c["g"])("li",{key:t.id}," id: "+Object(c["H"])(t.id)+" - name: "+Object(c["H"])(t.name)+" - index: "+Object(c["H"])(e),1)})),128)),T,(Object(c["v"])(!0),Object(c["g"])(c["a"],null,Object(c["B"])(l.list,(function(t){return Object(c["v"])(),Object(c["g"])("li",{key:t},"item: "+Object(c["H"])(t),1)})),128))])}var J={name:"Text",props:{title:String,msg:String,data:Array},setup:function(){var t=Object(c["z"])([1,2,3]),e=Object(c["A"])([]);return Object(c["s"])((function(){e.value=[]})),{list:t,divs:e}}};J.render=D;var V=J,A={name:"Demo",components:{Text:V},setup:function(){return Object(x["A"])((function(){})),{lastname1:"Singh1"}},data:function(){return{a:2,lastname:"lastname1",firstname:"firstname1",address:"address1",todos:[{id:"1",name:"Learn JavaScript"},{id:"2",name:"Learn Vue.js"},{id:"3",name:"Build Something Awesome"}],htmlcontent:"<div><h1>Vue Js Template</h1></div>",myObject:{title:"How to do lists in Vue",author:"Jane Doe",publishedAt:"2020-03-22"},imgsrc:"./assets/logo.png"}},methods:{mydetails:function(){return this.aPlus=5,this.htmlcontent="<div><h1>Vue Js Template - ".concat(this.lastname,"</h1></div>"),"I am "+this.lastname},onClick:function(){alert("helo")}},computed:{aDouble:function(){return 2*this.a},aPlus:{get:function(){return this.a+1},set:function(t){this.a=t}},getfullname:function(){return this.firstname+" "+this.lastname}}};A.render=k;var B=A,L={name:"Index",components:{Example1:B,Example2:V},props:{}};n("af20");L.render=a;e["default"]=L},af20:function(t,e,n){"use strict";n("e9af")},e9af:function(t,e,n){}}]);
//# sourceMappingURL=chunk-d508967c.c76fe5eb.js.map