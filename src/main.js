import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import router from './router/'

// Todo: Check to see if the import is correct
// * Might need to be from './router/index.js'
// ? But it won't work either way 

createApp(App).use(router).mount('#app')
