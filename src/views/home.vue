<template>
   
   <main class="home">
<div class="f-grid" >

   <article>
       <p class="font-barlowC tracking-widest text-[#D0D6F9]" >SO, YOU WANT TO TRAVEL TO SPACE</p>
       <p class="font-belle ">SPACE</p>
       <p class="font-barlow text-[#D0D6F9] " >Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
   </article>

</div> 
<div class="s-grid" >

<span class="font-belle text-[1.2rem] lg:text-[2rem] tracking-widest font-bolder ">EXPLORE</span>

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
   margin-top: 11%;
   padding: 0 10% 0 12%;
   place-items: center;
}
article :nth-child(2){
   font-size:7rem;
   letter-spacing: .3rem;
   margin: 0;
}
article :nth-child(1){
   font-size: 1.3rem;
   letter-spacing: .15rem;
   margin: 0;
}
article :nth-child(3){
   line-height: 25px;
   width: 70%;
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
}
@media(max-width:768px){
   .home{
      display: flex;
      flex-direction: column;
      padding-bottom: 1em;
     gap: 3em;
     -webkit-column-gap: 3em;

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
   font-size: .9rem
}
article{
   text-align: center;
}
article :nth-child(3){
   text-align: center;
   font-size: .95rem;
   line-height: 25px;
   width: 100%;
}

}

</style>