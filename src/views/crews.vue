<template>
   <main class="text-white" >
<div  class="text-center md:text-left md:ml-[5%] lg:text-left ">
   
   <span> <span class=" text-white text-opacity-25" > 02</span> MEET YOUR CREW</span>
</div>
   <div class=" flex flex-col-reverse md:flex-col  gap-5 lg:gap-16 lg:grid main-content ">
<div class="flex flex-col gap-5 items-center w-[90%] lg:gap-2  lg:items-start self-center " >
   <span class="text-white text-opacity-50 text-center text-2xl " > {{ popObject.title.toUpperCase() }}</span>

   <span class="text-3xl lg:text-left text-center md:text-4xl " > {{ popObject.name }}</span>

<p class="text-center md:w-[80%] lg:w-full lg:text-left text-[#D0D6F9] " > {{ popObject.ptxt }}</p>


</div>
<div class="" >
   <img :src="popObject.moon" :alt="popObject.name" class="w-[50%] m-auto"  >
</div>

 </div>


</main>
</template>

<script >
import { crewsData } from '../components/destImg'
console.log(crewsData);
export default {
   components:{
   },
   
   data(){
   return{
      popObject:Object
   }
  },
  methods:{
   showMoon(val){
      console.log('MoonClicked',val);
      this.popObject = crewsData[val]    
      console.log(this.popObject);
   },
   btnClass(b){
   return this.popObject.id === b ? 'btnhover' : '';
}

  },
  mounted(){

  },
  created(){
   this.popObject = crewsData[0]    

//    const storedData = localStorage.getItem('mooncrew');
//     if (storedData) {
//       this.popObject = JSON.parse(storedData);
//       console.log(storedData);
// }
  
}
,
beforeUnmount(){
// localStorage.setItem('mooncrew',JSON.stringify(this.popObject))
// localStorage.setItem('moon','moomoo')

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