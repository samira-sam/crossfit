
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Subscription from '../views/Subscription.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/Subscription', component: Subscription },
  { path: '/Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

