<template>
    <div>
        <div class="s-one-main flex justify-evenly gap-20 mt-20">
            <div class="infos-cont">
                <div class="background-cont">
                    <div class="text-cont">
                        <div class="title sm:text-4xl">Hi, I'm <span class="accent">ABDELLAH</span> </div>
                        <div class="text-2xl text-left">Aspiring web developer eager to seize the opportunity to learn, grow, and collaborate closely
                            with
                            other talented developers and enthusiastic managers.</div>

                        <div class="btn-cont flex gap-2 justify-center mt-4 flex-wrap-reverse">
                            <a href="#section-two"> <v-btn class="btn-outlined border-dashed" variant="outlined"
                                    prepend-icon="mdi:mdi-arrow-down">view
                                    my projects</v-btn></a>
                            <NuxtLink class="link" to="https://github.com/3aluw" target="_blank" rel="noopener">
                                <v-btn append-icon="mdi:mdi-github">visit my Github</v-btn>
                            </NuxtLink>
                        </div>
                    </div>

                </div>

            </div>
            <div class="pic-cont">
                <img src="~/assets/face.png" alt="my personal picture">
            </div>

        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
@import url('https://fonts.cdnfonts.com/css/dubai');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap');

.accent {
    color: var(--green-accent);
}

.s-one-main {
    background: unset;
    max-height: 22.5rem;
    margin-bottom: 2rem;
}

.infos-cont {
    max-width: 50vw;
}

.background-cont {
    background: rgba(146, 138, 155, 0.06);
    gap: 1rem;
    height: calc(100% - 2rem);
        display: flex;
    justify-content: center;
}

.text-cont {
    color: white;
    position: relative;
    padding-block: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-family: 'Dubai', 'Roboto Slab', sans-serif;
    text-align: center;
    padding-inline: 3rem;
}

.text-cont>.title {
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2.5rem;
    font-family: 'Roboto Slab', 'Dubai', sans-serif;
    white-space: nowrap;

}

.pic-cont {
    transform: translateY(-1.5rem);
    width: clamp(200px, 26rem, 50%);
}

img {
    height: 100%;
}

.v-btn {
    font-size: 0.75rem;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    text-transform: lowercase;
    background: var(--green-accent);
    color: white;
    flex-wrap: wrap-reverse;
}

.btn-outlined {
    background-color: unset;
    color: white !important;
    border-color: var(--green-accent);
    border-width: 1.5px;
}
</style>