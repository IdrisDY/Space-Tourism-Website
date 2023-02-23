<template>
   
   <main class="home">
<div class="f-grid" >

   <article>
       <p>SO, YOU WANT TO TRAVEL TO SPACE</p>
       <p class>SPACE</p>
       <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
   </article>

</div> 
<div class="s-grid" >

<span>EXPLORE</span>

</div>
   </main>

</template>

<script setup>

</script>
<style scoped>
.home{
   color: white;
   display: grid;
   grid-template-columns: 1fr 1fr;
   margin-top: 6%;
   padding: 0 10%;
   place-items: center;
}
article :nth-child(2){
   font-size:5rem;
   letter-spacing: .8rem;
   margin: 0;
}
article :nth-child(1){
   font-size: 1.2rem;
   margin: 0;
}
.s-grid{
   background: white;
   border-radius: 50%;
   height: 250px;
   width: 250px;
   display: flex;
 margin-left: auto;
 color: black;
justify-content:center ;
align-items: center;
font-size: 1.7rem;
letter-spacing: .3rem;

}
@media(max-width:768px){
   .home{
      display: flex;
      flex-direction: column;
      padding-bottom: 1em;
      gap: 3em;

   }
   .s-grid{
 margin-left: unset;
 height: 150px;
   width: 150px;
}

article :nth-child(2){
   font-size:4rem
}
article :nth-child(1){
   font-size:.8rem
}
article{
   text-align: center;
}
article :nth-child(3){
   text-align: center;
   font-size: .8rem;
}

}

</style>