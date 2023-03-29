<template>
    <div class="hero">

        <div class="left-h">
           <HeaderSection />

           <div class="the-best-ad">
            <div></div>
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
                    <span>
                        In here we will help you to shape and build your ideal body and live up your life to fullest 
                    </span>

                </div>
           </div>

           <div class="figures">
                <div>
                    <span>+140</span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>+987</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitness programs</span>
                </div>
            
           </div>

           <div class="hero-buttons">
                <button class="btn">Get Started</button>
                <button class="btn">Learn More</button>
           </div>
        </div>
           
        <div class="right-h">
            <button class="btn">Join Now</button>

            <div class="heart-rate">
                <img :src="Heart" alt="">
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </div>

            <img :src="hero_image" alt="" class="hero-image">
            <img :src="hero_image_back" alt="" class="hero-image-back">

            <div class="calories">
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
import hero_image from '../assets/hero_image.png';
import hero_image_back from '../assets/hero_image_back.png';
import Heart from '../assets/heart.png';
import Calories from '../assets/calories.png'

export default {
    components :{
        HeaderSection
    },
    data() {
        return {
            hero_image : hero_image,
            hero_image_back : hero_image_back,
            Heart : Heart ,
            Calories : Calories
        }
    }
}
</script>
<style>
    .hero {
        display:flex;
        justify-content: space-between;
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
        top:10rem;
        right: 8rem;
        width: 23rem;
    }
    .hero-image-back {
        position: absolute;
        top: 4rem;
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
</style>