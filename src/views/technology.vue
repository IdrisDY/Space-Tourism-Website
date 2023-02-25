<template>
   <div class="pb-10" > 
   <main class="text-white pt-2 lg:text-left w-full text-center">
      <span class="my-3 font-barlowC gap-2 tracking-widest justify-center flex lg:ml-[15%] "> <span class="opacity-25" > 03 </span> SPACE LAUNCH 101</span>
      <div class="main-content" >
         <div class="f-grid flex flex-col lg:pt-[10%] lg:ml-[23%] lg:gap-5  lg:flex-row " >
<div class="numbers flex lg:flex-col gap-5 lg:justify-start justify-center  mt-6 ">

   <button @click="setCrew(0)" class=" num rounded-[50%] w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]  text-center border-white hover:bg-white hover:text-black border-[1px] "> 1</button>
   <button @click="setCrew(1)" class="num rounded-[50%] w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]  text-center border-white hover:bg-white hover:text-black border-[1px]"> 2</button>
   <button @click="setCrew(2)" class=" num rounded-[50%] w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]  text-center border-white hover:bg-white hover:text-black border-[1px]"> 3</button>

</div>

   <article class="flex flex-col gap-3 lg:gap-4 mt-4" >
       <p class="font-barlow">THE TERMINOLOGY</p>
       <p class=" text-2xl font-belle lg:text-4xl" >{{ compObj.name }}  </p>
       <p class="text-[1rem] font-barlow lg:text-left m-auto text-center max-w-[90%]" >{{ compObj.ptxt }}  </p>
   </article>

</div> 
<div class="s-grid py-4" >

<img ref="myimg" :class=" `w-full ${btnClick?'anim':''}`" :src="windowWidth <= 990 ? compObj.limg:compObj.pimg" alt="">

</div>

      </div>
   </main>
</div>
</template>

<script>
import { techData } from "../components/destImg";
export default{
   data(){
      console.log(techData);
   return{
compObj:Object,windowWidth:window.innerWidth,btnClick:false
   }
}
, 
mounted() {
   this.compObj = techData[0]
    window.addEventListener('resize', this.handleResize);
    const meen  = this.$refs.myimg
    meen.onload = ()=>{
console.log('loaded my image');
this.btnClick = true

    } 
       console.log(meen);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    setCrew(val) {
         console.log("MoonClicked", val);
         this.compObj = techData[val];
      },

  }

}
</script>
<style scoped>

.num{
   transition: background .8s ease-in-out
}
img{
   transition: all 1s ease-in;
}
.anim{
   animation: appear 1s;
}
@keyframes appear{
   0%{
opacity: 0;
transform: translateX(-100%);
   }
   100%{
      opacity: 1;
      transform: translateX(0%);
   }

}
.main-content{
   color: white;
   display: flex;
   flex-direction: column-reverse;
}
@media(min-width:990px){
   .main-content{
   display: grid;
   grid-template-columns: 1fr .5fr;
   gap: 5em;

}

}
</style>