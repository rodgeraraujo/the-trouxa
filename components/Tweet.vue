<template>
    <div>
        <vue-goodshare-twitter
            button_design="gradient"
            page_url="https://vuejsfeed.com/"
            has_icon
            has_square_edges
        ></vue-goodshare-twitter>
    </div>
</template>

<script>
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";

export default {
    components: {
        VueGoodshareTwitter
    }
};
</script>

<style>
</style>