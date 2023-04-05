<template>
   <div class="Programs" id="programs">

        <div class="programs-header">
            <span class="stroke-text">Explore our</span>
            <span>Programs</span>
            <span class="stroke-text">to shape you</span>
        </div>


        <div class="programs-categories"  >
            <div class="category" v-for="program in programsData" :key="program.heading">
                <img :src="icons[program.id]" alt="">
                <span>{{ program.heading }}</span>
                <span>{{ program.details }}</span>
    
                <div class="join-now"><span>Join Now</span><img src="../assets/rightArrow.png" alt="" srcset=""></div>
            </div>
         
    
        </div>
        



   </div>
</template>
<script>

import { programsData } from '../data/programsData.js'
import dumbell from '../assets/dumbell.png'
import running from '../assets/running.png'
import flame from '../assets/flame.svg'
import heart from '../assets/hearthealth.png'

export default {

    data() {
        return {
            icons : [dumbell,running,flame,heart],
            programsData : programsData

        }
    }
}


</script>
<style>
    .Programs {
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 0 2rem;
    }

    .programs-header {
        display: flex;
        gap: 5rem;
        font-weight: bold;
        font-size: 3rem;
        justify-content: center;
        color: white;
        text-transform: uppercase;
        font-style: italic;
    }

    .programs-categories {
       display: flex;
        gap: 1rem;
    }
    .category {
        display: flex;
        flex-direction: column;
        background-color: gray;
        padding: 2rem;
        color: white;
        justify-content: space-between;
    }
    .category>:nth-child(1){
    
        width: 2rem;
        height: 2rem;
        fill:white;
    }
    .category>:nth-child(2){
        margin-top: 1rem;
        font-size: 1rem;
        font-weight: bold;
    }
    .category>:nth-child(3){
        margin-top: 2rem;
        font-size: 0.9rem;
        line-height: 25px;
    }
    .join-now {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    .join-now>img {
        width: 1rem;
    }
    .category:hover {
        background: var(--planCard);
        cursor: pointer;
    }
</style>