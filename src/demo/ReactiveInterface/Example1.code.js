import { parseCode } from "@/utils";

const code = `
<template>
  <div class="">
    <h3>
      1. VueJS provides options to add reactivity to properties, which are added
      dynamically. Consider that we have already created vue instance and need
      to add the watch property.
    </h3>

    <p style="font-size: 25px">Counter: {{ counter }}</p>
    <button @click="counter++" style="font-size: 25px">Click Me</button>

    <p style="font-size: 25px">products.id: {{ products.id }}</p>
    <button @click="products.id++" style="font-size: 25px">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "Example1",
  data: () => {
    const products = { id: 1, name: "book", price: "20.00" };
    return {
      counter: 1,
      products: products,
    };
  },
  created: function () {
    this.products.qty = "1";
    delete this.products.price;
  },
  mounted: function () {
    setTimeout(() => {
      this.counter = 20;
    }, 2000);
    console.log(this.products);
  },
  watch: {
    counter: function (nval, oval) {
      alert("Counter is incremented :" + oval + " to " + nval + "!");
    },
    "products.id": function (nval, oval) {
      alert("Counter is incremented :" + oval + " to " + nval + "!");
    },
  },
};
</script>

`;

export default parseCode(code);
