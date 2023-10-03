import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import InventoryView from '../views/InventoryView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'inventory',
    component: InventoryView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
