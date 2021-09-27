<template>
  <div class="">
    <h3>Let’s understand computed properties using an example.</h3>

    FirstName : <input type="text" v-model="firstname" /> <br />
    LastName : <input type="text" v-model="lastname" /> <br />
    <h1>My name is {{ firstname }} {{ lastname }}</h1>
    <h1>Using computed method : {{ getfullname }}</h1>
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
      firstname: "",
      lastname: "",
    };
  },
  methods: {},
  computed: {
    getfullname: function () {
      return this.firstname + " " + this.lastname;
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
