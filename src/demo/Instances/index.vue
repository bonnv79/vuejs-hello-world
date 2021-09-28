<template>
  <Tabs :data="tabs" />
</template>

<script>
import Example1 from "./Example1.vue";
import Example2 from "./Example2.vue";
import code1 from "./Example1.code";
import code2 from "./Example2.code";
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
          component: <Example1 title="Example1 title" />,
          code: code1,
        },
        {
          id: "Example2",
          name: "Example2",
          component: (
            <Example2 title="Example1 title" titleChild="Example2 titleChild" />
          ),
          code: code2,
        },
      ],
    };
  },
};
</script>
