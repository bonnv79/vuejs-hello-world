import { parseCode } from "@/utils";

const code = `
<template>
  <div class="root">
    <h3>
      7. We have used three modifiers in the example - trim, number, and lazy.
    </h3>

    <span>Enter Age:</span>
    <input v-model.number="age" type="number" />
    <h4>Display age : {{ age }}</h4>
    <br />
    <span>Enter Message:</span>
    <input v-model.lazy="msg" />
    <h4>Display Message : {{ msg }}</h4>
    <br />
    <span>Enter Message : </span><input v-model.trim="message" />
    <h4>Display Message : {{ message }}</h4>
  </div>
</template>

<script>
export default {
  name: "Example7",
  data: () => {
    return {
      age: 0,
      msg: "",
      message: "",
    };
  },
};
</script>

`;

export default parseCode(code);
