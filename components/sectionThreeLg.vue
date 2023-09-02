<template>
    <div class="my-8">
        <div class="s-three-main mx-8 flex justify-between ">
            <div class="flex flex-col justify-around text-cont">
                <div class="sentence-cont flex " v-for="(sentence, index) in sentences">
                    <img :src="icons[index]" class="w-4 icon">

                    <p> {{ sentence }} </p>
                </div>
            </div>
            <div class="pic-cont"><img src="~/assets/developer.png" alt=""></div>

        </div>
    </div>
</template>


<script setup lang="ts">
import sentences from "~/assets/aboutMe.json"
import eye from "~/assets/icons/eye.svg"
import heart from "~/assets/icons/heart.svg"
import backend from "~/assets/icons/backend.svg"
import search from "~/assets/icons/search.svg"
import web from "~/assets/icons/web-3.svg"
import cat from "~/assets/icons/cat.svg"
import ball from "~/assets/icons/ball.svg"


const icons = [eye, heart,
    backend,
    search,
    web,
    cat,
    ball
]


const writtenSentences: Ref<string[]> = ref([]);




import gsap from 'gsap';
let ctx: any;

onMounted(() => {
    ctx = gsap.context((self) => {
        gsap.from(".icon", {
            xPercent: -200,
            duration: 0.3,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".sentence-cont",
                markers: false,
                start: "bottom top",


            }
        })

    }); // <- Scope!
});

onUnmounted(() => {
    ctx.revert(); // <- Easy Cleanup!
});

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Fira+Mono&display=swap');

.s-three-main {

    margin: 0 auto;


}

.text-cont {
    background: linear-gradient(180deg, rgba(33, 7, 52, 0.46) 0%, rgba(33, 7, 52, 0.40) 100%);
    box-shadow: -5px 5px 4px 0px rgba(255, 255, 255, 0.25);
    padding-inline: 1rem;
    overflow: hidden;
}



.sentence-cont p {
    align-self: flex-end;
    color: white;
    font-family: 'Fira Mono';
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 400;
    margin-inline-start: 0.8rem;
}

.sentence-cont img {
    min-width: 1rem;
}

.pic-cont {
    width: min(31rem, 40%);
    transform: translateY(-2rem);
}

.pic-cont img {
    width: 100%;
}
</style>
