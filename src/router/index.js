import { createRouter, createWebHistory } from 'vue-router'
import Forecast from '../views/Forecast.vue'
import App from '../App.vue'

// Todo: Figure out how get vue router working

const routes = [
    {
        path: '/',
        name: "Home",
        component: App
    },
    {
        path: '/forecast',
        name: "Forecast",
        component: Forecast
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router