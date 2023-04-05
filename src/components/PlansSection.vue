<template>
    <div class="plans-containter">
        <div class="blur plans-blur-1"></div>
        <div class="blur plans-blur-2"></div>
        <div class="programs-header">
            <span class="stroke-text">READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span class="stroke-text">NOW WITH US</span>
        </div>

        <div class="plans">
            <div class="plan" v-for="plan in plansData" :key="plan.id">
                <img :src="require(`../assets/${plan.fileName}`)" />
                <span>{{ plan.name }}</span>
                <span>$ {{ plan.price }}</span>

                <div class="features" >
                    <div class="feature" v-for="feature in plan.features" :key="feature">
                        <img src="../assets/whiteTick.png" alt="">
                        <span>{{ feature }}</span>
                    </div>
                </div>

                <div>
                    <span>See more benefits -></span>
                </div>
                <button class="btn"> Join now</button>
            </div>
        </div>
    </div>
</template>
<script>

import { plansData } from '../data/plansData.js'

export default {
    data() {
        return {
            plansData : plansData
        }
    }
}
</script>
<style>

    .plans-container {
        margin-top: -4rem;
        padding: 0 2rem;
        display: flex;
        flex-direction: column;
        gap: 4rem;
        position: relative;
    }
    .plans-blur-1 {
        width: 32rem;
        height: 23rem;
    }
    .plans-blur-2{
        width: 32rem;
        height: 23rem;
        right: -1rem;
    }
    .programs-header {
        margin-top: 3rem;
        gap: 2rem;
    }

    .plans {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;

    }

    .plan {
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        background: var(--caloryCard);
        color: white;
        gap: 2rem;
        padding: 1.5rem;
        width: 15rem;
    }

    .plan:nth-child(2){
        background: var(--planCard);
        transform: scale(1.1);
    }
    .plan > img {
        width: 2rem;
        height: 2rem;
    }
    .plan:nth-child(2)>button{
        color: orange;
    }
    .plan>:nth-child(2){
        font-size: 1rem;
        font-weight: bold;
    }
    .plan>:nth-child(3){
        font-size: 3rem;
        font-weight: bold;
    }
    .plan>:nth-child(5){
        font-size: 0.8rem;
    }
    .features{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .feature{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .feature>img {
        width: 1rem;
    }



</style>