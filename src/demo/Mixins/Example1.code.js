import { parseCode } from "@/utils";

const code = `
<template>
  <div class="">
    <h3>1. Mixins are basically to be used with components.</h3>

    <div>{{ title }}</div>
    <div>{{ getTitle }}</div>
  </div>
</template>

<script>
const myMixin = {
  created: function () {
    this.startmixin();
  },
  methods: {
    startmixin: function () {
      this.title = "Welcome  to mixin example";
    },
  },
  data: () => {
    return {
      title: "",
    };
  },
  computed: {
    getTitle() {
      return "Get title: " + this.title;
    },
  },
};

export default {
  name: "Example1",
  mixins: [myMixin],
};
</script>

`;

export default parseCode(code);
