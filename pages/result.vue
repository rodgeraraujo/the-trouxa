<template>
    <div class="container transition">
        <div>
            <div class="links">
                <div v-if="loading">
                    <img class="loading" src="/loading.gif" alt />
                </div>
                <div v-else>
                    <Quote :quote="quote" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Quote from "~/components/Quote.vue";
import firebase from "@/plugins/firebase";

const quoteData = require("../data/data.json");
const emoji = require("emoji.json");

export default {
    components: { Quote },
    data() {
        return {
            quotes: [],
            quote: Object,
            databaseQuote: Object,
            loading: true
        };
    },
    middleware: "redirect",
    components: {
        Quote
    },
    mounted() {
        this.quotes = quoteData.sentences;
        var choice = Math.floor(Math.random() * this.quotes.length);

        this.quote = {
            name: this.$route.query.name,
            text: this.quotes[choice],
            emoji: emoji[choice].char,
            image: this.$route.query.url
        };

        this.storeData(this.quote);
    },
    methods: {
        storeData(obj) {
            this.databaseQuote = {
                uid: this.uuidv4().replace(/-/g, ""),
                name: obj.name,
                text: obj.text,
                emoji: obj.emoji,
                created_at: new Date()
            };

            firebase
                .database()
                .ref("texts")
                .push()
                .set(this.databaseQuote)
                .then(() => {
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error);
                    this.$router.push({ path: "/" });
                });
        },
        uuidv4() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                /[xy]/g,
                function(c) {
                    var r = (Math.random() * 16) | 0,
                        v = c == "x" ? r : (r & 0x3) | 0x8;

                    return v.toString(16);
                }
            );
        }
    }
};
</script>

<style scoped>
.loading {
    width: 50px;
}
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
