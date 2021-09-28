<template>
  <div class="root">
    <div class="left">
      <pre class="pre"><code class="code">{{code}}</code></pre>
    </div>
    <div class="right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockCode",
  props: {
    code: String,
  },
};
</script>

<style scoped>
.root {
  box-sizing: border-box;
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #c3c3c3;
  height: calc(100vh - 150px);
}

.root > div {
  width: 50%;
  box-sizing: border-box;
}

.right {
  padding: 0 15px;
  overflow-y: auto;
  height: 100%;
}

.pre {
  margin: 0;
  height: 100%;
}

.code {
  white-space: pre-wrap;
  border-radius: 0;
  height: 100%;
  overflow-y: auto;
}
</style>
