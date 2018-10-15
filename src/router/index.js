import Vue from 'vue'
import Router from 'vue-router'
import Ranking from '@/views/ranking'
import Recommend from '@/views/recommend'
import Search from  '@/views/search'
import Singer from  '@/views/singer'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/recommend'
    },   
    {
      path:'/ranking',
      component:Ranking
    },
    {
      path:'/recommend',
      component:Recommend
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/singer',
      component:Singer
    }
  ]
})
