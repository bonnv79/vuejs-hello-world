import { createApp } from 'vue'
import App from './App.vue';

const app = createApp(App);

// Register a global custom directive called `v-focus`
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

app.directive('pin', {
  mounted(el, binding) {
    el.style.position = 'fixed';

    const s = binding.arg || 'top';
    el.style[s] = binding.value + 'px';
  },
  updated(el, binding) {
    const s = binding.arg || 'top';

    el.style.top = 'unset';
    el.style.left = 'unset';
    el.style.right = 'unset';
    el.style.bottom = 'unset';

    el.style[s] = binding.value + 'px';
  }
})

app.mount('#app')
