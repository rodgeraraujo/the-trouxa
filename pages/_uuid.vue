<template>
    <div class="container transition">
        <div>
            <div class="links">
                <div v-if="loading">
                    <img class="loading" src="/loading.gif" alt />
                </div>
                <div v-else>
                    <Quote :quote="databaseQuote" />
                    <br />
                    <div class="row">
                        <div class="col-xs-6" id="tDiv">
                            <strong>descubra pq vc é um trouxa</strong>
                            <button
                                id="tButton"
                                v-on:click="onSubmit"
                                class="localButton"
                            >clica aqui!</button>
                            <br />
                            <br />
                            <p>compartilha com os friends :p</p>
                        </div>
                    </div>
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
                        "Uma forma divertida de descobrir e compartilhar com amigos do twitter, o porque de vocêr ser trouxa."
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
            uuid: this.$route.params.uuid,
            databaseQuote: Object,
            loading: true
        };
    },
    components: {
        Quote
    },
    created() {
        this.retrieveData();
    },
    methods: {
        retrieveData() {
            firebase
                .firestore()
                .collection("texts")
                .where("uuid", "==", this.uuid)
                .get()
                .then(data => {
                    this.loading = false;
                    const doc = data.docs.map(doc => doc.data());
                    this.databaseQuote = doc[0];
                    if (this.databaseQuote == null) {
                        this.$router.push({ path: "/" });
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.$router.push({ path: "/" });
                });
        },
        onSubmit() {
            this.$router.push({ path: "/" });
        }
    }
};
</script>

<style scoped>
.tweet-button {
    display: inline-block;
    width: 55px;
    height: 21px;
    background-image: url(https://help.twitter.com/content/dam/help-twitter/brand/logo.png);
    background-position: 0 0;
}
.tweet-button:hover {
    background-position: 0 -21px;
}
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
