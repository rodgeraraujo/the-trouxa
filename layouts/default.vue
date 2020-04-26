<template>
    <div class="transition">
        <Navbar />
        <nuxt />
        <Footer />
    </div>
</template>

<script>
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
    components: {
        Navbar,
        Footer
    }
};
</script>

<style>
html,
body,
.container-table {
    height: 100%;
}

.container-table {
    display: table;
}

.vertical-center-row {
    display: table-cell;
    vertical-align: middle;
}

html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}
</style>
