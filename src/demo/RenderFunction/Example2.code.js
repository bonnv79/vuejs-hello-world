import { parseCode } from "@/utils";

const code = `
<template>
  <div class="">
    <h3>
      2. Render function helps make the component dynamic and use the way it is
      required by keeping it common and helping pass arguments using the same
      component.
    </h3>

    <TestComponent v-bind:elementtype="elementtype">
      <span>Hello Jai</span>
    </TestComponent>
    <TestComponent elementtype="h3,green,25,h3tag">Hello Roy</TestComponent>
    <TestComponent elementtype="p,blue,25,ptag">Hello Ria</TestComponent>
    <TestComponent elementtype="div,green,25,divtag">Hello Ben</TestComponent>
  </div>
</template>

<script>
import TestComponent from "./testcomponent2.vue";

export default {
  name: "Example2",
  components: {
    TestComponent,
  },
  data: () => {
    return {
      elementtype: "div,red,25,div1",
    };
  },
};
</script>

`;

export default parseCode(code);
