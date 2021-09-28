export const COMPONENT_CODES = {
  Introduction: {
    components: require.context(
      "@/demo/Introduction",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/demo/Introduction",
      false,
      /Example(\d).code.js$/
    )
  },
  Binding: {
    components: require.context(
      "@/demo/Binding",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/demo/Binding",
      false,
      /Example(\d).code.js$/
    )
  },
  Template: {
    components: require.context(
      "@/demo/Template",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/demo/Template",
      false,
      /Example(\d).code.js$/
    )
  },
  Components: {
    components: require.context(
      "@/demo/Components",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/demo/Components",
      false,
      /Example(\d).code.js$/
    )
  },
  ComputedProperties: {
    components: require.context(
      "@/demo/ComputedProperties",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/demo/ComputedProperties",
      false,
      /Example(\d).code.js$/
    )
  },
  WatchProperty: {
    components: require.context(
      "@/demo/WatchProperty",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/demo/WatchProperty",
      false,
      /Example(\d).code.js$/
    )
  },
  Events: {
    components: require.context(
      "@/demo/Events",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/demo/Events",
      false,
      /Example(\d).code.js$/
    )
  },
  Rendering: {
    components: require.context(
      "@/demo/Rendering",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/demo/Rendering",
      false,
      /Example(\d).code.js$/
    )
  },
  TransitionAnimation: {
    components: require.context(
      "@/demo/TransitionAnimation",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/demo/TransitionAnimation",
      false,
      /Example(\d).code.js$/
    )
  },
  Directives: {
    components: require.context(
      "@/demo/Directives",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/demo/Directives",
      false,
      /Example(\d).code.js$/
    )
  },
  Mixins: {
    components: require.context(
      "@/demo/Mixins",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/demo/Mixins",
      false,
      /Example(\d).code.js$/
    )
  },
  RenderFunction: {
    components: require.context(
      "@/demo/RenderFunction",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/demo/RenderFunction",
      false,
      /Example(\d).code.js$/
    )
  },
  ReactiveInterface: {
    components: require.context(
      "@/demo/ReactiveInterface",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/demo/ReactiveInterface",
      false,
      /Example(\d).code.js$/
    )
  },
  LifecycleHooks: {
    components: require.context(
      "@/demo/LifecycleHooks",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/demo/LifecycleHooks",
      false,
      /Example(\d).code.js$/
    )
  },
  Examples: {
    components: require.context(
      "@/demo/Examples",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/demo/Examples",
      false,
      /Example(\d).code.js$/
    )
  },
  Demo: {
    components: require.context(
      "@/demo/Demo",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/demo/Demo",
      false,
      /Example(\d).code.js$/
    )
  },
}