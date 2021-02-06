import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Installation from '../views/Installation.vue'
import Usage from '../views/Usage.vue'
import Options from '../views/Options.vue'
import Browser from '../views/Browser.vue'
import Contact from '../views/Contact.vue'

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
  {
    path: '/options',
    name: 'Options',
    component: Options
  },
  {
    path: '/browser',
    name: 'Browser',
    component: Browser
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
