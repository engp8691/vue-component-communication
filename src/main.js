import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode){
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;
    console.log(binding);

    let delay = 0;
    if(binding.modifiers['delayed']){
      delay = 3000;
    }
    if(binding.arg == 'background'){
      setTimeout(()=>{
        el.style.backgroundColor = binding.value;
      }, delay);      
    }else{
      el.style.color = binding.value;
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
