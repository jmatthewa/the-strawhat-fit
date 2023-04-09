import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import store from './store'
import VueNumber from 'vue-number-animation'
import Vue3Autocounter from 'vue3-autocounter';


createApp(App).component('vue3-autocounter', Vue3Autocounter).use(VueNumber).use(store).use(router).use(MotionPlugin).mount('#app')
