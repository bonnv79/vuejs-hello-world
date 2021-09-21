<template>
  <div class="">
    <Example1 title="Example1 title" />
    <Example2 title="Example1 title" titleChild="Example2 titleChild" />
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
h1,
h2,
h3 {
  font-size: 1rem;
}

h3 {
  background-color: rgb(197, 197, 197);
}

.root {
  padding: 0 !important;
}
</style>
