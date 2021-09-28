import { parseCode } from "@/utils";

const code = `
<template>
  <div class="">
    <h3>
      1. To understand this, let us consider an example and see the output in
      the browser.
    </h3>

    <h1>Firstname : {{ firstname }}</h1>
    <h1>Lastname : {{ lastname }}</h1>

    <div>
      No use v-html:
      <div>{{ htmlcontent }}</div>
    </div>
    <br />
    <div>
      Use v-html:
      <div v-html="htmlcontent"></div>
    </div>

    <img v-bind:src="imgsrc" width="300" height="250" />
  </div>
</template>

<script>
export default {
  name: "Example",
  data: () => {
    return {
      firstname: "Ria",
      lastname: "Singh",
      htmlcontent: "<div><h1>Vue Js Template</h1></div>",
      imgsrc: "./assets/logo.png",
    };
  },
};
</script>

`;

export default parseCode(code);
