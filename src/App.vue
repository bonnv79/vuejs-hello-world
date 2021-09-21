<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->

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
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px;
  /* text-align: center; */
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
