<template>
    <div class="footer-cont">
        <p>happy to hear from you on :</p>
        <div class="links">
            <div class="link">
                <img src="~/assets/logos/linkedin.svg" alt="">
            </div>
            <div class="link"><img src="~/assets/logos/mail.svg" alt=""></div>
            <div class="link"><img src="~/assets/logos/twitter.svg" alt=""></div>
            <div class="link"><img src="~/assets/logos/reddit.svg" alt=""></div>

        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.footer-cont>p {
    background: #061C2D;

    color: white;
    text-align: center;
    padding-block: 2rem;
    text-align: center;
    font-family: 'Courier Prime';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
}

.links {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.link {
    min-height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.link:hover {
    filter: contrast(1.2);

}

.link>img {
    width: 50px;
    height: 50px
}

.link:nth-child(1) {
    background: #1275B1;
    ;
}

.link:nth-child(2) {
    background: #FE2222;
    ;
}

.link:nth-child(3) {
    background: #47ACDF;
}

.link:nth-child(4) {
    background: #FC471E;
}
</style>