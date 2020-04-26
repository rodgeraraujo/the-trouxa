<template>
    <div class="container transition">
        <div>
            <div class="links">
                <Quote :quote="quote" />
            </div>
        </div>
    </div>
</template>

<script>
import Quote from "~/components/Quote.vue";

const quoteData = require("../data/data.json");
const emoji = require("emoji.json");

export default {
    data() {
        return {
            quotes: [],
            quote: Object
        };
    },
    middleware: "redirect",
    components: {
        Quote
    },
    created() {
        this.quotes = quoteData.sentences;
        var choice = Math.floor(Math.random() * this.quotes.length);

        this.quote = {
            name: this.$route.query.name,
            text: this.quotes[choice],
            emoji: emoji[choice].char,
            image: this.$route.query.url
        };
    }
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
    .TheTrouxaLogo {
        margin-top: -40px;
    }
    .logo {
        padding-top: 10px;
    }
    div {
        padding-top: 0;
    }
}
</style>
