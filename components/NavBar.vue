<template>
    <nav class="nav">
        <div class="logo">
            <Logo />
        </div>
    </nav>
</template>

<script>
import Logo from "@/components/Logo";

export default {
    components: {
        Logo
    }
};
</script>

<style scoped>
/* * {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 19px;
    text-decoration: none;
    color: #35495e;
    letter-spacing: 1px;
} */

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 70px;
    font-weight: lighter;
    letter-spacing: 0.5px;
}
.nav .logo .subheader {
    opacity: 0.7;
    font-size: 0.9rem;
    color: white;
}
.nav .nav-content {
    font-size: 1rem;
}
.nav-content ul {
    display: flex;
    list-style: none;
}
.nav-content ul li {
    padding: 2px 10px;
}
.nav-content ul li:not(:first-of-type) {
    border-left: 1px solid rgb(255, 255, 255, 0.2);
}
</style>