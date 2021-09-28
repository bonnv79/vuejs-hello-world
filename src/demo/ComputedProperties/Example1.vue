<template>
  <div class="">
    <h3>1. Let’s understand computed properties using an example.</h3>

    FirstName : <input type="text" v-model="firstname" /> <br />
    LastName : <input type="text" v-model="lastname" /> <br />
    <h1>My name is {{ firstname }} {{ lastname }}</h1>
    <h1>Using computed method : {{ getfullname }}</h1>
  </div>
</template>

<script>
export default {
  name: "Example1",
  data: () => {
    return {
      firstname: "",
      lastname: "",
    };
  },
  computed: {
    getfullname: function () {
      return this.firstname + " " + this.lastname;
    },
  },
};
</script>
