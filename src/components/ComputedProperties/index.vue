<template>
  <Tabs :data="tabs" />
</template>

<script>
import Example1 from "./Example1.vue";
import Example2 from "./Example2.vue";
import Example3 from "./Example3.vue";
import Example4 from "./Example4.vue";
import code1 from "./Example1.code";
import code2 from "./Example2.code";
import code3 from "./Example3.code";
import code4 from "./Example4.code";
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
          code: code1,
        },
        {
          id: "Example2",
          name: "Example2",
          component: <Example2 />,
          code: code2,
        },
        {
          id: "Example3",
          name: "Example3",
          component: <Example3 />,
          code: code3,
        },
        {
          id: "Example4",
          name: "Example4",
          component: <Example4 />,
          code: code4,
        },
      ],
    };
  },
};
</script>
