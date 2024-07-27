import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import axios from 'axios'

const app = createApp(App)
const pinia = createPinia()

app.config.globalProperties.$http = axios
app.use(router)
app.use(pinia)

app.mount('#app')

