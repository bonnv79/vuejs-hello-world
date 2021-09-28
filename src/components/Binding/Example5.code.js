import { parseCode } from "@/utils";

const code = `
<template>
  <div class="root">
    <h3>5. Binding Inline Styles</h3>

    <h4>Basic</h4>
    isActive: <input type="number" v-model="fontSize" /> <br />
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
      {{ title }}
    </div>

    <h4>
      We can also do the same thing by assigning all the values to a variable
      and then assigning the variable to the div.
    </h4>
    <div v-bind:style="styleobj">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "Example5",
  data: () => {
    return {
      title: "Inline style Binding",
      activeColor: "red",
      fontSize: 12,
      styleobj: {
        color: "red",
        fontSize: "40px",
      },
    };
  },
};
</script>

`;

export default parseCode(code);
