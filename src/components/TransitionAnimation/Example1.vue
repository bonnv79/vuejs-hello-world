<template>
  <div class="">
    <h3>1. Transition</h3>

    <button v-on:click="show = !show">Click Me</button>
    <div>Show: {{ show }}</div>

    <transition name="fade">
      <p v-show="show" v-bind:style="styleobj">Animation Example - fade</p>
    </transition>

    <transition name="shiftx">
      <p v-show="show">Animation Example - shiftx</p>
    </transition>
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
        fontSize: "30px",
        color: "red",
      },
    };
  },
  methods: {},
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.shiftx-enter-active,
.shiftx-leave-active {
  transition: all 2s ease-in-out;
}
.shiftx-enter, .shiftx-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(100px);
}
</style>
