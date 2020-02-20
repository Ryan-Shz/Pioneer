/* global Vue */
import Router from 'vue-router'
import Home from '@/pages/Home'
import Topic from '@/pages/Topic'
import Category from '@/pages/Category'
import Shopping from '@/pages/Shopping'
import Personal from '@/pages/Personal'

Vue.use(Router)

export const router = new Router({
  routes: [
    { path: '/home', name: 'home', component: Home },
    { path: '/topic', name: 'topic', component: Topic },
    { path: '/category', name: 'category', component: Category },
    { path: '/shopping', name: 'shopping', component: Shopping },
    { path: '/personal', name: 'personal', component: Personal }
  ]
})
