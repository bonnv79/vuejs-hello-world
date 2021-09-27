<template>
  <Tabs :data="tabs" />
</template>

<script>
import Example1 from "./Demo.vue";
import Example2 from "./Text.vue";
import Tabs from "@/components/Tabs";

export default {
  name: "Index",
  components: {
    Tabs,
  },
  data: function () {
    return {
      tabs: [
        {
          id: "Example1",
          name: "Example1",
          component: <Example1 />,
        },
        {
          id: "Example2",
          name: "Example2",
          component: <Example2 />,
        },
      ],
    };
  },
};
</script>
