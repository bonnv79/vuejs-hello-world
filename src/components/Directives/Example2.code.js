import { parseCode } from "@/utils";

const code = `
<template>
  <div class="">
    <h3>2. Filters</h3>

    <div class="notify">
      Note: Filters are deprecated and replaced by computed
    </div>
  </div>
</template>

<script>
export default {
  name: "Example2",
};
</script>

<style scoped>
.notify {
  font-size: 1rem;
  color: red;
}
</style>

`;

export default parseCode(code);
