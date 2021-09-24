<template>
  <div class="">
    <Example1 />
    <Example2 />
    <Example3 />
    <Example4 />
  </div>
</template>

<script>
import Example1 from "./Example1.vue";
import Example2 from "./Example2.vue";
import Example3 from "./Example3.vue";
import Example4 from "./Example4.vue";

export default {
  name: "Index",
  components: {
    Example1,
    Example2,
    Example3,
    Example4,
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
