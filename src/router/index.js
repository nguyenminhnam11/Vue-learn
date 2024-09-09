import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Todo/Todo.vue'),
      name: 'Todo'
    },
    {
      path: '/weather',
      component: () => import('@/views/Weather/Weather.vue'),
      name: 'weather'
    },
    {
      path: '/calculator',
      component: () => import('@/views/Calculator/Calculator.vue'),
      name: 'calculator'
    }

  ]
})

export default router
