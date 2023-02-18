<template>
   <div>
<div  class="text-center lg:text-left ml-[13%] ">
   
   <span> <span class=" text-white text-opacity-75" > 01</span> PICK YOUR DESTINATION</span>
</div>
   <div class=" flex flex-col gap-5 lg:gap-16 lg:grid main-content ">
      <div class="pt-[10%]" >
   <img :src="popObject.moon" :alt="popObject.bgtxt" class="w-[50%] m-auto"  >
</div>
<div class="flex flex-col lg:gap-2 gap-5 items-center w-[90%]  lg:items-start self-center " >
   <div class="btns flex gap-5 md:w-[50%] justify-between md " >
<button @click="showMoon(0)" :class = 'btnClass(1)'> MOON</button>   
<button @click="showMoon(1)" :class = 'btnClass(2)' > MARS</button>   
<button @click="showMoon(2)"  :class = 'btnClass(3)' > EUROPA</button>   
<button @click="showMoon(3)"  :class = 'btnClass(4)' > TITAN </button>   
   </div>
<span class="text-5xl md:text-6xl " > {{ popObject.bgtxt }}</span>

<p class="text-center md:w-[80%] lg:w-full lg:text-left text-[#D0D6F9] " > {{ popObject.ptxt }}</p>

<hr class="bg-white w-full" >

<div class="dist-time flex flex-col md:flex-row text-center md:gap-20 gap-5" >
   <div class="low-time flex flex-col" >
      <span class="text-[#D0D6F9]" >AVG.DISTANCE</span>
      <span class="text-2xl" >{{ popObject.avgd }}</span>

   </div>
   <div class="low-time flex flex-col" >
      <span class="text-[#D0D6F9]" >EST.TRAVEL.TIME</span>
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
   },
   btnClass(b){
   return this.popObject.id === b ? 'btnhover' : '';
}

  },
  mounted(){

  },
  created(){
   this.popObject = destImg[0]    

   const storedData = localStorage.getItem('moonObj');
    if (storedData) {
      this.popObject = JSON.parse(storedData);
      console.log(storedData);
}
  
}
,
beforeUnmount(){
localStorage.setItem('moonObj',JSON.stringify(this.popObject))
localStorage.setItem('moon','moomoo')

},
}


</script>

<style scoped>
button{
   all: unset;
   cursor: pointer;
   color: #D0D6F9;
}
button:hover, .btnhover{
   border-bottom: 1px solid white;
}

@media(min-width:990px){
   .main-content{
   display: grid;
   grid-template-columns: 1fr 1fr;
margin: 0  5% 0 10% ;


}
img{
   width: 65%;
   margin: auto;
}
.dist-time{
   display: flex;
   justify-content: space-between;
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