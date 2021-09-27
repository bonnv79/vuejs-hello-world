<template>
  <h1>Vue.js</h1>

  <h2 class="title">
    What is Vue.js?
    <a
      href="https://v3.vuejs.org/guide/introduction.html#what-is-vue-js"
      target="_blank"
    >
      (link)
    </a>
  </h2>

  <div>
    Vue (pronounced /vjuː/, like view) is a progressive framework for building
    user interfaces. Unlike other monolithic frameworks, Vue is designed from
    the ground up to be incrementally adoptable. The core library is focused on
    the view layer only, and is easy to pick up and integrate with other
    libraries or existing projects. On the other hand, Vue is also perfectly
    capable of powering sophisticated Single-Page Applications when used in
    combination with modern tooling and supporting libraries (opens new window).
  </div>

  <h2 class="title">
    Installation CLI
    <a href="https://v3.vuejs.org/guide/installation.html#cli" target="_blank">
      (link)
    </a>
  </h2>

  <div>
    <code>yarn global add @vue/cli</code>
    <div class="marginTopBottom"># OR</div>
    <code>npm install -g @vue/cli</code>
  </div>

  <h2 class="title">
    Creating a Project
    <a
      href="https://cli.vuejs.org/guide/creating-a-project.html#vue-create"
      target="_blank"
    >
      (link)
    </a>
  </h2>

  <div>
    <code>vue create hello-world</code>
  </div>

  <h2 class="title">Run a Project</h2>

  <div>
    <code>npm run serve</code>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    data: Array,
  },
  setup() {
    return {};
  },
  data: () => {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style>
.title {
  border-bottom: 1px solid #eaecef;
  padding-bottom: 8px;
}

.marginTopBottom {
  margin: 8px;
}
</style>
