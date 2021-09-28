<template>
  <div class="">
    <h3>
      1. All lifecycle hooks automatically have their this context bound to the
      instance, so that you can access data, computed properties, and methods.
    </h3>

    <ul>
      <li v-for="item in renderOrder" v-bind:key="item.id">{{ item.id }}</li>
    </ul>

    <button v-on:click="addToCart">Add to cart</button>
    <p>Cart({{ cart }})</p>
  </div>
</template>

<script>
let renderOrder = [];
const setRenderOrder = (id, log) => {
  renderOrder.push({
    id,
  });
  console.log(id, log);
};
const resetRenderOrder = () => {
  renderOrder = [];
};

export default {
  name: "Example1",
  props: {},
  setup() {
    return {};
  },
  data: () => {
    return {
      renderOrder,
      cart: 0,
      renderTracked: false,
      renderTriggered: false,
    };
  },
  methods: {
    setRenderOrder: function (id, log) {
      this.renderOrder.push({
        id,
      });

      console.log(id, log);
    },
    addToCart() {
      this.cart += 1;
    },
  },
  beforeCreate: function () {
    resetRenderOrder();

    setRenderOrder("beforeCreate", this.$data);
  },
  created: function () {
    setRenderOrder("created", this.$data);
  },
  beforeMount: function () {
    setRenderOrder("beforeMount", this.$data);
  },
  mounted: function () {
    this.setRenderOrder("mounted", this.$data);
  },
  beforeUpdate: function () {
    this.setRenderOrder("beforeUpdate", this.$data);
  },
  updated: function () {
    console.log("updated", this.$data);
  },
  // activated: function () {
  //   this.setRenderOrder("activated", this.$data);
  // },
  // deactivated: function () {
  //   this.setRenderOrder("deactivated", this.$data);
  // },
  beforeUnmount: function () {
    this.setRenderOrder("beforeUnmount", this.$data);
  },
  unmounted: function () {
    this.setRenderOrder("unmounted", this.$data);
  },
  errorCaptured: function (err, instance, info) {
    console.log("errorCaptured", err, instance, info);
    return false;
  },
  renderTracked({ key, target, type }) {
    if (this.renderTracked) {
      console.log("renderTracked", { key, target, type });
    }
  },
  renderTriggered({ key, target, type }) {
    if (this.renderTriggered) {
      console.log("renderTriggered", { key, target, type });
    }
  },
};
</script>
