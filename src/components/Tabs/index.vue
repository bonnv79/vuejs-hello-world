<template>
  <div class="tab">
    <button
      v-for="item in data"
      :key="item.id"
      :class="{ tablinks: true, active: item.id === actived }"
      v-on:click="onChangeTab(item.id)"
    >
      {{ item.name }}
    </button>
  </div>

  <div
    v-for="item in data"
    :key="item.id"
    class="tabcontent"
    v-show="item.id === actived"
  >
    <div v-is="item.component"></div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    data: Array,
  },
  data: function () {
    return {
      actived: this.data && this.data[0] ? this.data[0].id : "",
    };
  },
  methods: {
    onChangeTab: function (id) {
      this.actived = id;
    },
  },
};
</script>

<style scoped>
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  border-radius: 5px;
}

.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 6px 12px;
  transition: 0.3s;
  font-size: 0.9rem;
}

.tab button:hover {
  background-color: #ddd;
}

.tab button.active {
  background-color: #ccc;
}

.tabcontent {
  /* display: none; */
  /* padding: 6px 12px; */
  /* border: 1px solid #ccc; */
  border-top: none;
}
</style>
