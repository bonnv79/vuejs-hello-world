<template>
  <ul>
    <li
      v-for="item in data"
      :key="item.path"
      :class="{
        dropdown: hasChildren(item),
        'router-link': true,
      }"
    >
      <router-link
        :class="{
          dropbtn: hasChildren(item),
          'router-link-exact-active':
            hasChildren(item) && checkActived(item.path),
        }"
        v-if="item.name"
        :to="item.to || item.path"
      >
        {{ item.name }}
      </router-link>

      <div
        v-if="hasChildren(item)"
        :class="['dropdown-content', 'router-link']"
      >
        <router-link
          v-for="subItem in item.children"
          :to="`${item.path}/${subItem.path}`"
          :key="subItem.path"
          v-show="subItem.name"
        >
          {{ subItem.name }}
        </router-link>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    data: Array,
  },
  setup() {
    return {};
  },
  data: () => {
    return {};
  },
  methods: {
    checkActived: function (url) {
      const { path } = this.$route || {};
      return path.includes(url);
    },
    hasChildren: function (item) {
      return Array.isArray(item.children) && item.children.length > 0;
    },
  },
  computed: {},
  watch: {},
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a,
.dropbtn {
  display: inline-block;
  color: #000000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover,
.dropdown:hover .dropbtn {
  background-color: #3eaf7c;
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
}

.dropdown-content a {
  color: black;
  padding: 8px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.router-link a.router-link-exact-active {
  color: #ffffff;
  background-color: #42b983;
}
</style>
