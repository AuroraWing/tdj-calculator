import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../App.vue'),
        children: [{
            path: '/',
            name: 'Main',
            component: () => import('../views/Main.vue'),
            children: [{
                path: '/welcome',
                name: 'welcome',
                component: () => import('../views/home/welcome.vue')
            },
            {
                path: '/calculator',
                name: 'calculator',
                component: () => import('../views/calculator/calculator.vue')
            }]
        }]
    }
]

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes
})
export default router