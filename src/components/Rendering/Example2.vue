<template>
  <div class="">
    <h3>2. List Rendering</h3>

    <h4>v-for</h4>
    <input
      type="text"
      v-on:keyup.enter="showinputvalue"
      v-bind:style="styleobj"
      placeholder="Enter Fruits Names"
      v-model="value"
    />
    <div v-if="items.length > 0">Display Fruits Name</div>
    <ul>
      <li v-for="(item, index) in items" v-bind:key="item">
        {{ index }} - {{ item }}
      </li>
    </ul>
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
      value: "",
      items: [],
      styleobj: {
        width: "30%",
        padding: "12px 20px",
        margin: "8px 0",
        boxSizing: "border-box",
      },
    };
  },
  methods: {
    showinputvalue: function (event) {
      this.items.push(event.target.value);
      this.value = "";
    },
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
