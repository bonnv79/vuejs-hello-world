import { parseCode } from "@/utils";

const code = `
<template>
  <div class="">
    <h3>
      1. We will create global directives similar to how we did for components.
    </h3>

    <h4>Register a local custom directive v-changestyle</h4>
    <div v-changestyle>VueJS Directive</div>

    <h4>Register a global custom directive v-pin</h4>
    <select v-model="direction">
      <option disabled value="">Please select one</option>
      <option>top</option>
      <option>left</option>
      <option>right</option>
      <option>bottom</option>
    </select>
    <div>direction: {{ direction }}</div>
    <input type="range" min="0" max="500" v-model="pinPadding" />
    <div class="pin-content">
      <p v-pin:[direction]="pinPadding">
        I am pinned onto the page at 200px to the left.
      </p>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "Example1",
  directives: {
    changestyle: {
      mounted(el) {
        el.style.color = "red";
        el.style.fontSize = "12px";
      },
    },
  },
  data: () => {
    return {
      direction: "right",
      pinPadding: 200,
    };
  },
};
</script>

<style scoped>
.pin-content {
  position: relative;
}
</style>

`;

export default parseCode(code);
