import { parseCode } from "@/utils";

const code = `
<template>
  <div class="">
    <h3>
      1. Let us look at an example to understand what needs to be part of the
      Vue constructor.
    </h3>

    <h1>Title props: {{ title }}</h1>
    <h1>Firstname : {{ firstname }}</h1>
    <h1>Lastname : {{ lastname }}</h1>
    <h1>{{ mydetails() }}</h1>
  </div>
</template>

<script>
export default {
  name: "Example",
  props: {
    title: String,
  },
  data: () => {
    return {
      firstname: "Ria",
      lastname: "Singh",
      address: "Mumbai",
    };
  },
  methods: {
    mydetails: function () {
      return "I am " + this.firstname + " " + this.lastname;
    },
  },
};
</script>

`;

export default parseCode(code);
