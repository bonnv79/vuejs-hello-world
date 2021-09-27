<template>
  <div class="">
    <Example1 />
    <Example2 />
  </div>
</template>

<script>
import Example1 from "./Example1.vue";
import Example2 from "./Example2.vue";

export default {
  name: "Index",
  components: {
    Example1,
    Example2,
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
