import {createRouter,createWebHistory} from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import navbarvue from '../components/navbar.vue'
import textvue from '../components/text.vue'
import Home  from '../views/home.vue'
import App from '../App.vue'
const routes = [
   {
      path:'/',
      name:'Home',
      component:Home
   },
   {
   path:'/crews',
   name:'Crew',
   component:HelloWorld

},


]

 const router = createRouter({
   history:createWebHistory(),
   routes
})

export default router