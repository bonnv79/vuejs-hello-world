<template>
  <h1>vuejs-hello-world github</h1>

  <div>
    <h2 class="title">Clone project</h2>
    <code>git clone https://github.com/bonnv79/vuejs-hello-world.git</code>

    <h2 class="title">Go to Project</h2>
    <code>cd ./vuejs-hello-world</code>

    <h2 class="title">Project setup</h2>
    <code>npm install</code>

    <h2 class="title">Compiles and hot-reloads for development</h2>
    <code>npm run serve</code>

    <h2 class="title">Compiles and minifies for production</h2>
    <code>npm run build</code>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    data: Array,
  },
  setup() {
    return {};
  },
  data: () => {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style scoped>
</style>
