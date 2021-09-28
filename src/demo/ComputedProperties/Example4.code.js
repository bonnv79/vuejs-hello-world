import { parseCode } from "@/utils";

const code = `
<template>
  <BlockCode :code="code">
    <div class="">
      <h3>4. Get/Set in Computed Properties</h3>

      <input type="text" v-model="fullname" />
      <h1>{{ firstName }}</h1>
      <h1>{{ lastName }}</h1>
    </div>
  </BlockCode>
</template>

<script>
import BlockCode from "../BlockCode";
import code from "./Example4.code";
export default {
  name: "Example",
  components: { BlockCode },
  data: () => {
    return {
      firstName: "Terry",
      lastName: "Ben",
      code,
    };
  },
  computed: {
    fullname: {
      get: function () {
        return this.firstName + " " + this.lastName;
      },
      set: function (name) {
        var fname = name.split(" ");
        this.firstName = fname[0];
        this.lastName = fname[1];
      },
    },
  },
};
</script>

`;

export default parseCode(code);
