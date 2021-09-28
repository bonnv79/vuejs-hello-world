<template>
  <div class="root">
    <h3>4. Custom Events</h3>

    <p style="font-size: 25px">
      Language displayed : <b>{{ languageclicked }}</b>
    </p>
    <ButtonCounter
      v-for="(item, index) in languages"
      v-bind:item="item"
      v-bind:index="index"
      v-on:showlanguage="languagedisp"
      v-bind:key="item"
    ></ButtonCounter>
  </div>
</template>

<script>
import ButtonCounter from "./button-counter.vue";

export default {
  name: "Example4",
  components: {
    ButtonCounter,
  },
  data: () => {
    return {
      languageclicked: "",
      languages: [
        "Java",
        "PHP",
        "C++",
        "C",
        "Javascript",
        "C#",
        "Python",
        "HTML",
      ],
    };
  },
  methods: {
    languagedisp: function (a) {
      this.languageclicked = a;
    },
  },
};
</script>
