<template>
  <div class="">
    <h3>
      1. In this example, we are going to use the development verison of vuejs.
    </h3>

    <h1>{{ message }}</h1>
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
      message: "My first VueJS Task",
    };
  },
  methods: {},
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
