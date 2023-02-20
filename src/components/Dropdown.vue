<template>
   <div class="drop">
      <button @click = " $emit('btn-close')" >
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
</template>

<script>

import linkScomp from '../components/links.vue'
export default{
components:{
   linkScomp
}
}
</script>

<style scoped>

.drop{
   display: flex;
   background: #FFFFFF0A;
   height: 100%;
display: flex;
color: white;
padding: 0 1em;
backdrop-filter: blur(40.7742px);
gap: 2em;
flex-direction: column;
position: fixed;
top: 0;
width: 70%;
right: 0;
padding:30% 1em 0 2.5em ;
}


</style>