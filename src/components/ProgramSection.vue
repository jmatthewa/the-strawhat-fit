<template>
   <div class="Programs" id="programs">

        <div class="programs-header">
            <span class="stroke-text">Explore our</span>
            <span>Programs</span>
            <span class="stroke-text">to shape you</span>
        </div>


        <div class="programs-categories"  >
            <div class="category" v-for="program in programsData" :key="program.heading"
            
            @click="scroll('join-us')">
                
                <img :src="require(`../assets/${program.fileName}`)">

                <span>{{ program.heading }}</span>
                <span>{{ program.details }}</span>
    
                <div class="join-now"><span>Join Now</span><img src="../assets/rightArrow.png" alt="" srcset=""></div>
            </div>
         
    
        </div>
        



   </div>
</template>
<script>

import { programsData } from '../data/programsData.js'


export default {

    data() {
        return {

            programsData : programsData

        }
    },
    methods: {
        scroll(id) {
   
            const element = document.getElementById(id);
            element.scrollIntoView({ behavior: 'smooth' });

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
        margin-right: 10%;
        margin-left: 10%;
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

    @media only screen and (max-width: 768px) {
        .Programs {
            margin-left: 0;
            margin-right: 0;
        }
        .programs-header{
            flex-direction: column;
            gap: 1rem;
            font-size: x-large;
            align-items: center;
            justify-content: center;
            margin-top: 2rem;
            
        }

        .programs-categories{
            flex-direction: column;
            
        }
        
    }
    
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        .Programs {
            margin-top: 10rem;
            margin-left: 0;
            margin-right: 0;
        }
        .programs-header{
           
            flex-direction: column;
            gap: 1rem;
            font-size: xx-large;
            align-items: center;
            justify-content: center;
    
            margin-bottom: 4rem;
            
        }


        .programs-categories{
            flex-direction: column;
            
        }
        .category>:nth-child(1){
            
            width: 2rem;
            height: 2rem;
            fill:white;
        }
        .category {
            margin-left: 5%;
            margin-right: 5%;
            background-color: gray;
            padding: 1rem;

            align-items: center;
        }
    }

    @media only screen and (min-width: 1024px ) and (max-width: 1200px) {
        .Programs {
            margin-top: 10rem;
        }
        .programs-header{
         
           flex-direction: column;
           align-items: center;
            justify-content: center;
            margin-bottom: 5rem;

           
       }

    }

</style>