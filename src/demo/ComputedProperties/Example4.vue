<template>
  <div class="">
    <h3>4. Get/Set in Computed Properties</h3>

    <input type="text" v-model="fullname" />
    <h1>{{ firstName }}</h1>
    <h1>{{ lastName }}</h1>
  </div>
</template>

<script>
export default {
  name: "Example4",
  data: () => {
    return {
      firstName: "Terry",
      lastName: "Ben",
    };
  },
  computed: {
    fullname: {
      get: function () {
        return this.firstName + " " + this.lastName;
      },
      set: function (name) {
        var fname = name.split(" ");
        this.firstName = fname[0];
        this.lastName = fname[1];
      },
    },
  },
};
</script>
