<template>
  <div class="root">
    <h3>
      3. We can also pass class as an array. Let us take an example to
      understand this.
    </h3>

    isActive: <input type="checkbox" v-model="isActive" /> <br />
    isInfo: <input type="checkbox" v-model="isInfo" /> <br />
    hasError: <input type="checkbox" v-model="hasError" />

    <div
      v-bind:class="[
        isActive ? activeclass : '',
        hasError ? errorclass : '',
        isInfo ? infoclass : '',
      ]"
    >
      {{ title }}
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
      title: "This is class binding example",
      activeclass: "active",
      infoclass: "info",
      errorclass: "displayError",
      isActive: false,
      hasError: false,
      isInfo: false,
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
