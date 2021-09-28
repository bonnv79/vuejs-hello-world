import { parseCode } from "@/utils";

const code = `
<template>
  <div class="root">
    <h3>3.Event - Key Modifiers</h3>

    <h4>keyup.enter</h4>
    <input
      type="text"
      v-on:keyup.enter="showinputvalue"
      v-bind:style="styleobj"
      placeholder="Enter your name"
    />
    <div>Value: {{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "Example",
  data: () => {
    return {
      name: "",
      styleobj: {
        width: "30%",
        padding: "12px 20px",
        margin: "8px 0",
        boxSizing: "border-box",
      },
    };
  },
  methods: {
    showinputvalue: function (event) {
      this.name = event.target.value;
    },
  },
};
</script>

`;

export default parseCode(code);
