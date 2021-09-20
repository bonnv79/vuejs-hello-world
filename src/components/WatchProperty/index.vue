<template>
  <div class="">
    <h3>
      Using an example, we will see we can use the Watch property in VueJS.
    </h3>
    <Example1 />
  </div>
</template>

<script>
import Example1 from "./Example1.vue";

export default {
  name: "WatchProperty",
  components: {
    Example1,
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
