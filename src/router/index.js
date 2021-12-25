import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import produk from '../views/produk.vue'
import shopingcart from '../views/shopingcart.vue'
import sukses from '../views/sukses.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/produk',
    name: 'produk',
    component: produk
  },
  {
    path: '/cart',
    name: 'cart',
    component: shopingcart
  },
  {
    path: '/sukses',
    name: 'sukses',
    component: sukses
  },
]

const router = new VueRouter({
  routes
})

export default router
