<template>
    <footer class="page-footer green lighten-1">
        <div class="footer-copyright">
            <div class="container">
                Made with
                <strong class="grey-text text-lighten-4 right heart">&nbsp;❤&nbsp;</strong>
                by&nbsp;
                <a
                    class="author"
                    href="https://twitter.com/nik4n"
                >Rogério Araújo</a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.author {
    text-decoration: none;
}

.author:visited {
    color: #01b1ed;
}

.author:hover {
    color: #017096;
    cursor: pointer;
}

.footer-copyright {
    font-size: 18px;
}
.heart {
    color: red;
}
.container {
    height: 50px;
    line-height: 50px;
    padding: 1rem;
    font-size: 15px;
    /* position: fixed; */
    left: 0;
    bottom: 0;
    width: 100%;
    /* background: darkgray; */
    /* color: white; */
    text-align: center;
}
</style>