<template>
  <Tabs :data="TabsData" />
</template>

<script>
import Tabs from "@/components/Tabs";
import { getTabs } from "@/utils";

export default {
  name: "TabsTemplate",
  components: {
    Tabs,
  },
  setup: function () {
    return {
      name: "TabsTemplate",
    };
  },
  computed: {
    TabsData: function () {
      return getTabs(this.name);
    },
  },
};
</script>
