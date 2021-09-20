<template>
  <div class="root">
    <h3>
      4. In the following example, we have added a class to the component
      template and also to the component.
    </h3>

    isActive: <input type="checkbox" v-model="isActive" /> <br />
    <new_component v-bind:class="{ active: isActive }"></new_component>
  </div>
</template>

<script>
import new_component from "./new_component.vue";

export default {
  name: "Example",
  props: {},
  components: {
    new_component,
  },
  setup() {
    return {};
  },
  data: () => {
    return {
      isActive: false,
    };
  },
  methods: {},
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: 10px 0;
  padding: 12px;
  font-size: 1rem;
}

.displayError {
  color: #d8000c;
  background-color: #ffbaba;
}

.info {
  color: #00529b;
  background-color: #bde5f8;
}

.active {
  color: #4f8a10;
  background-color: #dff2bf;
}
</style>
