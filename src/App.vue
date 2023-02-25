<template>
  <div class="main">
    <navbar-vue />
    <router-view></router-view>
  </div>


</template>

<script>
import navbarVue from "./components/navbar.vue";
import backgrounds from "./components/backgrounds";
import destination from './views/destination.vue'
const doc  = document.body.style
doc.backgroundRepeat = 'no-repeat'
doc.backgroundSize = 'cover'

export default {


  data() {
    console.log('location');
    return {
      screenWidth: window.innerWidth,
      backScreen: '',
    };
  },
  components:{
    navbarVue

  },
  methods:{
    setPageScreen(){
      const homes = backgrounds.home;
    const crews = backgrounds.crew;
    const tech = backgrounds.tech;
    const dest = backgrounds.destination;
    const location = window.location.pathname;

    const mobile = window.innerWidth <= 768;


    const setBack = () => {
      switch (location) {
        case "/":
          return homes;
          break;
        case "/crews":
          return crews;
          break;
          case "/destination":
          return dest;
          break;
          case "/technology":
          return tech;
          break;

        default:
          break;
      }
    };

    const showMobDesk = (a) => {
      a
        ? ( this.backScreen = setBack().mob)
        : ( this.backScreen = setBack().desk);
    };

    showMobDesk(mobile);
console.log('still called');
doc.backgroundImage =  `url(${this.backScreen})` ;

    }
  },

  mounted() {
    this.setPageScreen()
    window.addEventListener('resize', this.setPageScreen);
  },

  beforeDestroy() {
  window.removeEventListener('resize', this.setPageScreen);
},

watch: {

  $route(to) {
    const homes = backgrounds.home;
    const crews = backgrounds.crew;
    const tech = backgrounds.tech;
    const dest = backgrounds.destination;
    const screen = window.innerWidth;
      this.screenWidth = screen;
      const mobile = this.screenWidth <= 768;

    const showMobDesk = (a) => {
      a
        ? ( this.backScreen = setBack().mob)
        : ( this.backScreen = setBack().desk);
    };


    const setBack = () => {
      switch (to.path) {
        case "/":
          return homes;
          break;
        case "/crews":
          return crews;
          break;
          case "/destination":
          return dest;
          break;
          case "/technology":
          return tech;
          break;

        default:
          break;
      }
    };

    showMobDesk(mobile)
    doc.backgroundImage =  `url(${this.backScreen})`
  }
}
  };
</script>

<style>
.main {
  min-height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
