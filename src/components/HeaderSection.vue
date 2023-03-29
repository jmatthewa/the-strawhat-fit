<template>
   <div class="header">
        <h2 class="logo">James CLub</h2>

        <ul class="header-menu">
            <li>Home</li>
            <li>Program</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>

   </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .header {
        display:flex;
        justify-content: space-between;
    }
    .logo {
        width: 10rem;
        height: 3rem;
    }
    .header-menu {
        list-style: none;
        display: flex;
        gap: 2rem;
        color: white;
    }

    .header-menu > li:hover {
        cursor: pointer;
        color: var(--orange);
    }
</style>