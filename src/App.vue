<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->

  <div class="radio-list">
    <div v-for="(item, index) in list" :key="item.id" class="radio-item">
      <input
        type="radio"
        v-bind:id="item.id"
        v-bind:value="index"
        v-model="selected"
      />
      <label v-bind:for="item.id">{{ item.name }}</label>
    </div>
  </div>

  <div v-if="getSelectedId === 'Introduction'">
    <h1>Introduction</h1>
    <Introduction />
  </div>

  <div v-if="getSelectedId === 'ComputedProperties'">
    <h1>ComputedProperties</h1>
    <ComputedProperties />
  </div>

  <div v-if="getSelectedId === 'Demo'">
    <h1>Demo</h1>
    <Demo />
  </div>

  <div v-if="getSelectedId === 'WatchProperty'">
    <h1>WatchProperty</h1>
    <WatchProperty />
  </div>

  <div v-if="getSelectedId === 'Binding'">
    <h1>Binding</h1>
    <Binding />
  </div>
</template>

<script>
import Demo from "./components/Demo/Demo.vue";
import Introduction from "./components/Introduction";
import ComputedProperties from "./components/ComputedProperties";
import WatchProperty from "./components/WatchProperty";
import Binding from "./components/Binding";

export default {
  name: "App",
  components: {
    Demo,
    Introduction,
    ComputedProperties,
    WatchProperty,
    Binding,
  },
  setup() {},
  data: () => {
    return {
      hidden: {
        demo: true,
      },
      selected: 0,
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
      ],
    };
  },
  methods: {
    onClick: function () {},
  },
  computed: {
    getSelectedId() {
      return this.list[this.selected] && this.list[this.selected].id;
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
  /* text-align: center; */
}

.radio-list {
  display: flex;
}

.radio-item {
  margin-right: 8px;
}
</style>
