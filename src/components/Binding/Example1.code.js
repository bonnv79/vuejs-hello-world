import { parseCode } from "@/utils";

const code = `
<template>
  <div class="">
    <h3>
      1. Let’s consider an example to understand why we need and when to use
      v-bind directive for data binding.
    </h3>

    {{ title }}<br />
    <a href="hreflink" target="_blank"> Click Me no bind </a> <br />
    <a href="{{hreflink}}" target="_blank">Click Me no bind </a> <br />
    <a v-bind:href="hreflink" target="_blank">Click Me bind </a> <br />
  </div>
</template>

<script>
export default {
  name: "Example1",
  data: () => {
    return {
      title: "DATA BINDING",
      hreflink: "http://www.google.com",
    };
  },
};
</script>
`;

export default parseCode(code);
