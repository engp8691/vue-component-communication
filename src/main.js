import Vue from 'vue'
import App from './App.vue'

// The filter is alway defined before new Vue
Vue.filter('stringLength', (value) => {
    if(!value) return 0;
    value = value.toString();
    return `${value} (${value.length})`;
});

Vue.filter('capitalize', function (value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
})

new Vue({
  el: '#app',
  render: h => h(App)
})
