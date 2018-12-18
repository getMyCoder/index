import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import show from '@/components/show'
import project from '@/components/project'
import PlugUnit from '@/components/PlugUnit'
import other from '@/components/other'
import AddPro from '@/components/AddPro'
import all from '@/components/show/all'
import DocumentNotes from '@/components/show/DocumentNotes'
import EngineLink from '@/components/show/EngineLink'
import Favorites from '@/components/show/Favorites'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {path:'/',component:show},
        {path:'/Home/project',component:project},
        {path:'/Home/PlugUnit',component:PlugUnit},
        {path:'/Home/other',component:other},
        {path:'/Home/AddPro',component:AddPro},
        {path:'/Home/all',component:all},
        {path:'/Home/DocumentNotes',component:DocumentNotes},
        {path:'/Home/EngineLink',component:EngineLink},
        {path:'/Home/Favorites',component:Favorites},

      ]
    }
  ]
})
