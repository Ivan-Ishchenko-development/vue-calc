import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: require('./pages/Menu/Index').default,
      meta: { title: 'Calculator Options' }
    },
    {
      path: '/mortgage-calculator',
      component: require('./pages/Home/Index').default,
      meta: { title: 'Mortgage Calculator' }
    },
    {
      path: '/details',
      component: require('./pages/Details/Details').default,
      meta: { title: 'Mortgage Calculator' }
    },
    {
      path: '/table',
      component: require('./pages/Details/Table').default,
      meta: { title: 'Mortgage Calculator' }
    },
    {
      path: '/chart',
      component: require('./pages/Details/Chart').default,
    }

  ]
})
