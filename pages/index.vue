<template>
    <div class="container">
        <p class="instructions">porque você é um trouxa? digite seu nome e descubra</p>
        <form @submit.prevent="formSubmit">
            <div>
                <label for="name">Seu nome:</label>
                <br />
                <br />
                <input
                    id="name"
                    type="text"
                    v-model="name"
                    placeholder="teu nome aqui trouxa"
                    required
                />
            </div>
            <button type="submit" :disabled="disabled">descobrir</button>
        </form>
    </div>
</template>

<script>
import Quote from "~/components/Quote.vue";

export default {
    head() {
        return {
            title: "The Trouxa App -  Inicial...",
            meta: [
                {
                    name: "twitter:title",
                    content:
                        "The Trouxa - por qual motivo você é um trouxa? descubra"
                },
                {
                    name: "twitter:description",
                    content:
                        "Uma forma divertida de descobrir e compartilhar com amigos do twitter, o porque de você ser trouxa."
                },
                {
                    name: "twitter:image",
                    content:
                        "https://raw.githubusercontent.com/rodgeraraujo/the-trouxa/master/static/logo.jpg?token=AE7AODBDHU5YJHO7DALA3WS6V5ZGO"
                },
                { name: "twitter:card", content: "summary_large_image" }
            ]
        };
    },
    data() {
        return {
            name: "",
            image: "",
            disabled: true
        };
    },
    components: {
        Quote
    },
    methods: {
        formSubmit() {
            this.$store.commit("success");
            this.disabled = true;
            var nameUpper =
                this.name.charAt(0).toUpperCase() + this.name.slice(1);

            this.$router.push({
                path: "/result",
                query: { name: nameUpper, url: this.image }
            });
        },

        async fetchImage() {
            this.disabled = false;
            const imageData = await this.$axios.$get(
                "https://api.imgflip.com/get_memes"
            );
            const images = imageData.data.memes;
            this.image = images[Math.floor(Math.random() * images.length)].url;
        }
    },
    created() {
        this.fetchImage();
    }
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
    div {
        position: inherit;
        top: 100px;
        bottom: 100px;
        padding-top: 22px;
    }
}
</style>
