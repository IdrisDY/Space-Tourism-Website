<template>
<main class="" >
<dest-template />
</main>   
</template>

<script >
import destTemplate from '../components/destTemplate.vue';
import { destImg } from '../components/destImg';
// console.log(popObject);

export default {
  components: { destTemplate },
  data(){
   return{
      popObject:Object, destImg
   }
  },
  methods:{
  },
  }


</script>

<style scoped>
main{
   color: white;
}
</style>