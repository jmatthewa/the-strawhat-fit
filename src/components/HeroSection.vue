<template>
    <div class="hero" id="home">
    <div class="blur hero-blur"></div>
        <div class="left-h">
           <HeaderSection />

           <div class="the-best-ad">
            <div 
            v-motion
            :initial="{
                left: mobile ? `140px` : '238px'
            }"
            :enter="{ 
                left: '8px',        
              transition: {
                    type: 'tween',
                    duration: 3000
                }
            }"

            >

            </div>
            <span>the best fitness club in the town</span>
           </div>

           <div class="hero-text">
                <div>
                    <span class="stroke-text">Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>

                </div>
           </div>

           <div class="figures">
                <div>
                    <span>  <vue3-autocounter ref='counter' :startAmount='100' :endAmount='140' :duration='3' prefix='+'/>
    </span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span> <vue3-autocounter ref='counter' :startAmount='947' :endAmount='987' :duration='3' prefix='+'/></span>
                    <span>members joined</span>
                </div>
                <div>
                    <span><vue3-autocounter ref='counter' :startAmount='10' :endAmount='50' :duration='3' prefix='+'/></span>
                    <span>fitness programs</span>
                </div>
            
           </div>

           <div class="hero-buttons">
                <button class="btn">Get Started</button>
                <button class="btn">Learn More</button>
           </div>
        </div>
           
        <div class="right-h">
            <button class="btn" @click="scroll('join-us')">Join Now</button>

            <div v-motion 
            :initial="{
                right: '-1rem'
            }"
            :enter="{
               right: '4rem',          
              transition: {
                    type: 'spring',
                    duration: 3000
                }
            }"
          
            
            class="heart-rate">
                <img :src="Heart" alt="">
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </div>

            <img :src="hero_image" alt="" class="hero-image">
            <img  v-motion 
            :initial="{
                right: '11rem'
            }"
            :enter="{
               right: '20rem',          
              transition: {
                    type: 'spring',
                    duration: 3000
                }
            }"
            :src="hero_image_back" alt="" class="hero-image-back">

            <div  v-motion 
            :initial="{
                right: '37rem'
            }"
            :enter="{
               right: '28rem',          
              transition: {
                    type: 'spring',
                    duration: 3000
                }
            }"
            class="calories">
                <img :src="Calories" alt="">
                <div>
                    
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import HeaderSection from './HeaderSection.vue';
import hero_image from '../assets/luffyhero.png';
import hero_image_back from '../assets/hero_image_back.png';
import Heart from '../assets/heart.png';
import Calories from '../assets/calories.png'
// import { ref } from 'vue';
// import { useMotion } from '@vueuse/motion';

const mobile = window.innerWidth<=768 ? true : false


export default {
    components :{
        HeaderSection
    },
    data() {
        return {
            hero_image : hero_image,
            hero_image_back : hero_image_back,
            Heart : Heart ,
            Calories : Calories,
            mobile : mobile
        }
    }, methods: {
        scroll(id) {
     
            const element = document.getElementById(id);
            element.scrollIntoView({ behavior: 'smooth' });

    }
    }
}
</script>
<style>
    .hero {
        display:flex;
        justify-content: space-between;
        margin-left: 10%;
        margin-right: 10%;
    }
    .hero-blur {
        width: 22rem;
        height: 30rem;
        
    }
    .left-h {
        padding: 2rem;
        padding-top: 1.5rem;
        flex: 3;
        gap: 2rem;
        flex-direction: column;
    }
    .right-h {
        flex: 1;
        position: relative;
        background-color: var(--orange);
    }

    .the-best-ad {
        margin-top: 4rem;
        background-color: #363d42;
        border-radius: 4rem;
        width: fit-content;
        padding: 20px 13px;
        text-transform: uppercase;
        color: white;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .the-best-ad>span {
        z-index: 2;
    }

    .the-best-ad>div {
        position: absolute;
        background-color: var(--orange);
        width: 5.4rem;
        height: 80%;
        left: 8px;
        border-radius: 3rem;
        z-index: 2;
    }

    .hero-text{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        text-transform: uppercase;
        font-size: 4.5rem;
        font-weight: bold;
        color: white;
        text-overflow: inherit;
    }

    .hero-text>div:nth-of-type(3){
        font-size: 1rem;
        font-weight: 200;
        text-transform: none;
        letter-spacing: 1px;
        width: 80%;
    }

    .figures{
        margin-top: 2rem;
        display: flex;
        gap: 2rem;
    }
    
    .figures>div {
        display: flex;
        flex-direction: column;
    }

    .figures>div>span:nth-of-type(1){
        color: white;
        font-size: 2rem;
    }
    .figures>div>span:nth-of-type(2){
        color: var(--gray);
        text-transform: uppercase;
    }

    .hero-buttons{
        margin-top: 2rem;
        display: flex;
        gap: 1rem;
        font-weight: normal;
    }

    .hero-buttons>:nth-child(1) {
        color: white;
        background-color: var(--orange);
        width: 8rem;
    }
    .hero-buttons>:nth-child(2) {
        color: white;
        background-color: transparent;
        width: 8rem;
        border: 2px solid var(--orange);
    }

    .right-h>.btn {
        position: absolute;
        right: 3rem;
        top: 2rem;
        color: black;
    }

    .heart-rate {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: var(--darkGrey);
        width: fit-content;
        padding: 1rem;
        align-items: start;
        border-radius: 5px;
        position: absolute;
        right: 4rem;
        top: 7rem;
    }

    .heart-rate>img {
        width: 2rem;
    }

    .heart-rate>:nth-child(2) {
        color: var(--gray);
    }
    .heart-rate>:nth-child(3) {
        color: white;
        font-size: 1.5rem;
    }

    .hero-image {
        position: absolute;
        top:7rem;
        right: 8rem;
        width: 23rem;
    }
    .hero-image-back {
        position: absolute;
        top: 10rem;
        right: 20rem;
        z-index: -1;
        width: 15rem;
    }
    .calories {
        display: flex;
        gap: 2rem;
        background-color: var(--caloryCard);
        border-radius: 5px;
        padding: 1rem;
        width: fit-content;
        position: absolute;
        top: 32rem;
        right: 28rem;
    }

    .calories> img {
        width:3rem;
    }
    .calories > div {
        white-space: nowrap;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .calories > div > :nth-child(1) {
        color: var(--gray);
    }
    .calories > div > :nth-child(2) {
        color: white;
        font-size: 1.5rem;
    }



    @media only screen and (max-width: 768px){
        .hero {
            flex-direction: column;
            margin-left: 0;
        margin-right: 0;

        }
        .hero-blur {
            width: 14rem;
        }
       

        .the-best-ad {
            margin-top: 2rem;
            margin-left: .5rem;
            left: .5rem;
            margin-right: .5rem;
            font-size: small;
            transform: scale(0.8);
        }

        .hero-text {
            margin-top: 2rem;
            font-size: xx-large;
            align-items: center;
            justify-content: center;
        }
        .hero-text > div:nth-child(3){
            font-size: small;
            font-weight: 200;
            letter-spacing: 1px;
            text-align: center;
        }
        .hero-buttons{
            justify-content: center;
        }
        .figures > div > span:nth-of-type(1){
            font-size: large;

        }
        .figures > div > span:nth-of-type(2){
            font-size: x-small;
            
        }
        .right-h {
            position: relative;
            background: none;
        }
        .heart-rate{
            left: 1rem;
            top: 2rem;
        }
        .calories {
            position: relative;
            top: 5rem;
            left: 2rem;
        }
        .calories > img {
            width: 2rem;
        }
        .calories>div>:nth-child(2){
            color: white;
            font-size: 1rem;
        }
        .hero-image{
            position: relative;
            width: 15rem;
            left: 7rem;
            top: 4rem;
            align-self: center;
        }
        .hero-image-back{
            width: 15rem;
            left: 2rem;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        .hero {
            flex-direction: column;
            margin-left: 0;
            margin-right: 0;

        }
        .hero-blur {
            width: 14rem;
        }
        .the-best-ad {
            display: flex;
            margin-top: 5rem;
            margin-left: 12.5rem;
            margin-right: .5rem;
            font-size: normal;
            transform: scale(1);
            
        }
        .hero-text {
            margin-top: 8rem;
            font-size: xxx-large;
            align-items: center;
            justify-content: center;
        }
        .hero-text > div:nth-child(3){
            margin-top: 4rem;
            font-size: large;
            font-weight: normal;
            letter-spacing: 1px;
            text-align: center;
        }
        .hero-buttons{
            margin-top: 5rem;
            justify-content: center;
        }
        .figures {
            margin-top: 5rem;
            justify-content: center;
        }
        .figures > div > span:nth-of-type(1){
            text-align: center;
            font-size: large;

        }
        .figures > div > span:nth-of-type(2){
            font-size: small;
            
        }
        .right-h {
            margin-top: 5rem;
            position: relative;
            background: none;
        }
        .heart-rate{
            left: 10%;
            top: 2rem;
        }
        .calories {
            position: relative;
            top: 5rem;
            left: 50%;
        }
        .calories > img {
            width: 2rem;
        }
        .calories>div>:nth-child(2){
            color: white;
            font-size: 1rem;
        }
        .hero-image{
            position: relative;
            width: 20rem;
            left: 50%;
            top: 4rem;
            align-self: center;
        }
        .hero-image-back{
            width: 15rem;
            left: 30%;
        }
    
    }
    @media only screen and (min-width: 1024px ) and (max-width: 1200px) {
        .hero-image {
       right: 1rem;
    
         }

        .calories {
            top: 40rem;
            right: 30vw;
        }
        .heart-rate {

   
        right: 10rem;
        top: 5rem;
    }

    }

</style>