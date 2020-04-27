<template>
    <div class="container container-table" id="main">
        <div class="row vertical-center-row">
            <div class="col-md-6 col-md-offset-3">
                <blockquote>
                    <strong>{{ sentence.name }},</strong>
                    você é um trouxa por {{ sentence.text }} {{ sentence.emoji}} 〞
                </blockquote>
                <img :src="sentence.image" alt="Touxa" class="image" width="400" height="200" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sentence: Object
        };
    },
    props: {
        quote: null
    },
    mounted() {
        this.sentence = {
            name: this.$props.quote.name,
            text: this.$props.quote.text,
            emoji: this.$props.quote.emoji,
            image: this.$props.quote.image
        };
    }
};
</script>

