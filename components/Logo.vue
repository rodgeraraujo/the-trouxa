<template>
    <div class="logo">
        <nuxt-link class="TheTrouxaLogo img" src="/logo.jpg" tag="img" to="/"></nuxt-link>
        <!-- <img src alt /> -->
    </div>
</template>
<style>
.logo {
    padding-top: -10px;
}
.img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20%;
    height: auto;
}

.TheTrouxaLogo {
    animation: 1s appear;
    margin: auto;
}

@keyframes appear {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@media only screen and (max-width: 600px) {
    .img {
        width: 50%;
        height: auto;
    }
}
</style>
