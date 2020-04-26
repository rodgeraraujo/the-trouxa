<template>
    <div class="container transition">
        <div>
            <div class="links">
                <div v-if="loading">
                    <img class="loading" src="/loading.gif" alt />
                </div>
                <div v-else>
                    <Quote :quote="databaseQuote" />
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
                })
                .catch(error => {
                    console.log(error);
                });
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
