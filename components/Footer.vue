<template>
    <div class="footer-cont">
        <p>happy to hear from you on :</p>
        <div class="links">
            <NuxtLink to="https://www.linkedin.com/in/abdellah-houache-479256185/" class="link" target="_blank"
                rel="noopener">
                <div>
                    <img src="~/assets/logos/linkedin.svg" alt="">
                </div>
            </NuxtLink>
            <NuxtLink class="link" to="mailto:2000abdallah2014@gmail.com" target="_blank" rel="noopener">
                <div><img src="~/assets/logos/mail.svg" alt=""></div>
            </NuxtLink>
            <NuxtLink class="link" to="https://twitter.com/3aluwa" target="_blank" rel="noopener">
                <div><img src="~/assets/logos/twitter.svg" alt=""></div>
            </NuxtLink>
            <NuxtLink class="link" to="https://www.reddit.com/user/3aluw" target="_blank" rel="noopener">
                <div><img src="~/assets/logos/reddit.svg" alt=""></div>
            </NuxtLink>

        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.footer-cont>p {
    background: #1d182d;

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
    cursor: pointer;
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

@media(min-width:768px) {
    .footer-cont {
        background: var(--bg-ltr);
        display: flex;
    }

    .footer-cont>p {
        flex-grow: 1;
    }

    .links {
        grid-template-columns: repeat(4, 1fr);
        flex-grow: 1;
    }
}
</style>