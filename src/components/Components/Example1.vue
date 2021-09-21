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
  props: {},
  setup() {
    return {};
  },
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
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
  font-weight: bold;
  color: red;
}
</style>
