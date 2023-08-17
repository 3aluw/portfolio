<template>
    <div>
        <div class="s-one-main flex justify-between gap-20 mt-20">
            <div class="infos-cont">
                <div class="background-cont">
                    <div class="text-cont">
                        <div class="title">Hi I'm <span class="accent">ABDELLAH</span> </div>
                        <div>Aspiring web developer eager to seize the opportunity to learn, grow, and collaborate closely
                            with
                            other talented developers and enthusiastic managers</div>
                        <div class="btn-cont flex gap-2 justify-center mt-4"><v-btn prepend-icon="mdi:mdi-arrow-down">view
                                my
                                projects</v-btn>
                            <v-btn append-icon="mdi:mdi-github">visit my Github</v-btn>
                        </div>
                    </div>

                </div>

            </div>
            <div class="pic-cont">
                <img src="/face.png" alt="">
            </div>

        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
@import url('https://fonts.cdnfonts.com/css/dubai');

.accent {
    color: var(--green-accent);
}

.s-one-main {
    background: unset;
    max-height: 20rem;
    margin-bottom: 2rem;
}

.infos-cont {
    max-width: 50vw;
}

.background-cont {
    background: rgba(56, 30, 77, 0.54);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: calc(100% - 1.5rem)
}

.text-cont {
    transform: translateY(-1rem);
    max-width: 70%;
    color: white;
    border: 1px solid #DBE7ED;
    position: relative;
    padding-block: 2rem;

    font-family: 'Dubai', sans-serif;
    text-align: center;
    padding-inline: 1rem;
}

.text-cont>.title {
    position: absolute;
    top: -1.3rem;
    left: 50%;
    transform: translateX(-50%);
    background: #2A113C;
    font-size: 1.5rem;
    font-family: 'Dubai', sans-serif;
    white-space: nowrap;

}

.pic-cont {
    transform: translateY(-1.5rem);
    width: clamp(200px, 26rem, 40%);
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
}
</style>