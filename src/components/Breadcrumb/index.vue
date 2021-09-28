<template>
  <ul class="breadcrumb">
    <li v-for="(item, index) in data" :key="item.path">
      <router-link v-if="index < data.length - 1" :to="item.path">
        {{ item.name }}
      </router-link>

      <span v-else>{{ item.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Breadcrumb",
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
ul.breadcrumb {
  margin: 0;
  padding: 6px 0;
  list-style: none;
  border-bottom: 1px solid #eaecef;
}
ul.breadcrumb li {
  display: inline;
  font-size: 0.9rem;
}
ul.breadcrumb li + li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}
ul.breadcrumb li a {
  color: #0275d8;
  text-decoration: none;
}
ul.breadcrumb li a:hover {
  color: #01447e;
  text-decoration: underline;
}
</style>
