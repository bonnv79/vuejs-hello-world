<template>
  <div class="">
    <h3>2. View Example1</h3>

    <div class="component">
      <component v-bind:is="view"></component>
    </div>
  </div>
</template>

<script>
import Example1 from "./Example1.vue";

export default {
  name: "Example",
  components: { Example1 },
  props: {},
  data: () => {
    return {
      view: "Example1",
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.component {
  padding: 0 20px;
}
</style>
