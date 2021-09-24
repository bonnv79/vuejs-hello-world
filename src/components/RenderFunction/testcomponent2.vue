<template>
  <h1><slot></slot></h1>
</template>

<script>
export default {
  name: "Example",
  props: {
    elementtype: {
      attributes: String,
      required: true,
    },
  },
  render: function (createElement) {
    var a = this.elementtype.split(",");
    return createElement(
      a[0],
      {
        attrs: {
          id: a[3],
          style: "color:" + a[1] + ";font-size:" + a[2] + ";",
        },
      },
      this.$slots.default
    );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
