import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import NotFound from '../components/NotFound'
import Detail from '../components/Detail'
import Parent from '../components/Parent'


Vue.use(Router)

export default new Router({
mode: 'history',	
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, 
    {
      path: '/detail/:id',
      component: Detail,
      props: true
    },
    {
      path: '/parent',
      component: Parent
    }, 

    { path: '/a', redirect: { name: 'Hello' }},

    { path: '*',
      component: NotFound
    }
  ]
})
