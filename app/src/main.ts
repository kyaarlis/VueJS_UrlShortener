import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { CAlert } from '@coreui/vue';
import '@coreui/coreui/dist/css/coreui.min.css'

createApp(App).component('c-alert', CAlert); 
createApp(App).mount('#app')
