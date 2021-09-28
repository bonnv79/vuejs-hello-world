<template>
  <div class="root">
    <h3>4. Transition at the Initial Render</h3>

    <transition
      appear
      appear-class="custom-appear-class"
      appear-active-class="animated bounceIn"
    >
      <h1>BounceIn - Animation Example</h1>
    </transition>
    <transition
      appear
      appear-class="custom-appear-class"
      appear-active-class="animated swing"
    >
      <h1>Swing - Animation Example</h1>
    </transition>
    <transition
      appear
      appear-class="custom-appear-class"
      appear-active-class="animated rubberBand"
    >
      <h1>RubberBand - Animation Example</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Example4",
  data: () => {
    return {
      show: true,
    };
  },
};
</script>
