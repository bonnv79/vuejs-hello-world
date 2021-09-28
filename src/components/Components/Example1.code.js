import { parseCode } from "@/utils";

const code = `
<template>
  <div class="">
    <h3>
      1. Hence, we will extend the code, which we have already seen with data
      and methods.
    </h3>

    <div v-on:mouseover="changename()" v-on:mouseout="originalname()">
      Custom Component created by
      <span id="name" class="text">{{ name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Example",
  data: () => {
    return {
      name: "Ria",
    };
  },
  methods: {
    changename: function () {
      this.name = "Ben";
    },
    originalname: function () {
      this.name = "Ria";
    },
  },
};
</script>

<style scoped>
.text {
  font-weight: bold;
  color: red;
}
</style>

`;

export default parseCode(code);
