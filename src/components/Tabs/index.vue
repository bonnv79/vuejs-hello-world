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
    <span />
  </div>

  <div
    v-for="item in data"
    :key="item.id"
    class="tabcontent"
    v-show="item.id === actived"
  >
    <BlockCode :code="item.code">
      <component :is="item.component"></component>
    </BlockCode>
  </div>
</template>

<script>
import BlockCode from "@/components/BlockCode";

export default {
  name: "Tabs",
  components: {
    BlockCode,
  },
  props: {
    data: Array,
  },
  data: function () {
    let id = this.data && this.data[0] ? this.data[0].id : "";
    const { tab } = this.$route.query || {};

    return {
      actived: tab || id,
    };
  },
  methods: {
    onChangeTab: function (id) {
      this.actived = id;

      this.$router.push({
        path: this.$route.path,
        query: { tab: id },
      });
    },
  },
};
</script>

<style scoped>
.tab {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 5px;
}

.tab button {
  background-color: inherit;
  float: left;
  outline: none;
  cursor: pointer;
  padding: 6px 12px;
  transition: 0.3s;
  font-size: 0.9rem;
  border-radius: 6px 6px 0 0;
  border: none;
  border-bottom: 1px solid #d2d2d2;
  margin-top: 6px;
  border-color: #d2d2d2 !important;
}

.tab button:hover {
  background-color: #ddd;
}

.tab button.active {
  border: 1px solid #d2d2d2;
  border-bottom: none;
}

.tab span {
  flex: 1;
  border-bottom: 1px solid #d2d2d2;
}

.tabcontent {
  border-top: none;
}
</style>
