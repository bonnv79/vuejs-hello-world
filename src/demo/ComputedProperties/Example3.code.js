import { parseCode } from "@/utils";

const code = `
<template>
  <div class="">
    <h3>3. Get in Computed Properties</h3>

    <input type="text" v-model="fullname" />
    <h1>{{ firstName }}</h1>
    <h1>{{ lastName }}</h1>
  </div>
</template>

<script>
export default {
  name: "Example3",
  data: () => {
    return {
      firstName: "Terry",
      lastName: "Ben",
    };
  },
  computed: {
    fullname: {
      get: function () {
        return this.firstName + " " + this.lastName;
      },
    },
  },
};
</script>

`;

export default parseCode(code);
