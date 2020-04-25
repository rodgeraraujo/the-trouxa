<template>
    <div class="container">
        <div>
            <div class="links">
                <Quote />
            </div>
        </div>
    </div>
</template>

<script>
import Quote from "~/components/Quote.vue";

export default {
    components: {
        Quote
    }
};
</script>

<style>
.container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>
