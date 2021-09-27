<template>
  <div class="">
    <h3>
      Using an example, we will see we can use the Watch property in VueJS.
    </h3>

    Kilometers : <input type="text" v-model="kilometers" /> Meters :
    <input type="text" v-model="meters" />
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
      kilometers: 0,
      meters: 0,
    };
  },
  methods: {},
  computed: {},
  watch: {
    kilometers: function (val) {
      this.kilometers = val;
      this.meters = val * 1000;
    },
    meters: function (val) {
      this.kilometers = val / 1000;
      this.meters = val;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2,
h3 {
  margin: 0;
  font-size: 1rem;
}
</style>
