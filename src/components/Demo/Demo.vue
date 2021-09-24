<template>
  <h2>model</h2>
  FirstName : <input type="text" v-model="firstname" /> <br />
  LastName : <input type="text" v-model="lastname" /> <br />
  <div>My name is {{ firstname }} {{ lastname }}</div>
  <div>Using computed method : {{ getfullname }}</div>

  <h2>computed</h2>
  <div>a: {{ a }}</div>
  <div>aDouble: {{ aDouble }}</div>
  <div>aPlus: {{ aPlus }}</div>

  <h2>component</h2>
  <Text title="Text component" :msg="lastname" :data="todos" />

  <h2>data</h2>
  <div>{{ lastname }}</div>

  <h2>function</h2>
  <div>
    {{ mydetails() }}
  </div>
  <button v-on:click="onClick">click</button>

  <h2>for array</h2>
  <li v-for="(x, index) in todos" :key="x.id">{{ x.name }} - {{ index }}</li>

  <h2>for object</h2>
  <li v-for="(value, name) in myObject" :key="value">
    {{ name }}: {{ value }}
  </li>

  <h2>htmlcontent</h2>
  <div v-html="htmlcontent"></div>

  <h2>imgsrc</h2>
  <img v-bind:src="imgsrc" width="300" height="250" />
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import Text from "./Text.vue";

export default {
  name: "Demo",
  components: {
    Text,
  },
  setup() {
    // (props, context)
    // console.log(props, context);

    onMounted(() => {
      // console.log("Component is mounted!");
    });

    return {
      lastname1: "Singh1",
    };
  },
  data: () => {
    return {
      a: 2,
      lastname: "lastname1",
      firstname: "firstname1",
      address: "address1",
      todos: [
        { id: "1", name: "Learn JavaScript" },
        { id: "2", name: "Learn Vue.js" },
        { id: "3", name: "Build Something Awesome" },
      ],
      htmlcontent: "<div><h1>Vue Js Template</h1></div>",
      myObject: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2020-03-22",
      },
      imgsrc: "./assets/logo.png",
    };
  },
  methods: {
    mydetails: function () {
      this.aPlus = 5;
      this.htmlcontent = `<div><h1>Vue Js Template - ${this.lastname}</h1></div>`;

      return "I am " + this.lastname;
    },
    onClick: () => {
      alert("helo");
    },
  },
  computed: {
    aDouble() {
      return this.a * 2;
    },
    aPlus: {
      get() {
        return this.a + 1;
      },
      set(v) {
        this.a = v;
      },
    },
    getfullname() {
      return this.firstname + " " + this.lastname;
    },
  },
};
</script>

<style scoped>
</style>
