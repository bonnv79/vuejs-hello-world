<template>
  <div class="hello">
    <h5>Title: {{ title }}</h5>
    <div>msg: {{ msg }}</div>
    <li v-for="(x, index) in data" :key="x.id">
      id: {{ x.id }} - name: {{ x.name }} - index: {{ index }}
    </li>

    <h5>setup</h5>
    <li v-for="item in list" :key="item">item: {{ item }}</li>
  </div>
</template>

<script>
import { ref, reactive, onBeforeUpdate } from "vue";

export default {
  name: "Text",
  props: {
    title: String,
    msg: String,
    data: Array,
  },
  setup() {
    const list = reactive([1, 2, 3]);
    const divs = ref([]);

    // make sure to reset the refs before each update
    onBeforeUpdate(() => {
      divs.value = [];
    });

    return {
      list,
      divs,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h5 {
  margin: 0;
}
</style>
