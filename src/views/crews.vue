<template>
      <main
        class="text-white "
      >
        <div class="text-center md:text-left md:ml-[5%] py-[5%] lg:py-[1%]  lg:ml-[10%] lg:text-left">
          <span class="" >
            <span class="text-white  text-opacity-25"> 02</span> MEET YOUR
            CREW</span
          >
        </div>
        <div
          class="flex flex-col-reverse md:flex-col gap-5 lg:gap-16 lg:grid main-content"
        >
          <div
            class="flex flex-col gap-5 items-center lg:mt-[15%] w-[90%] lg:w-full lg:self-start lg:gap-2 lg:items-start  self-center"
          >
            <span class="text-white text-opacity-50 text-center text-2xl">
              {{ popObject.title.toUpperCase() }}</span
            >

            <span class="text-3xl lg:text-left text-center md:text-4xl">
              {{ popObject.name }}</span
            >

            <p
              class="text-center md:w-[80%] lg:mt-[5%] lg:w-full lg:text-left text-[#D0D6F9]"
            >
              {{ popObject.ptxt }}
            </p>
            <div class="bullets justify-center lg:justify-start  w-full order-[-1] md:order-[0] flex gap-4">
      <span class="bullet" @click="setCrew(0)" :class=" popObject.id === 1 ? 'bhover':''"></span>
      <span class="bullet" @click="setCrew(1)" :class=" popObject.id === 2 ? 'bhover':''"></span>
      <span class="bullet" @click="setCrew(2)" :class=" popObject.id === 3 ? 'bhover':''" ></span>
      <span class="bullet" @click="setCrew(3)" :class=" popObject.id === 4 ? 'bhover':''" ></span>
    </div>

          </div>
          <div class="">
            <img :src="popObject.moon" :alt="popObject.name" class="w-[55%] h-[40vh] max-w-[250px] md:max-w-full md:h-[80vh] lg:w-[90%] m-auto" />
            <hr class=" w-[80%] m-auto h-[1px] border-none bg-[#383B4B]" >
          </div>
        </div>


      </main>
</template>

<script>
import { crewsData } from "../components/destImg";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
console.log(crewsData, Swiper);
export default {
  components: {},

  data() {
    return {
      popObject: Object,
      crewsData,
      swiper: null,
    };
  },
  methods: {
    setCrew(val) {
      console.log("MoonClicked", val);
      this.popObject = crewsData[val];
      console.log(this.popObject);
    },
    btnClass(b) {
      return this.popObject.id === b ? "btnhover" : "";
    },
  },
  mounted() {
    this.swiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
      },
    });

  },
  created() {
   this.popObject = crewsData[0];

    //    const storedData = localStorage.getItem('mooncrew');
    //     if (storedData) {
    //       this.popObject = JSON.parse(storedData);
    //       console.log(storedData);
    // }
  },
  beforeUnmount() {
    // localStorage.setItem('mooncrew',JSON.stringify(this.popObject))
    // localStorage.setItem('moon','moomoo')
  },
};
</script>

<style scoped>
button {
  all: unset;
  cursor: pointer;
  color: #d0d6f9;
}

button:hover,
.btnhover {
  border-bottom: 1px solid white;
}
.bullets{
}
.bullet{
   width: 10px;
   height: 10px;
   border-radius: 50%;
   border: 1px solid none;
display: flex;
background: grey;
cursor: pointer;
}
.bhover{
   background: white;

}

@media (min-width: 990px) {
  .main-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 5% 0 10%;
  }
  .bullets{
   position: fixed;
   bottom: 10%;
   order: 1;
}


  img {
    margin: auto;
  }

  .dist-time {
    display: flex;
    justify-content: space-between;
  }

  .low-time {
    display: flex;
    flex-direction: column;
  }

  .btns {
    display: flex;
    justify-content: space-between;
    width: 70%;
    padding-bottom: 0.5em;
  }

  .lg-text {
    font-size: 7rem;
  }
}
</style>
