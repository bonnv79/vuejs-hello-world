(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d508967c"],{4364:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),l=Object(c["h"])("hr",null,null,-1);function a(t,e,n,a,u,i){var b=Object(c["E"])("Example1"),j=Object(c["E"])("Example2");return Object(c["w"])(),Object(c["g"])(c["a"],null,[Object(c["k"])(b),l,Object(c["k"])(j)],64)}n("b0c0");var u=Object(c["h"])("h2",null,"model",-1),i=Object(c["j"])(" FirstName : "),b=Object(c["j"])(),j=Object(c["h"])("br",null,null,-1),O=Object(c["j"])(" LastName : "),r=Object(c["j"])(),s=Object(c["h"])("br",null,null,-1),o=Object(c["h"])("h2",null,"computed",-1),m=Object(c["h"])("h2",null,"component",-1),h=Object(c["h"])("h2",null,"data",-1),d=Object(c["h"])("h2",null,"function",-1),f=Object(c["h"])("h2",null,"for array",-1),p=Object(c["h"])("h2",null,"for object",-1),g=Object(c["h"])("h2",null,"htmlcontent",-1),v=["innerHTML"],w=Object(c["h"])("h2",null,"imgsrc",-1),I=["src"];function k(t,e,n,l,a,k){var y=Object(c["E"])("Text");return Object(c["w"])(),Object(c["g"])(c["a"],null,[u,i,Object(c["R"])(Object(c["h"])("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.firstname=e})},null,512),[[c["N"],t.firstname]]),b,j,O,Object(c["R"])(Object(c["h"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.lastname=e})},null,512),[[c["N"],t.lastname]]),r,s,Object(c["h"])("div",null,"My name is "+Object(c["I"])(t.firstname)+" "+Object(c["I"])(t.lastname),1),Object(c["h"])("div",null,"Using computed method : "+Object(c["I"])(k.getfullname),1),o,Object(c["h"])("div",null,"a: "+Object(c["I"])(t.a),1),Object(c["h"])("div",null,"aDouble: "+Object(c["I"])(k.aDouble),1),Object(c["h"])("div",null,"aPlus: "+Object(c["I"])(k.aPlus),1),m,Object(c["k"])(y,{title:"Text component",msg:t.lastname,data:t.todos},null,8,["msg","data"]),h,Object(c["h"])("div",null,Object(c["I"])(t.lastname),1),d,Object(c["h"])("div",null,Object(c["I"])(k.mydetails()),1),Object(c["h"])("button",{onClick:e[2]||(e[2]=function(){return k.onClick&&k.onClick.apply(k,arguments)})},"click"),f,(Object(c["w"])(!0),Object(c["g"])(c["a"],null,Object(c["C"])(t.todos,(function(t,e){return Object(c["w"])(),Object(c["g"])("li",{key:t.id},Object(c["I"])(t.name)+" - "+Object(c["I"])(e),1)})),128)),p,(Object(c["w"])(!0),Object(c["g"])(c["a"],null,Object(c["C"])(t.myObject,(function(t,e){return Object(c["w"])(),Object(c["g"])("li",{key:t},Object(c["I"])(e)+": "+Object(c["I"])(t),1)})),128)),g,Object(c["h"])("div",{innerHTML:t.htmlcontent},null,8,v),w,Object(c["h"])("img",{src:t.imgsrc,width:"300",height:"250"},null,8,I)],64)}var y=n("5c40"),x={class:"hello"},T=Object(c["h"])("h5",null,"setup",-1);function C(t,e,n,l,a,u){return Object(c["w"])(),Object(c["g"])("div",x,[Object(c["h"])("h5",null,"Title: "+Object(c["I"])(n.title),1),Object(c["h"])("div",null,"msg: "+Object(c["I"])(n.msg),1),(Object(c["w"])(!0),Object(c["g"])(c["a"],null,Object(c["C"])(n.data,(function(t,e){return Object(c["w"])(),Object(c["g"])("li",{key:t.id}," id: "+Object(c["I"])(t.id)+" - name: "+Object(c["I"])(t.name)+" - index: "+Object(c["I"])(e),1)})),128)),T,(Object(c["w"])(!0),Object(c["g"])(c["a"],null,Object(c["C"])(l.list,(function(t){return Object(c["w"])(),Object(c["g"])("li",{key:t},"item: "+Object(c["I"])(t),1)})),128))])}var E={name:"Text",props:{title:String,msg:String,data:Array},setup:function(){var t=Object(c["A"])([1,2,3]),e=Object(c["B"])([]);return Object(c["t"])((function(){e.value=[]})),{list:t,divs:e}}};E.render=C;var J=E,V={name:"Demo",components:{Text:J},setup:function(){return Object(y["B"])((function(){})),{lastname1:"Singh1"}},data:function(){return{a:2,lastname:"lastname1",firstname:"firstname1",address:"address1",todos:[{id:"1",name:"Learn JavaScript"},{id:"2",name:"Learn Vue.js"},{id:"3",name:"Build Something Awesome"}],htmlcontent:"<div><h1>Vue Js Template</h1></div>",myObject:{title:"How to do lists in Vue",author:"Jane Doe",publishedAt:"2020-03-22"},imgsrc:"./assets/logo.png"}},methods:{mydetails:function(){return this.aPlus=5,this.htmlcontent="<div><h1>Vue Js Template - ".concat(this.lastname,"</h1></div>"),"I am "+this.lastname},onClick:function(){alert("helo")}},computed:{aDouble:function(){return 2*this.a},aPlus:{get:function(){return this.a+1},set:function(t){this.a=t}},getfullname:function(){return this.firstname+" "+this.lastname}}};V.render=k;var D=V,L={name:"Index",components:{Example1:D,Example2:J},props:{}};n("af20");L.render=a;e["default"]=L},af20:function(t,e,n){"use strict";n("e9af")},e9af:function(t,e,n){}}]);
//# sourceMappingURL=chunk-d508967c.6f0b690a.js.map