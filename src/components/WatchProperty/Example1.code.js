import { parseCode } from "@/utils";

const code = `
<template>
  <div class="">
    <h3>
      Using an example, we will see we can use the Watch property in VueJS.
    </h3>

    Kilometers : <input type="text" v-model="kilometers" /> Meters :
    <input type="text" v-model="meters" />
  </div>
</template>

<script>
export default {
  name: "Example1",
  data: () => {
    return {
      kilometers: 0,
      meters: 0,
    };
  },
  watch: {
    kilometers: function (val) {
      this.kilometers = val;
      this.meters = val * 1000;
    },
    meters: function (val) {
      this.kilometers = val / 1000;
      this.meters = val;
    },
  },
};
</script>

`;

export default parseCode(code);
