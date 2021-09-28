export const COMPONENT_CODES = {
  Introduction: {
    components: require.context(
      "@/components/Introduction",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/components/Introduction",
      false,
      /Example(\d).code.js$/
    )
  },
  Binding: {
    components: require.context(
      "@/components/Binding",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/components/Binding",
      false,
      /Example(\d).code.js$/
    )
  },
  Template: {
    components: require.context(
      "@/components/Template",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/components/Template",
      false,
      /Example(\d).code.js$/
    )
  },
  Components: {
    components: require.context(
      "@/components/Components",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/components/Components",
      false,
      /Example(\d).code.js$/
    )
  },
  ComputedProperties: {
    components: require.context(
      "@/components/ComputedProperties",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/components/ComputedProperties",
      false,
      /Example(\d).code.js$/
    )
  },
  WatchProperty: {
    components: require.context(
      "@/components/WatchProperty",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/components/WatchProperty",
      false,
      /Example(\d).code.js$/
    )
  },
  Events: {
    components: require.context(
      "@/components/Events",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/components/Events",
      false,
      /Example(\d).code.js$/
    )
  },
  Rendering: {
    components: require.context(
      "@/components/Rendering",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/components/Rendering",
      false,
      /Example(\d).code.js$/
    )
  },
  TransitionAnimation: {
    components: require.context(
      "@/components/TransitionAnimation",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/components/TransitionAnimation",
      false,
      /Example(\d).code.js$/
    )
  },
  Directives: {
    components: require.context(
      "@/components/Directives",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/components/Directives",
      false,
      /Example(\d).code.js$/
    )
  },
  Mixins: {
    components: require.context(
      "@/components/Mixins",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/components/Mixins",
      false,
      /Example(\d).code.js$/
    )
  },
  RenderFunction: {
    components: require.context(
      "@/components/RenderFunction",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/components/RenderFunction",
      false,
      /Example(\d).code.js$/
    )
  },
  ReactiveInterface: {
    components: require.context(
      "@/components/ReactiveInterface",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/components/ReactiveInterface",
      false,
      /Example(\d).code.js$/
    )
  },
  LifecycleHooks: {
    components: require.context(
      "@/components/LifecycleHooks",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/components/LifecycleHooks",
      false,
      /Example(\d).code.js$/
    )
  },
  Examples: {
    components: require.context(
      "@/components/Examples",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/components/Examples",
      false,
      /Example(\d).code.js$/
    )
  },
  Demo: {
    components: require.context(
      "@/components/Demo",
      false,
      /Example(\d).vue$/
    ),
    codes: require.context(
      "@/components/Demo",
      false,
      /Example(\d).code.js$/
    )
  },
}