<template>
  <div class="">
    <h3>1. Conditional Rendering</h3>

    <h4>v-if</h4>
    <button v-on:click="showdata" v-bind:style="styleobj">Click Me</button>
    <br />
    <span>
      Show value: <b>{{ show }}</b></span
    >
    <div v-if="show">This is h1 tag</div>
    <div>This is h2 tag</div>

    <h4>v-else</h4>
    <button v-on:click="showdata" v-bind:style="styleobj">Click Me</button>
    <span>
      <b>{{ show }}</b>
    </span>
    <div v-if="show">This is h1 tag</div>
    <div v-else>This is h2 tag</div>

    <h4>v-show</h4>
    <button v-on:click="showdata" v-bind:style="styleobj">Click Me</button>
    <span>
      <b>{{ show }}</b>
    </span>
    <div v-if="show">This is h1 tag</div>
    <div v-else>This is h2 tag</div>
    <div v-show="show">
      <span>V-Show:</span>
      <img src="images/img.jpg" width="100" height="100" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Example",
  props: {},
  setup() {
    return {};
  },
  data: () => {
    return {
      show: true,
      styleobj: {
        backgroundColor: "#2196F3!important",
        cursor: "pointer",
        padding: "8px 16px",
        verticalAlign: "middle",
      },
    };
  },
  methods: {
    showdata: function () {
      this.show = !this.show;
    },
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
