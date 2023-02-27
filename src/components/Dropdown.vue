<template>
<div class="wrapper">

   <div :class="`drop font-barlowC ${openClicked ? 'appear':'' }` " ref="dropdiv">
      <button @click = "handleClose" class="flex self-end pr-5 ">
         <svg class="ml-auto flex self-end items-end  " xmlns="http://www.w3.org/2000/svg" width="21" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>      <link-scomp> </link-scomp>

      </button>

<div class="w-full inline-flex gap-2"  >
   <span class="font-[700]" >00</span>
   <router-link to="/" @click="handleClose" class="font-[400] tracking-widest w-full  hover:border-r-2 border-white " > HOME</router-link>
</div>
<div class="w-full inline-flex gap-2" >
   <span>01</span>
   <router-link to="/crews" @click="handleClose" class="font-[400] tracking-widest w-full hover:border-r-2 border-white" > CREWS</router-link>
</div>
<div class="w-full inline-flex gap-2" >
   <span>02</span>
   <router-link to="/destination" @click="handleClose" class="font-[400] tracking-widest w-full hover:border-r-2 border-white" > DESTINATION</router-link>
</div>
<div class="w-full inline-flex gap-2" >
   <span>03</span>
   <router-link to="/technology" @click="handleClose" class="font-[400] tracking-widest w-full hover:border-r-2 border-white"> TECHNOLOGY</router-link>
</div>


</div>
</div>
</template>

<script>

import linkScomp from '../components/links.vue'
export default{
   data(){
      return{
         closeClicked:false,
      }
   },
   props:{
openClicked:Boolean
   },
   mounted(){
   },
components:{
   linkScomp
},
methods:{
   //  Emit and in-house functions to interact with animation opening and closing.
   handleClose(){
   
      this.$emit('btn-close')
      this.closeClicked = true 
         this.$refs?.dropdiv.classList?.add('close')
// handling the close removal class here and adding appear class after checking if openClicked is true.
      setTimeout(() => {
         this.$refs?.dropdiv.classList?.remove('close')
         this.openClicked?
         this.$refs?.dropdiv.classList?.remove('appear'): null

      }, 700);

   }

}
}
</script>

<style scoped>

.drop{
   display: flex;
   background: #FFFFFF0A;
display: flex;
color: white;
padding: 0 1em;
backdrop-filter: blur(40.7742px);
gap: 1.5em;
-webkit-column-gap: 1.5em;
flex-direction: column;
top: 0;
width: 71%;
position: absolute;
right: 0;
padding:10% 0em 0 2.5em ;
height: 100%;
}
.wrapper{
   width: 100%;
   position: fixed;
   height: 100%;
   top: 0;
   left: 0;
}
.appear{
   animation: appear .7s;
}

.close{
   animation: close .7s;
   /* margin: -100% ;
opacity: 0;
 visibility: hidden;
transition:all 1s ease-in ;
-webkit-transition: all 1s ease-in;
  -o-transition: all 1s ease-in;
  -moz-transition: all 1s ease-in; */

}


@keyframes appear{
0%{
opacity: 0;
transform: translateX(100%);
}
100%{
opacity: 1;
transform: translateX(0%);

}
}

@keyframes close{
0%{
   opacity: 1;
transform: translateX( 0%);

}
100%{
opacity: 0;
transform: translateX(100%);
}


}




</style>