<template>
  <div class="">
    <h3>
      2. Render function helps make the component dynamic and use the way it is
      required by keeping it common and helping pass arguments using the same
      component.
    </h3>

    <TestComponent :elementtype="'div,red,25,div1'">Hello Jai</TestComponent>
    <TestComponent :elementtype="'h3,green,25,h3tag'">Hello Roy</TestComponent>
    <TestComponent :elementtype="'p,blue,25,ptag'">Hello Ria</TestComponent>
    <TestComponent :elementtype="'div,green,25,divtag'"
      >Hello Ben</TestComponent
    >
  </div>
</template>

<script>
import TestComponent from "./testcomponent2.vue";

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
