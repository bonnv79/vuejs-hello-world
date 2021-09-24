<template>
  <Example1 />
  <hr />
  <Example2 />
</template>

<script>
import Example1 from "./Demo.vue";
import Example2 from "./Text.vue";

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
hr {
  width: 100%;
}
</style>
