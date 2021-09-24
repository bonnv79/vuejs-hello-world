<template>
  <div class="">
    <h3>
      1. Component does provide something called as slots. Let’s make use of it
      and see if we get the desired results.
    </h3>

    <TestComponent>Hello Jai</TestComponent>
    <TestComponent>Hello Roy</TestComponent>
    <TestComponent>Hello Ria</TestComponent>
    <TestComponent>Hello Ben</TestComponent>
  </div>
</template>

<script>
import TestComponent from "./testcomponent.vue";

export default {
  name: "Example",
  props: {},
  components: {
    TestComponent,
  },
  setup() {
    return {};
  },
  data: () => {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
