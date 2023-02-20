<template>
   <div class="contain"   >
      <div class="img">
         <img :src="logo1" alt="image">
      </div>
      <div class="links-desk"  >
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
      <dropdown-vue v-if="menuClick" @btn-close = "closeMenu" ></dropdown-vue>

<button @click = "openMenu" >      <img class="menu" :src="menu" alt="menu" >
</button>
   </div>

</template>

<script>
import logo1 from '../assets/starter-code/assets/shared/logo.svg'
import menu from '../assets/starter-code/assets/shared/icon-hamburger.svg'
import DropdownVue from './Dropdown.vue'
export default {
   mounted() {
    
      console.log('can see nav');

//     window.onresize = () => {
//       const screen = window.innerWidth;
//       const truth = screen<= 768;
//       console.log('can adjust nav',screen);
// this.truthy = truth

// console.log(this.truthy);
//     };
  },


data(){
   return{
      logo1, mobile:window.innerWidth,truthy:false,menu , menuClick:true
   }

},
beforeDestroy() {
  window.removeEventListener('resize');
},
methods : {
    closeMenu(){
      this.menuClick = false
   },
   openMenu(){
      this.menuClick = true
   }

   }
,

components:{ DropdownVue}
}

</script>
<style scoped>

.line{
   width: 35%;
   background: white;
   height: 1px;
   display: flex;
   align-self: center;
   margin-right: -3em;
   opacity: .25;
}
.links-desk{
   display: flex;
width: 100%;
justify-content: flex-end;
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
display: flex;
justify-content: space-around;
color: white;
align-items: center;
padding: 0 1em;
backdrop-filter: blur(40.7742px);
gap: 1em;
width: 60%;
}

.links div a{
   text-decoration: none;
   color: white;
}
.menu{
      display: none;
   }

.img{
   display: flex;
   align-self: center;
}
@media(max-width:768px){
   .contain{
      padding-right: 2em;
   }
   .links-desk{
      display: none;
   }
   .menu{
      display: flex;
   }
}
@media(min-width:768px) and (max-width:990px) {
   .line{
      display: none;
   }
}
</style>