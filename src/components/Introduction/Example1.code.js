import { parseCode } from "@/utils";

const code = `
<template>
  <BlockCode :code="code">
    <div class="">
      <h3>
        1. In this example, we are going to use the development verison of
        vuejs.
      </h3>

      <h1>{{ message }}</h1>
    </div>
  </BlockCode>
</template>

<script>
import BlockCode from "../BlockCode";
import code from "./Example1.code";

export default {
  name: "Example",
  components: {
    BlockCode,
  },
  data: function () {
    return {
      message: "My first VueJS Task",
      code,
    };
  },
};
</script>
`;

export default parseCode(code);
