<template>
    <div class="Join" id="join-us">
        <div class="left-j">
            <hr/>
            <div>
            
                <span class="stroke-text">READY TO </span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY </span>
                <span class="stroke-text">WITH US?</span>
            </div>
        </div>
        <div class="right-j">
            <form ref="form" action="" class="email-container" @submit.prevent="sendEmail">
                <input type="email" name="user_email" placeholder="Enter your Email address">
                <button class="btn btn-j">Join Now</button>
            </form>
        </div>
    </div>
</template>
<script>
import emailjs from '@emailjs/browser';

export default {
    methods: {
    sendEmail() {
      emailjs.sendForm('service_j5dz7zd', 'template_zkcqy1s', this.$refs.form, 'QRbfeFxRgv-kjdGRe')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}
</script>
<style>
    .Join {
        margin-top: 5rem;
        display: flex;
        padding: 0 2rem;
        gap: 10rem;
 
        justify-content: center;
    }
    .left-j {
        color: white;
        font-size: 3rem;
        font-weight: bold;
        text-transform: uppercase;
        position: relative;
    }

    .left-j>hr{
        position: absolute;
        width: 10.5rem;
        border: 2px solid var(--orange);
        border-radius: 20%;
        margin: -10px 0;
    }
    .right-j{
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    .email-container {
        display: flex;
        gap: 3rem;
        background-color: gray;
        padding: 1rem 2rem;
    }

    .email-container>input {
        background-color: transparent;
        border: none;
        outline: none;
        color: var(--lightgray);
    }

    ::placeholder{
        color: var(--lightgray);
    }

    .btn-j {
        background-color: var(--orange);
        color: white;
    }

@media only screen and (max-width: 768px) {
    .Join{
        margin-top: 30rem;
        flex-direction: column;
        gap: 5rem;

    }
    .left-j{
        font-size: x-large;
        flex-direction: column;
    }
    .right-j {
        padding: 2rem;
    }
}


@media only screen and (min-width: 768px) and (max-width: 1024px) {
    .Join{
        margin-top: 25rem;
        flex-direction: column;
        gap: 5rem;
        text-align: center;

    }
    .left-j{
        font-size: x-large;
        flex-direction: column;
    }
    .right-j {
        padding: 2rem;
    }
    .left-j>hr{
        margin-left: 25%;
        margin-right: 25%;
        width: 50%;
    }
}

@media only screen and (min-width: 1024px ) and (max-width: 1200px) {
    .Join{
        margin-top: 15rem;


    }

    }
</style>