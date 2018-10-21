import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue(
    {
        methods: {
          changeAge(age){
            this.$emit('ageChange', age);
          }
        }
    }
);

Vue.config.keyCodes = {
    up: 38,
    down: 40,

    // ne raboti s tiah eventanp

};

new Vue({
  el: '#app',
  render: h => h(App)
})
