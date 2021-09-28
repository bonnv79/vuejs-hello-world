<template>
  <div class="">
    <h3>
      2. When a mixin and a component contain overlapping options, they are
      merged as shown in the following example.
    </h3>

    <div>Title: {{ titleComponent }}</div>
    <div>Mixin Method: {{ mixinMethod() }}</div>
    <div>Component Method: {{ componentMethod() }}</div>
  </div>
</template>

<script>
const mixin = {
  created: function () {
    console.log("mixin called", this);
    this.titleComponent = "mixin called";
  },
  methods: {
    mixinMethod: function () {
      return "mixinMethod";
    },
  },
};

export default {
  name: "Example2",
  mixins: [mixin],
  data: () => {
    return {
      titleComponent: "Title Component",
    };
  },
  created: function () {
    console.log("component called", this);
    this.titleComponent = "component called";
  },
  methods: {
    componentMethod: function () {
      return "componentMethod";
    },
  },
};
</script>
