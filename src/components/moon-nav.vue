<template>
   <div>
<button @click="showMoon" > MOON</button>   
<button @click="showMars" > MARS</button>   
<button @click="showEuropa" > EUROPA</button>   
<button @click="showTitan" > TITAN </button>   
   </div>
</template>

<script >

export default {
   props:['showMoon','showMars','showEuropa','showTitan']
  }


</script>

<style scoped>
button{
   all: unset;
}
div{
   display: flex;
   justify-content: space-between;
}
</style>