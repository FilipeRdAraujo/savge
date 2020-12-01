import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listagem',
    name: 'Listagem',

    component: () => import(/* webpackChunkName: "about" */ '../views/Listagem.vue')
  },
  {
    path: '/sobre',
    name: 'Sobre',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Sobre.vue')
  },
  {
    path: '/detalhe/:id',
    name: 'detalhe',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetalheLocal.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
