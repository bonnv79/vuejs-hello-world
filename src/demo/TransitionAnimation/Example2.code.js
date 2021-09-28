import { parseCode } from "@/utils";

const code = `
<template>
  <div class="">
    <h3>2. Animation</h3>

    <button v-on:click="show = !show">Click Me</button>
    <transition name="shiftx">
      <p v-show="show">Animation Example - shiftx</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Example2",
  data: () => {
    return {
      show: true,
    };
  },
};
</script>

<style scoped>
.shiftx-enter-active {
  animation: shift-in 2s;
}
.shiftx-leave-active {
  animation: shift-in 2s reverse;
}
@keyframes shift-in {
  0% {
    transform: rotateX(0deg);
  }
  25% {
    transform: rotateX(90deg);
  }
  50% {
    transform: rotateX(120deg);
  }
  75% {
    transform: rotateX(180deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}
</style>

`;

export default parseCode(code);
