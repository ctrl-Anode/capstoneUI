import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Create Vue app
const app = createApp(App);

// Use router
app.use(router);

// Mount app
app.mount('#app');

// Register global error handler
app.config.errorHandler = (err, vm, info) => {
  console.error('Global error:', err);
  console.error('Error info:', info);
};

// Register global warning handler
app.config.warnHandler = (msg, vm, trace) => {
  console.warn('Global warning:', msg);
  console.warn('Warning trace:', trace);
};

// Custom directive for auto-focus
app.directive('focus', {
  mounted: (el) => el.focus()
});

// Custom directive for click-outside
app.directive('click-outside', {
  mounted: (el, binding) => {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted: (el) => {
    document.removeEventListener('click', el.clickOutsideEvent);
  }
});

// Custom directive for tooltip
app.directive('tooltip', {
  mounted: (el, binding) => {
    el.setAttribute('title', binding.value);
    el.style.position = 'relative';
    el.style.cursor = 'pointer';
  }
});

// Global properties
app.config.globalProperties.$formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

app.config.globalProperties.$formatNumber = (number, decimals = 2) => {
  return Number(number).toFixed(decimals);
};

// Performance monitoring
if (process.env.NODE_ENV === 'development') {
  app.config.performance = true;
}
