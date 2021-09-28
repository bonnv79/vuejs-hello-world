<template>
  <div class="">
    <h3>1. Component does provide something called as slots.</h3>

    <TestComponent>Hello Jai</TestComponent>
    <TestComponent>Hello Roy</TestComponent>
    <TestComponent>Hello Ria</TestComponent>
    <TestComponent>Hello Ben</TestComponent>
  </div>
</template>

<script>
import TestComponent from "./testcomponent.vue";

export default {
  name: "Example1",
  components: {
    TestComponent,
  },
};
</script>
