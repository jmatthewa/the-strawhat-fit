<template>
    <div class="Reasons" id="reasons">
        <div class="left-r">
            <img :src="image1" alt="" srcset="">
            <img :src="image2" alt="" srcset="">
            <img :src="image3" alt="" srcset="">
            <img :src="image4" alt="" srcset="">
        </div>
        <div class="right-r">
            <span>some reasons</span>

            <div>
                <span class="stroke-text">why</span>
                <span> choose us?</span>
            </div>

            <div class="details-r">
                <div>
                    <img :src="tick" alt="">
                    <span>OVER 140+ EXPERT COACHS</span>
                </div>
                <div>
                    <img :src="tick" alt="">
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div>
                    <img :src="tick" alt="">
                    <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                </div>
                <div>
                    <img :src="tick" alt="">
                    <span>RELIABLE PARTNERS</span>
                </div>
              
            </div>
            <span style="color: var(--gray); font-weight: normal;">OUR PARTNERS</span>

            <div class="partners">
                <img :src="nb" alt="">
                <img :src="adidas" alt="">
                <img :src="nike" alt="">
            </div>
        </div>
    </div>
</template>
<script>

import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import tick from '../assets/tick.png'
import nb from '../assets/nb.png'
import adidas from '../assets/adidas.png'
import nike from '../assets/nike.png'

export default {
    data() {
        return {
            image1 : image1,
            image2 : image2,
            image3 : image3,
            image4 : image4,
            tick : tick,
            nb : nb,
            adidas : adidas,
            nike : nike
        }
    }
}
</script>
<style>
    .Reasons {
        margin-top: 2rem;
        padding: 0 2rem;
        display: flex;
        gap: 2rem;
    }
    .left-r {
        flex: 1 1;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        grid-auto-rows: 1fr;
    }
    .left-r>img {
        object-fit: cover;
    }
    .left-r>:nth-child(1){
        width: 12rem;
        grid-row: 1/3;
        height: 28rem;
    }
    .left-r>:nth-child(2){
       width: auto;
       height: 16rem;
       grid-column: 2/4;
    }
    .left-r>:nth-child(3){
       width: 14rem;
       grid-column: 2/3;
    }
    .left-r>:nth-child(4){
       width: 10rem;
       grid-row: 2;
       grid-column:3/4;
       height: 11.2rem;
    }

    .right-r {
        flex: 1 1;
        text-transform: uppercase;
        gap: 1rem;
        display: flex;
        flex-direction: column;
    }

    .right-r>span {
        font-weight: bold;
        color: var(--orange);
    }

    .right-r>div {
        color: white;
        font-size: 3rem;
        font-weight: bold;
    }
    .details-r{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .details-r>div {
        display: flex;
        font-size: 1rem;
        gap: 1rem;
    }

    .details-r>div>img {
        width: 2rem;
        height: 2rem;
    }

    .partners {
        display: flex;
        gap: 1rem;
    }
    .partners > img {
        width: 2.5rem;
    }
</style>