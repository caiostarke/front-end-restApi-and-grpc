import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/components/Home.vue'
import './index.css'

const routes = [
    {path: '/', component: Home},
    {path: '/book/:id', name: "getBook", component: () => import("@/components/Book.vue")}
]

// () => import('@/components/Home')

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
.use(router)
.mount('#app')
