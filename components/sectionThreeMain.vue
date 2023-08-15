<template>
    <div class="s-three-main my-4 mx-10 pl-12 pr-4 pt-20 pb-8">
        <div class="sentence-cont flex mt-4" v-for="(sentence, index) in sentences">
            <div class="num">{{ index + 1 }}.</div>
            <p> {{ sentence }} </p>
        </div>

    </div>
</template>


<script setup lang="ts">
import sentences from "~/assets/aboutMe.json"

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Fira+Mono&display=swap');

.s-three-main {
    background: url("~/assets/coding-bg.svg");
    background-size: cover;

}

.num {
    color: #0ACF83;
    font-family: 'Fira Code';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 159.305%;
    border: 1px solid #0ACF83;
    display: flex;
    justify-content: center;
    align-content: center;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    height: 3rem;
}

.sentence-cont p {
    align-self: flex-end;
    color: #707070;
    font-family: 'Fira Mono';
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 400;
    margin-inline-start: 0.8rem;
}
</style>
