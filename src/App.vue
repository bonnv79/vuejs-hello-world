<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <h1 class="home-title">VueJS Hello World</h1>
  <div class="home-header">
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

  <div class="radio-list">
    <div v-for="item in list" :key="item.id" class="radio-item">
      <input
        type="radio"
        v-bind:id="item.id"
        v-bind:value="item.id"
        v-model="view"
      />
      <label v-bind:for="item.id">{{ item.name }}</label>
    </div>
  </div>

  <component v-bind:is="view"></component>

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
import pakageJson from "../package.json";

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
  },
  setup() {},
  data: () => {
    return {
      view: "Introduction",
      list: [
        // {
        //   id: "Demo",
        //   name: "Demo",
        // },
        {
          id: "Introduction",
          name: "Introduction",
        },
        {
          id: "Instances",
          name: "Instances",
        },
        {
          id: "Template",
          name: "Template",
        },
        {
          id: "Components",
          name: "Components",
        },
        {
          id: "ComputedProperties",
          name: "ComputedProperties",
        },
        {
          id: "WatchProperty",
          name: "WatchProperty",
        },
        {
          id: "Binding",
          name: "Binding",
        },
        {
          id: "Events",
          name: "Events",
        },
        {
          id: "Rendering",
          name: "Rendering",
        },
        {
          id: "TransitionAnimation",
          name: "TransitionAnimation",
        },
        {
          id: "Directives",
          name: "Directives",
        },
        {
          id: "Mixins",
          name: "Mixins",
        },
        {
          id: "RenderFunction",
          name: "RenderFunction",
        },
        {
          id: "ReactiveInterface",
          name: "ReactiveInterface",
        },
        {
          id: "Examples",
          name: "Examples",
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
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px;
}

.home-title {
  margin: 0;
  margin-bottom: 20px;
  font-size: 1.5rem;
  text-align: center;
}

.home-header {
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
  position: absolute;
  left: 20px;
  bottom: 10px;
}

.home-link-version {
}

.radio-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.radio-item {
  margin-right: 8px;
}
</style>
