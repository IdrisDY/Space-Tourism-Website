<template>
   
   <div class="container" :style="{ backgroundImage: `url(${bg})`}" >
<img :src="logo1" alt="image">

<div class="line" > </div>

   </div>

</template>

<script>
import logo1 from '../assets/starter-code/assets/shared/logo.svg'
import bg from '../assets/starter-code/assets/home/background-home-desktop.jpg'
export default {

data(){
   return{
      logo1,bg
   }
}
}
</script>
<style scoped>

.line{
   width: 50%;
}
.container{
   min-height: 100vh;
   width: 100%;
}
</style>