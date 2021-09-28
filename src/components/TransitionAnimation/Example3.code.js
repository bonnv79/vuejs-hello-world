import { parseCode } from "@/utils";

const code = `
<template>
  <div class="root">
    <h3>3. Custom Transition Classes</h3>

    <button @click="show = !show">
      <span style="font-size: 25px">Animate</span>
    </button>

    <transition
      name="custom-classes-transition"
      enter-active-class="animated swing"
      leave-active-class="animated bounceIn"
    >
      <p v-if="show"><span style="font-size: 25px">Example</span></p>
    </transition>
  </div>
</template>

<script>
// <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
export default {
  name: "Example3",
  data: () => {
    return {
      show: true,
    };
  },
};
</script>
`;

export default parseCode(code);
