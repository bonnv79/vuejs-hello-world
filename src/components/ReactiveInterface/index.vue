<template>
  <div class="">
    <Example1 />
  </div>
</template>

<script>
import Example1 from "./Example1.vue";

export default {
  name: "Index",
  components: {
    Example1,
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
