<template>
  <Tabs :data="tabs" />
</template>

<script>
import Example1 from "./Example1.vue";
import Example2 from "./Example2.vue";
import Example3 from "./Example3.vue";
import Example4 from "./Example4.vue";
import Example5 from "./Example5.vue";
import Example6 from "./Example6.vue";
import Example7 from "./Example7.vue";
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
        {
          id: "Example3",
          name: "Example3",
          component: <Example3 />,
        },
        {
          id: "Example4",
          name: "Example4",
          component: <Example4 />,
        },
        {
          id: "Example5",
          name: "Example5",
          component: <Example5 />,
        },
        {
          id: "Example6",
          name: "Example6",
          component: <Example6 />,
        },
        {
          id: "Example7",
          name: "Example7",
          component: <Example7 />,
        },
      ],
    };
  },
};
</script>
