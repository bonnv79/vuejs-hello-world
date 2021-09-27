<template>
  <div class="header">
    <router-link to="/" class="header-left">
      <img alt="Vue logo" src="./assets/logo.png" class="logo" />
      <span class="header-title">{{ title }}</span>
    </router-link>
    <div class="header-right">
      <NavBar v-bind:data="menuData" />
    </div>
  </div>

  <div class="body">
    <div class="source-link">
      <a
        v-for="item in links"
        :key="item.path"
        :href="item.path"
        class="home-link"
        target="_blank"
      >
        {{ item.name }}
      </a>
    </div>
    <div class="breadcrumb"><Breadcrumb :data="breadcrumbData" /></div>

    <router-view />
  </div>

  <div class="home-footer">
    <a
      class="home-link home-link-version"
      target="_blank"
      v-bind:href="getUrl('blob/master/README.md')"
      >{{ getVersion }}</a
    >
  </div>
</template>

<script>
import pakageJson from "../package.json";
import { routes } from "@/router/index.js";
import NavBar from "./components/NavBar";
import Breadcrumb from "./components/Breadcrumb";

export default {
  name: "App",
  components: {
    NavBar,
    Breadcrumb,
  },
  setup() {},
  data: function () {
    return {
      title: "Vue.js",
      menuData: routes,
      list: routes,
      links: [
        {
          path: "https://v3.vuejs.org/api/application-api.html",
          name: "application-api",
        },
        {
          path: "https://www.tutorialspoint.com/vuejs/index.htm",
          name: "document",
        },
        {
          path: this.getUrl(),
          name: "source",
        },
      ],
    };
  },
  methods: {
    getUrl: (path = "") => {
      return `https://github.com/bonnv79/vuejs-hello-world/${path}`;
    },
  },
  computed: {
    getVersion: function () {
      const version =
        pakageJson && pakageJson.version ? pakageJson.version : "1.0.0";
      return `v${version}`;
    },
    breadcrumbData() {
      const { matched } = this.$route || {};

      return matched;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 20px;
  position: sticky;
  top: 0;
  background-color: #dddddd;
  z-index: 1000;
  box-shadow: 0 0 1px rgb(0 0 0 / 25%);
}

.header-left {
  display: flex;
  align-items: center;
  padding-right: 20px;
  text-decoration: none;
}

.logo {
  width: 35px;
  height: 35px;
  margin-right: 5px;
}

.header-title {
  font-size: 1.3em;
  color: #273849;
  font-weight: 500;
}

.header-right {
  flex: 1;
  display: flex;
  align-items: center;
}

.body {
  position: relative;
  padding: 0 20px 20px 20px;
}

.body > .breadcrumb {
  border-bottom: 1px solid #eaecef;
}

.body-title {
  padding: 10px 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.source-link {
  position: absolute;
  top: 8px;
  right: 20px;
}

.home-link {
  margin: 5px;
  text-decoration: none;
  font-size: 12px;
}

.home-footer {
  position: fixed;
  left: 20px;
  bottom: 10px;
}
</style>
