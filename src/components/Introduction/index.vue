<template>
  <Tabs :data="tabs" />
</template>

<script>
import Example1 from "./Example1.vue";
import Tabs from "@/components/Tabs";

export default {
  name: "Index",
  components: {
    Tabs,
  },
  props: {},
  data: function () {
    return {
      tabs: [
        {
          id: "Example1",
          name: "Example1",
          component: <Example1 />,
        },
      ],
    };
  },
};
</script>
