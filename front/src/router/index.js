import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/vitrine',
    name: 'vitrine',
    component: () => import('../views/Vitrine.vue')
  },
  {
    path: '/venda',
    name: 'venda',
    component: () => import('../views/Venda.vue')
  },
  

]

const router = new VueRouter({
  routes
})

export default router
