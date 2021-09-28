<template>
  <div class="">
    <h3>2. Binding HTML Classes</h3>
    isActive: <input type="checkbox" v-model="isActive" /> hasError:
    <input type="checkbox" v-model="hasError" />
    <div
      v-bind:class="{
        title: true,
        info: true,
        active: isActive,
        displayError: hasError,
      }"
    >
      <b>{{ title }}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: "Example2",
  data: () => {
    return {
      title: "This is class binding example",
      isActive: false,
      hasError: false,
    };
  },
};
</script>

<style scoped>
.title {
  padding: 10px;
}

.info {
  color: #00529b;
  background-color: #bde5f8;
}

.active {
  color: #4f8a10;
  background-color: #dff2bf;
}

.displayError {
  color: #d8000c;
  background-color: #ffbaba;
}
</style>
