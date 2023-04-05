<template>
    <div class="footer-container">
        <hr/>
        <div class="footer">
            <div class="social-links">
                <img :src="github" alt="">
                <img :src="instagram" alt="">
                <img :src="linkedin" alt="">
            </div>
            <div class="logo-f">
                created by: james matthew &copy;  {{ date }}
            </div>
            </div>
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
    .social-links > img {
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
</style>