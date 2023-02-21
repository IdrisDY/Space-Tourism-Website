<template>
<div class="wrapper">

   <div :class="closeClicked ? 'drop close' : 'drop'" >
      <button @click = "handleClose" >
         <svg class="" xmlns="http://www.w3.org/2000/svg" width="100" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>      <link-scomp> </link-scomp>

      </button>

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

import linkScomp from '../components/links.vue'
export default{
   data(){
      return{
         closeClicked:false
      }
   },
components:{
   linkScomp
},
methods:{
   handleClose(){
      this.$emit('btn-close')
      this.closeClicked = true
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
gap: 2em;
flex-direction: column;
top: 0;
width: 70%;
position: absolute;
right: 0;
padding:30% 1em 0 2.5em ;
animation: appear .7s;
height: 100%;
}
.wrapper{
   width: 100%;
   position: fixed;
   height: 100%;
   top: 0;
   left: 0;
}
.close{
   animation: close .7s;
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