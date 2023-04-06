<template>
   <div class="header">
      <img src="../assets/logo1.png" class="logo">
    <div v-if="menuOpened === false && mobile === true"
    style="background-color: var(--appColor); ; padding: 0.5rem; border-radius: 5px;"
    @click="openMenu">
        <img :src="bars" style="width: 1.5rem; height: 1.5rem;">
    </div>
        <ul v-else class="header-menu" >
            <li @click="scroll('home')" value="home">Home</li>
            <li @click="scroll('programs')">Program</li>
            <li @click="scroll('reasons')">Why us</li>
            <li @click="scroll('plans')">Plans</li>
            <li @click="scroll('testimonials')">Testimonials</li>
        </ul>

   </div>
</template>
<script>
import bars from '../assets/bars.png'
const mobile = window.innerWidth<=768 ? true : false

export default {
    data() {
        return{
            bars : bars,
            mobile : mobile,
            menuOpened : false
        }
    },
    methods: {
        openMenu(){
            this.menuOpened = !this.menuOpened
        },
        scroll(id) {
            this.menuOpened = !this.menuOpened
            const element = document.getElementById(id);
            element.scrollIntoView({ behavior: 'smooth' });

    }
    }
}
</script>
<style>
  
    .header {
        display:flex;
        justify-content: space-between;
        margin-left: 10%;
     
    }
    .logo {
  
        width: 10rem;
        height: 3rem;

        
    }
  
    .header-menu {
        list-style: none;
        display: flex;
        gap: 2rem;
        color: white;
    }

    .header-menu > li:hover {
        cursor: pointer;
        color: var(--orange);
    }

    @media screen and (max-width: 768px) {

        .header>:nth-child(2){
            position: fixed;
            right: 2rem;
            z-index: 5;
        }
        .header-menu {
            flex-direction: column;
            background-color: var(--appColor);
            padding: 2rem;
        }
  
    }
</style>