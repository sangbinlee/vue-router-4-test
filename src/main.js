import './assets/main.css'
import './assets/common.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//////// @vuepic/vue-datepicker
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)

app.use(router)

//////// @vuepic/vue-datepicker
app.component('VueDatePicker', VueDatePicker)

app.mount('#app')
