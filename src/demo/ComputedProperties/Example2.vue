<template>
  <div class="">
    <h3>2. The difference between a method and a computed property.</h3>

    <h1 style="background-color: gray">
      Random No from computed property: {{ getrandomno }}
    </h1>
    <h1>Random No from method: {{ getrandomno1() }}</h1>
    <h1>Random No from method : {{ getrandomno1() }}</h1>
    <h1 style="background-color: gray">
      Random No from computed property: {{ getrandomno }}
    </h1>
    <h1 style="background-color: gray">
      Random No from computed property: {{ getrandomno }}
    </h1>
    <h1 style="background-color: gray">
      Random No from computed property: {{ getrandomno }}
    </h1>
    <h1>Random No from method: {{ getrandomno1() }}</h1>
    <h1>Random No from method: {{ getrandomno1() }}</h1>
  </div>
</template>

<script>
export default {
  name: "Example2",
  methods: {
    getrandomno1: function () {
      return Math.random();
    },
  },
  computed: {
    getrandomno: function () {
      return Math.random();
    },
  },
};
</script>