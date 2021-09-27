import { parseCode } from "@/utils";

const code = `
<template>
  <BlockCode :code="code">
    <div class="">
      <h3>2. Extends Example1</h3>

      <h1>Parent</h1>
      <div>Title props: {{ title }}</div>
      <div>Firstname : {{ firstname }}</div>
      <div>Lastname : {{ lastname }}</div>
      <div>{{ mydetails() }}</div>

      <h1>Current</h1>

      <div>Title child props: {{ titleChild }}</div>
      <div>Firstname : {{ firstname1 }}</div>
      <div>Lastname : {{ lastname1 }}</div>
      <div>{{ getData() }}</div>
    </div>
  </BlockCode>
</template>

<script>
import Example1 from "./Example1.vue";
import BlockCode from "../BlockCode";
import code from "./Example2.code";

export default {
  name: "Example",
  components: {
    BlockCode,
  },
  extends: Example1,
  props: ["titleChild"],
  data: () => {
    return {
      firstname1: "Ria2",
      lastname1: "Singh2",
      address1: "Mumbai2",
      code,
    };
  },
  methods: {
    getData() {
      return this.firstname1 + " " + this.lastname1 + " " + this.address1;
    },
  },
};
</script>
`;

export default parseCode(code);
