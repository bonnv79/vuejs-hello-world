<template>
  <button v-on:click="displayLanguage(item)">
    <span style="font-size: 25px">{{ item }}</span>
  </button>
</template>

<script>
export default {
  name: "Example",
  props: ["item"],
  data: () => {
    return {
      counter: 0,
    };
  },
  methods: {
    displayLanguage: function (lng) {
      console.log(lng);
      this.$emit("showlanguage", lng);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin-right: 8px;
}
</style>
