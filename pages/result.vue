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
                <br />
                <p>você vai ser redirectionado para compartilhar no twitter em {{ countDown }}s</p>
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
    head() {
        return {
            title: "The Trouxa App -  Resultado...",
            meta: [
                {
                    name: "twitter:title",
                    content:
                        "The Trouxa App - por qual motivo você é um trouxa? descubra"
                },
                {
                    name: "twitter:description",
                    content:
                        "Uma forma divertida de descobrir e compartilhar com amigos do twitter, o porque de você ser trouxa."
                },
                {
                    name: "twitter:image",
                    content:
                        "https://raw.githubusercontent.com/rodgeraraujo/the-trouxa/master/static/logo.jpg?token=AE7AODEDLVREUKQ525VGUE26V5ZYG"
                },
                { name: "twitter:card", content: "summary_large_image" }
            ]
        };
    },
    data() {
        return {
            quotes: [],
            quote: Object,
            databaseQuote: Object,
            loading: true,
            countDown: 10
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

        this.countDownTimer();
    },
    methods: {
        storeData(obj) {
            this.databaseQuote = {
                uuid: this.uuidv4().replace(/-/g, ""),
                name: obj.name,
                text: obj.text,
                emoji: obj.emoji,
                image: obj.image,
                created_at: new Date()
            };

            firebase
                .firestore()
                .collection("texts")
                .add(this.databaseQuote)
                .then(ref => {
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error);
                    this.$router.push({ path: "/" });
                });
        },
        countDownTimer() {
            if (this.countDown > 0) {
                setTimeout(() => {
                    this.countDown -= 1;
                    this.countDownTimer();
                }, 1000);
                console.log(this.countDown);
            } else {
                var text = `${this.databaseQuote.name}, você é um trouxa por ${this.databaseQuote.text} ${this.databaseQuote.emoji}`;
                var urlText = `https://thetrouxa.surge.sh/${this.databaseQuote.uuid}`;

                var url = `https://twitter.com/intent/tweet?hashtags=TheTrouxaApp&hashtags=Trouxa&original_referer=${urlText}&text="${text}"&url=${urlText} `;
                window.location = url;
            }
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
