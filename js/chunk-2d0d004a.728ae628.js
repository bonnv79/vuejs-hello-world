(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d004a"],{"65d9":function(e,t,r){"use strict";r.r(t);var n=r("7a23");function a(e,t,r,a,d,o){var c=Object(n["E"])("Tabs");return Object(n["w"])(),Object(n["e"])(c,{data:e.tabs},null,8,["data"])}var d={class:""},o=Object(n["h"])("h3",null," 1. All lifecycle hooks automatically have their this context bound to the instance, so that you can access data, computed properties, and methods. ",-1);function c(e,t,r,a,c,u){return Object(n["w"])(),Object(n["g"])("div",d,[o,Object(n["h"])("ul",null,[(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["C"])(e.renderOrder,(function(e){return Object(n["w"])(),Object(n["g"])("li",{key:e.id},Object(n["I"])(e.id),1)})),128))]),Object(n["h"])("button",{onClick:t[0]||(t[0]=function(){return u.addToCart&&u.addToCart.apply(u,arguments)})},"Add to cart"),Object(n["h"])("p",null,"Cart("+Object(n["I"])(e.cart)+")",1)])}var u=[],i=function(e,t){u.push({id:e}),console.log(e,t)},s=function(){u=[]},l={name:"Example",props:{},setup:function(){return{}},data:function(){return{renderOrder:u,cart:0,renderTracked:!1,renderTriggered:!1}},methods:{setRenderOrder:function(e,t){this.renderOrder.push({id:e}),console.log(e,t)},addToCart:function(){this.cart+=1}},beforeCreate:function(){s(),i("beforeCreate",this.$data)},created:function(){i("created",this.$data)},beforeMount:function(){i("beforeMount",this.$data)},mounted:function(){this.setRenderOrder("mounted",this.$data)},beforeUpdate:function(){this.setRenderOrder("beforeUpdate",this.$data)},updated:function(){console.log("updated",this.$data)},beforeUnmount:function(){this.setRenderOrder("beforeUnmount",this.$data)},unmounted:function(){this.setRenderOrder("unmounted",this.$data)},errorCaptured:function(e,t,r){return console.log("errorCaptured",e,t,r),!1},renderTracked:function(e){var t=e.key,r=e.target,n=e.type;this.renderTracked&&console.log("renderTracked",{key:t,target:r,type:n})},renderTriggered:function(e){var t=e.key,r=e.target,n=e.type;this.renderTriggered&&console.log("renderTriggered",{key:t,target:r,type:n})}};l.render=c;var b=l,f=r("74a9"),h={name:"Index",components:{Tabs:f["a"]},data:function(){return{tabs:[{id:"Example1",name:"Example1",component:Object(n["k"])(b,null,null)}]}}};h.render=a;t["default"]=h}}]);
//# sourceMappingURL=chunk-2d0d004a.728ae628.js.map