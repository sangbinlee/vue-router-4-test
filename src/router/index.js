import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import User from '../views/User.vue'

const nations = ['brazil', 'hawaii', 'jamaica', 'panama']
const paths = ['/', '/about', '/brazil', '/hawaii', '/jamaica', '/panama']
const names = ['home', 'about', 'brazil', 'hawaii', 'jamaica', 'panama']

const routes = []

names.forEach((nation, index) => {
  console.log(`nation=${nation} index=${index}`)
  const path = ''
  const name = nation
  let component = ''
  if (name === 'home' || name === 'about') {
    component = name.charAt(0).toUpperCase() + name.slice(1) + 'View' // AboutView
  } else {
    component = 'NationView' // AboutView
  }
  const route = {
    path: paths[index],
    name: names[index],
    component: () => import(`@/views/${component}.vue`),
    meta: { transition: 'slide-left' },
  }
  routes.push(route)
})
// routes.push({ path: '/users/:id', component: User })
routes.push({ path: '/users/:id', component: User, props: true })
console.log(`routes=${routes}`, routes)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView,
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: () => import('@/views/AboutView.vue'),
//   },
// ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length

  console.log('from.path', from.path)
  console.log('fromDepth', fromDepth)
  console.log('to.path', to.path)
  console.log('toDepth', toDepth)

  to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  console.log('to.meta.transition', to.meta.transition)
})

export default router
