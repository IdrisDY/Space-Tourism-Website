<template>
   <div>
<div  class="text-center">
   <span> 01</span>
   <span> PICK YOUR DESTINATION</span>
</div>
   <div class=" flex flex-col gap-5  lg:grid main-content ">
      <div class="pt-5" >
   <img :src="popObject.moon" :alt="popObject.bgtxt" class="w-[50%] m-auto"  >
</div>
<div class="flex flex-col gap-5 items-center w-[90%] self-center " >
   <div class="btns flex gap-5 md:w-[50%] justify-between md " >
<button @click="showMoon(0)" > MOON</button>   
<button @click="showMoon(1)" > MARS</button>   
<button @click="showMoon(2)" > EUROPA</button>   
<button @click="showMoon(3)" > TITAN </button>   
   </div>
<span class="text-5xl md:text-8xl " > {{ popObject.bgtxt }}</span>

<p class="text-center md:w-[80%] " > {{ popObject.ptxt }}</p>

<hr class="bg-white w-full" >

<div class="dist-time flex flex-col md:flex-row text-center gap-5" >
   <div class="low-time flex flex-col" >
      <span>AVG.DISTANCE</span>
      <span class="text-2xl" >{{ popObject.avgd }}</span>

   </div>
   <div class="low-time flex flex-col" >
      <span>EST.TRAVEL.TIME</span>
      <span class="text-2xl" >{{ popObject.travelTime }}</span>
   </div>

</div>

</div>
 </div>


 </div>
</template>

<script >
import moonNav from './moon-nav.vue'
import { destImg } from '../components/destImg'
export default {
   components:{
      moonNav
   },
   props:['image','showMars','showEuropa','showTitan']
   ,  data(){
   return{
      popObject:Object, destImg
   }
  },
  methods:{
   showMoon(val){
      console.log('MoonClicked',val);
      this.popObject = destImg[val]    
      console.log(this.popObject);
   }
  },

  
}


</script>

<style scoped>
button{
   all: unset;
   cursor: pointer;
}
button:hover{
   border-bottom: 1px solid white;
}

@media(min-width:990px){
   .main-content{
   display: grid;
   grid-template-columns: 1fr 1fr;
margin:  0 10%;


}
img{
   width: 70%;
   margin: auto;
}
.dist-time{
   display: flex;
   justify-content: space-between;
   width: 70%;
}
.low-time{
   display: flex;
flex-direction: column;

}
.btns{
   display: flex;
   justify-content: space-between;
   width: 70%;
padding-bottom: .5em;
}
.lg-text{
   font-size: 7rem;
}
}
</style>