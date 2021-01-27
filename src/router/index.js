import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Installation from '../views/Installation.vue'
import Usage from '../views/Usage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/installation',
    name: 'Installation',
    component: Installation
  },
  {
    path: '/usage',
    name: 'Usage',
    component: Usage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
