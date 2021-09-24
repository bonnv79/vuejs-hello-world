<template>
  <div class="">
    <Example1 />
    <Example2 />
    <Example3 />
    <Example4 />
    <Example5 />
    <Example6 />
    <Example7 />
  </div>
</template>

<script>
import Example1 from "./Example1.vue";
import Example2 from "./Example2.vue";
import Example3 from "./Example3.vue";
import Example4 from "./Example4.vue";
import Example5 from "./Example5.vue";
import Example6 from "./Example6.vue";
import Example7 from "./Example7.vue";

export default {
  name: "Index",
  components: {
    Example1,
    Example2,
    Example3,
    Example4,
    Example5,
    Example6,
    Example7,
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
