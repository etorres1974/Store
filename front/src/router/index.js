import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  /*
  {
    path: '/',
    name: 'home',
    component: Home
  }, */
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Vitrine.vue')
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
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  

]

const router = new VueRouter({
  routes
})

export default router
