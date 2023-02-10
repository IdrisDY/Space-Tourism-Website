<template>
   
   <div class="contain"  >
      <div class="img">
         <img :src="logo1" alt="image">

      </div>

<div class="line" ></div>

<div class="links">

   <div>
      <span>00</span>
      <router-link to="/" > HOME</router-link>
   </div>
   <div>
      <span>01</span>
      <router-link to="/crews" > CREWS</router-link>
   </div>
   <div>
      <span>02</span>
      <router-link to="/destination" > DESTINATION</router-link>
   </div>
   <div>
      <span>03</span>
      <router-link to="/technology" > TECHNOLOGY</router-link>
   </div>


</div>

   </div>

</template>

<script>
import logo1 from '../assets/starter-code/assets/shared/logo.svg'
export default {

data(){
   return{
      logo1
   }
}
}
</script>
<style scoped>

.line{
   width: 40%;
   background: white;
   height: 1px;
   display: flex;
   align-self: center;
   margin-right: -3em;
   opacity: .25;
}
.contain{
   display: flex;
   align-items: flex-start;
padding:2em 0 0 2em ;
justify-content: space-between;
}
.links{
   background: #FFFFFF0A;
   height: 80px;
width: 50%;
display: flex;
justify-content: space-around;
color: white;
align-items: center;
padding: 0 1em;
backdrop-filter: blur(40.7742px)
}

.links div a{
   text-decoration: none;
   color: white;
}
.img{
   display: flex;
   align-self: center;
}
</style>