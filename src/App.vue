<template>
  <div class="header">
    <div class="header-left">
      <img alt="Vue logo" src="./assets/logo.png" class="logo" />
      <span class="header-title">Vue.js</span>
    </div>
    <div class="header-right">
      <div class="nav">
        <div
          v-for="item in list"
          :key="item.path"
          :class="{
            'nav-item': true,
            actived: currentRoute === item.path,
          }"
          v-on:click="changePage(item.path)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>

  <div class="body">
    <div class="source-link">
      <a
        class="home-link"
        target="_blank"
        href="https://v3.vuejs.org/api/application-api.html"
        >application-api</a
      >
      <a
        class="home-link"
        target="_blank"
        href="https://www.tutorialspoint.com/vuejs/index.htm"
        >document</a
      >
      <a class="home-link" target="_blank" v-bind:href="getUrl()">source</a>
    </div>
    <div class="body-title">{{ ViewTitle }}</div>

    <component v-bind:is="ViewComponent"></component>
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
import Demo from "./components/Demo/Demo.vue";
import Introduction from "./components/Introduction";
import Instances from "./components/Instances";
import Template from "./components/Template";
import Components from "./components/Components";
import ComputedProperties from "./components/ComputedProperties";
import WatchProperty from "./components/WatchProperty";
import Binding from "./components/Binding";
import Events from "./components/Events";
import Rendering from "./components/Rendering";
import TransitionAnimation from "./components/TransitionAnimation";
import Directives from "./components/Directives";
import Mixins from "./components/Mixins";
import RenderFunction from "./components/RenderFunction";
import ReactiveInterface from "./components/ReactiveInterface";
import Examples from "./components/Examples";
import LifecycleHooks from "./components/LifecycleHooks";
import pakageJson from "../package.json";
import NotFound from "./components/NotFound.vue";

const routers = [
  // {
  //   path: "/Demo",
  //   name: "Demo",
  //   component: Demo,
  // },
  {
    path: "/Introduction",
    name: "Introduction",
    component: Introduction,
  },
  {
    path: "/Instances",
    name: "Instances",
    component: Instances,
  },
  {
    path: "/Template",
    name: "Template",
    component: Template,
  },
  {
    path: "/Components",
    name: "Components",
    component: Components,
  },
  {
    path: "/ComputedProperties",
    name: "ComputedProperties",
    component: ComputedProperties,
  },
  {
    path: "/WatchProperty",
    name: "WatchProperty",
    component: WatchProperty,
  },
  {
    path: "/Binding",
    name: "Binding",
    component: Binding,
  },
  {
    path: "/Events",
    name: "Events",
    component: Events,
  },
  {
    path: "/Rendering",
    name: "Rendering",
    component: Rendering,
  },
  {
    path: "/TransitionAnimation",
    name: "TransitionAnimation",
    component: TransitionAnimation,
  },
  {
    path: "/Directives",
    name: "Directives",
    component: Directives,
  },
  {
    path: "/Mixins",
    name: "Mixins",
    component: Mixins,
  },
  {
    path: "/RenderFunction",
    name: "RenderFunction",
    component: RenderFunction,
  },
  {
    path: "/ReactiveInterface",
    name: "ReactiveInterface",
    component: ReactiveInterface,
  },
  {
    path: "/Examples",
    name: "Examples",
    component: Examples,
  },
  {
    path: "/LifecycleHooks",
    name: "LifecycleHooks",
    component: LifecycleHooks,
  },
];

const routerPathToCompnent = {};

routers.forEach((item) => {
  routerPathToCompnent[item.path] = item.component;
});

export default {
  name: "App",
  components: {
    Demo,
    Introduction,
    Instances,
    Template,
    Components,
    ComputedProperties,
    WatchProperty,
    Binding,
    Events,
    Rendering,
    TransitionAnimation,
    Directives,
    Mixins,
    RenderFunction,
    ReactiveInterface,
    Examples,
    LifecycleHooks,
    NotFound,
  },
  setup() {},
  data: () => {
    let path = window.location.pathname;
    path = path === "/" ? routers[0].path : path;
    window.history.pushState("Page", "Title", path);

    return {
      currentRoute: path,
      list: routers,
    };
  },
  methods: {
    getUrl: (path = "") => {
      return `https://github.com/bonnv79/vuejs-hello-world/${path}`;
    },
    changePage: function (path) {
      window.history.pushState("Page", "Title", path);
      this.currentRoute = path;
    },
  },
  computed: {
    getVersion: function () {
      const version =
        pakageJson && pakageJson.version ? pakageJson.version : "1.0.0";
      return `v${version}`;
    },
    ViewComponent() {
      return routerPathToCompnent[this.currentRoute] || NotFound;
    },
    ViewTitle() {
      return routerPathToCompnent[this.currentRoute]
        ? `${this.currentRoute}`.replace("/", "")
        : "";
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
  padding: 10px 20px;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 1000;
  box-shadow: 0 0 1px rgb(0 0 0 / 25%);
}

.header-left {
  display: flex;
  align-items: center;
  padding-right: 20px;
}

.logo {
  width: 40px;
  height: 40px;
}

.header-title {
  font-size: 1.5em;
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

.body-title {
  padding: 10px 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.source-link {
  position: absolute;
  top: 10px;
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

.home-link-version {
}

.nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.nav-item {
  padding: 5px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  color: #8e8e8e;
}

.nav-item:hover {
  color: #303030;
}

.nav-item.actived {
  color: #009688;
}
</style>
