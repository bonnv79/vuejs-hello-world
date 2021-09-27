<template>
  <div class="">
    <h3>Get in Computed Properties</h3>

    <input type="text" v-model="fullname" />
    <h1>{{ firstName }}</h1>
    <h1>{{ lastName }}</h1>
  </div>
</template>

<script>
export default {
  name: "Example",
  props: {},
  data: () => {
    return {
      firstName: "Terry",
      lastName: "Ben",
    };
  },
  methods: {},
  computed: {
    fullname: {
      get: function () {
        return this.firstName + " " + this.lastName;
      },
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
