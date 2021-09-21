<template>
  <div class="">
    <h3>1. Click Event</h3>

    <h4>Event click.</h4>
    <button v-on:click="displaynumbers">Click ME</button>
    <div>Add Number 100 + 200 = {{ total }}</div>

    <h4>Event mouseover mouseout.</h4>
    <div
      v-bind:style="styleobj"
      v-on:mouseover="changebgcolor"
      v-on:mouseout="originalcolor"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Example",
  props: {
    title: String,
  },
  setup() {
    return {};
  },
  data: () => {
    return {
      num1: 100,
      num2: 200,
      total: "",
      styleobj: {
        width: "100px",
        height: "100px",
        backgroundColor: "red",
      },
    };
  },
  methods: {
    displaynumbers: function (event) {
      console.log(event);
      return (this.total = this.num1 + this.num2);
    },
    changebgcolor: function () {
      this.styleobj.backgroundColor = "green";
    },
    originalcolor: function () {
      this.styleobj.backgroundColor = "red";
    },
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
