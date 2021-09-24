
<script>
import { h } from "vue";

export default {
  name: "Example",
  props: {
    elementtype: {
      attributes: String,
      required: true,
    },
  },
  render() {
    var a = this.elementtype.split(",");
    return h(
      a[0],
      {
        id: a[3],
        style: "color:" + a[1] + ";font-size:" + a[2] + "px;",
      },
      h(this.$slots.default)
    );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
