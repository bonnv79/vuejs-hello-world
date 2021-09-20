<template>
  <div class="root">
    <h3>5. Binding Inline Styles</h3>

    <h4>Basic</h4>
    isActive: <input type="number" v-model="fontSize" /> <br />
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
      {{ title }}
    </div>

    <h4>
      We can also do the same thing by assigning all the values to a variable
      and then assigning the variable to the div.
    </h4>
    <div v-bind:style="styleobj">{{ title }}</div>
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
      title: "Inline style Binding",
      activeColor: "red",
      fontSize: 12,
      styleobj: {
        color: "red",
        fontSize: "40px",
      },
    };
  },
  methods: {},
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
