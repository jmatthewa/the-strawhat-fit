<template>
    <div class="footer-container">
        <hr/>
        <div class="footer">
            <div class="social-links">
                <a href="https://github.com/jmatthewa"><img :src="github" alt=""></a>
                <a href=""><img :src="instagram" alt=""></a>
                <a href="https://linkedin.com/in/james-matthew-atanacio-0b0882173"><img :src="linkedin" alt=""></a>
            </div>
            <div class="logo-f">created by: james matthew &copy;  {{ date }}
            </div>
            </div>
            <div class="blur blur-f-1"></div>
            <div class="blur blur-f-2"></div>
    </div>
</template>
<script>

import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'


export default {
    data() {
        return {
            github : github,
            instagram : instagram,
            linkedin : linkedin,
            date : new Date().getFullYear()
        }
    }
}
</script>
<style>
    .footer-container {
        margin-top: 5rem;
        position: relative;
    }
    .footer-container>hr {
        border: 1px solid var(--lightgray);
    }
    .footer {
        padding: 1rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 4rem;
        align-items: center;
        justify-content: center;
        height: 20rem;
    }
    .social-links {
        display: flex;
        gap: 4rem;

    }
    .social-links > a > img {
        width: 2rem;
        height: 2rem;
        cursor: pointer;
    }
    .logo-f {
        color: white;
    }
    .logo-f > img {
        width: 10rem;


    }

    .blur-f-1{
        right: 15%;
        width: 26rem;
        height: 12rem;
        bottom: 0;
        filter: blur(200px);
        background: red;
    }
    .blur-f-2{
        left: 15%;
        width: 26rem;
        height: 12rem;
        bottom: 0;
        filter: blur(200px);
        background: rgb(225, 115, 0)
    }
    @media screen and (max-width: 768px) {
        .logo-f  {
            font-size: small;
        }
        
    }
</style>