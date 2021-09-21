<template>
  <div class="">
    <h3>2. Event Modifiers</h3>

    <button v-on:click.once="buttonclickedonce" v-bind:style="styleobj">
      Click Once
    </button>
    Output: {{ clicknum }} <br /><br />
    <button v-on:click="buttonclicked" v-bind:style="styleobj">Click Me</button>
    Output: {{ clicknum1 }} <br /><br />
    <a
      href="http://www.google.com"
      v-on:click="clickme"
      target="_blank"
      v-bind:style="styleobj"
      >Click Me</a
    >
    <a
      href="http://www.google.com"
      v-on:click.prevent="clickme"
      target="_blank"
      v-bind:style="styleobj"
      >Click Me prevent</a
    >
  </div>
</template>

<script>
export default {
  name: "Example",
  props: {
    title: String,
  },
  data: () => {
    return {
      clicknum: 0,
      clicknum1: 0,
      styleobj: {
        backgroundColor: "#2196F3!important",
        cursor: "pointer",
        padding: "8px 16px",
        verticalAlign: "middle",
      },
    };
  },
  methods: {
    buttonclickedonce: function () {
      this.clicknum++;
    },
    buttonclicked: function () {
      this.clicknum1++;
    },
    clickme: function () {
      alert("Anchor tag is clicked");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
