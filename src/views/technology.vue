<template>
   <div class="text-white pt-2 text-center"> 
      <span class="my-3"> <span > 03 </span> SPACE LAUNCH 101</span>
   <main class="main-content">
<div class="f-grid" >
<div class="numbers flex gap-5 justify-center mt-6 ">

   <button @click="setCrew(0)" class=" num rounded-[50%] w-[40px] h-[40px] text-center border-white hover:bg-white hover:text-black border-[1px] "> 1</button>
   <button @click="setCrew(1)" class="num rounded-[50%] w-[40px] h-[40px] text-center border-white hover:bg-white hover:text-black border-[1px]"> 2</button>
   <button @click="setCrew(2)" class=" num rounded-[50%] w-[40px] h-[40px] text-center border-white hover:bg-white hover:text-black border-[1px]"> 3</button>

</div>

   <article class="flex flex-col gap-3 mt-4" >
       <p>The Terminology</p>
       <p >{{ compObj.name }}  </p>
       <p>{{ compObj.ptxt }}  </p>
   </article>

</div> 
<div class="s-grid py-4" >

<img :class="btnClick?'':'anim'" :src="windowWidth <= 768 ? compObj.limg:compObj.pimg" alt="">

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
         this.btnClick = true
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
   grid-template-columns: 1fr .7fr;

}

}
</style>