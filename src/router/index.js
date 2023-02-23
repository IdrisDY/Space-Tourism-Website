import {createRouter,createWebHistory} from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import navbarvue from '../components/navbar.vue'
import textvue from '../components/text.vue'
import Home  from '../views/home.vue'
import App from '../App.vue'
import Destination from '../views/destination.vue'
import Crews from '../views/crews.vue'
import Tech from '../views/technology.vue'
const routes = [
   {
      path:'/',
      name:'Home',
      component:Home
   },
   {
   path:'/crews',
   name:'Crew',
   component:Crews

},
{
   path:'/destination',
   name:'destination',
   component:Destination

},
{
   path:'/technology',
   name:'Technology',
   component:Tech

},

// how to redirect
{
   path:'/former -path',
   redirect:'/destination',

},
// 404 - create a component for it
{
   path:'/:catchAll(.*)',
   component:'/destination',

}

]

 const router = createRouter({
   history:createWebHistory(),
   routes
})

export default router