import { createApp } from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import router from './router'

createApp(App).use(router,Vuex).mount('#app')
