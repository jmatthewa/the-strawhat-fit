<template>
    <div class="Testimonials">
        <div class="left-t">
            <span>Testimonials</span>
            <span class="stroke-text">What they</span>
            <span>say about us</span>
            <span v-motion 
            :key="selected"
            :initial="{opacity: 0,x: -100}"
            :enter="{
               opacity: 1,
               x: 0,         
              transition: {
                    type: 'spring',
                    duration: 2000
                }
            }">

                {{ testimonialsData[selected].review }}
            </span>
            <span>
                <span style="color: var(--orange)">
                    {{ testimonialsData[selected].name }}
                </span>
                - {{ testimonialsData[selected].status }}
            </span>
        </div>
        <div class="right-t">
            <div  v-motion 
           
            :initial="{
                opacity: 0,
                x: -100
            }"
            :enter="{
               opacity: 1,
               x: 0,         
              transition: {
                    type: 'spring',
                    duration: 2000
                }
            }"></div>
            <div v-motion 
            :initial="{
                opacity: 0,
                x: 100
            }"
            :enter="{
               opacity: 1,
               x: 0,         
              transition: {
                    type: 'spring',
                    duration: 2000
                }
            }"></div>
            <img  v-motion 
            :key="testimonialsData[selected].id"
            :initial="{
                opacity: 0,
                x: 100
            }"
            :animated="{
                opacity: 1,
                x: 0
            }"
            :exit="{
                opacity: 0, 
                x: -100
            }"
             :enter="{
               opacity: 1,
               x: 0,         
              transition: {
                    type: 'spring',
                    duration: 2000
                }
            }"
            :src="require(`../assets/${testimonialsData[selected].imageUrl}`)" >
            
            <div class="arrows">
                <img :src="leftArrow" @click="previous" alt="">
                <img :src="rightArrow" @click="addOne" alt="">
            </div>
        </div>
    </div>
</template>
<script>

import { testimonialsData } from '../data/testimonialsData.js'


import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'

export default {
    data() {
        return {
   
            testimonialsData : testimonialsData,
            selected : 0,
            leftArrow : leftArrow,
            rightArrow : rightArrow
        }
    }, 
    methods: {
        previous() {
            if(this.selected == 0){
          
               this.selected = this.testimonialsData.length -1
            } else {
                this.selected--
                console.log(this.selected);
            }
            
        },
        addOne() {
            if(this.selected == this.testimonialsData.length -1){
                this.selected= 0
           
            }else {
                this.selected++
            }
          
          
        }
    }
    
}
</script>
<style>
    .Testimonials {
        margin-top: 5rem;;
        display: flex;
        gap: 1rem;
        padding: 0 2rem;
        height: 30rem;
    }

    .left-t {
        display: flex;
        flex: 1 1;
        gap: 2rem;
        flex-direction: column;
        text-transform: uppercase;
        color: white;
    }

    .left-t>:nth-child(1){
        color: var(--orange);
        font-weight: bold;
    }

    .left-t>:nth-child(2), 
    .left-t>:nth-child(3){
        font-weight: bold;
        font-size: 3rem;
    }
    .left-t>:nth-child(4){
        text-transform: none;
        text-align: justify;
        letter-spacing: 2px;
        line-height: 40px;
    }
    .left-t>:nth-child(5){
        margin-top: auto;
        align-self: flex-end;
    }

    .right-t {
        flex: 1;
        position: relative;
    }

    .right-t>img {
        position: absolute;
        width: 17rem;
        height: 20rem;
        object-fit: cover;
        right: 8rem;
        top: 2rem;
    }
    .right-t>:nth-child(1){
        position: absolute;
        width: 17rem;
        height: 20rem;
        border: 2px solid orange;
        right: 9rem;
        top: 0.9rem;
    }
    .right-t>:nth-child(2){
        position: absolute;
        width: 17rem;
        height: 19rem;
        right: 7rem;
        top: 4rem;
        background: var(--planCard);


    }

    .arrows {
        display: flex;
        gap: 1rem;
        position: absolute;
        bottom: 1rem;
        left: 3rem;
    }
    .arrows>img {
        width: 1.5rem;
        cursor: pointer;
    }
</style>