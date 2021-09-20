<template>
  <div class="">
    <h3>Let’s understand computed properties using an example.</h3>
    <Example1 />

    <h3>The difference between a method and a computed property.</h3>
    <Example2 />

    <h3>Get in Computed Properties</h3>
    <Example3 />

    <h3>Get/Set in Computed Properties</h3>
    <Example4 />
  </div>
</template>

<script>
import Example1 from "./Example1.vue";
import Example2 from "./Example2.vue";
import Example3 from "./Example3.vue";
import Example4 from "./Example4.vue";

export default {
  name: "ComputedProperties",
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
<style scoped>
h1,
h2,
h3 {
  margin: 20px 0 10px 0;
}

h3 {
  background-color: rgb(197, 197, 197);
}
</style>
