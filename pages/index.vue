<template>
    <div class="container">
        <p class="instructions">porque você um trouxa? digite seu nome e descubra</p>
        <form @submit.prevent="formSubmit">
            <div>
                <label for="name">Seu nome:</label>
                <br />
                <br />
                <input id="name" type="text" v-model="name" placeholder="teu nome trouxa" required />
            </div>
            <button :class="[name ? activeClass : '']" type="submit">descobrir</button>
        </form>
    </div>
</template>

<script>
import Quote from "~/components/Quote.vue";

export default {
    data() {
        return {
            name: ""
        };
    },
    components: {
        Quote
    },
    methods: {
        formSubmit() {
            alert(this.name);
            // axios
            //     .post("//jsonplaceholder.typicode.com/posts", {
            //         userID: this.userID,
            //         name: this.name,
            //         email: this.email,
            //         firstSon: this.firstSon
            //     })
            //     .then(response => {
            //         // console.log(response);
            //         // this.response = response.data
            //         this.success = "Data saved successfully";
            //         this.response = JSON.stringify(response, null, 2);
            //     })
            //     .catch(error => {
            //         this.response = "Error: " + error.response.status;
            //     });
            // this.name = "";
            // this.email = "";
            // this.firstSon = "";
        }
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

form {
    width: 500px;
    padding: 10px 40px;
}

/* form label {
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 13px;
    letter-spacing: 0.03em;
    font-weight: bold; 
}*/

input {
    font-size: 20px;
    border: 1px solid #ccc;
    color: #333;
    width: calc(100% - 30px);
}
input,
button {
    border-radius: 4px;
    padding: 8px 15px;
    font-family: "Work Sans", sans-serif;
    font-weight: 300;
}
div {
    position: inherit;
    padding-top: 10px;
}

button {
    background-color: #ff6b6b;
    border-radius: 5px;
    border: 1px solid #fa6363;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 17px;
    padding: 5px 31px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #c95858;
    margin: 15px;
}

button:hover {
    transform: translateY(2px);
}

@media only screen and (max-width: 600px) {
    .image {
        width: 100%;
        height: auto;
    }

    .instructions {
        margin: 40px;
        top: 24%;
        position: absolute;
        left: 0px;
    }

    div {
        position: inherit;
        top: 100px;
        bottom: 100px;
        padding-top: 22px;
    }
}
</style>
