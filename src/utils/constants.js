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
  }
}