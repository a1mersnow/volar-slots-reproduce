import { createApp } from 'vue'
import App from './App.vue'
import CompA from './components/CompA.vue'

const app = createApp(App)
app.component('comp-a', CompA)
app.mount('#app')
