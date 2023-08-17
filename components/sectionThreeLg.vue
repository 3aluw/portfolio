<template>
    <div class="my-8">
        <div class="s-three-main mx-8 flex justify-between ">
            <div class="flex flex-col justify-around text-cont">
                <div class="sentence-cont flex mt-4" v-for="(sentence, index) in sentences">

                    <p> {{ sentence }} </p>
                </div>
            </div>
            <div class="pic-cont"><img src="~/assets/developer.png" alt=""></div>

        </div>
    </div>
</template>


<script setup lang="ts">
import sentences from "~/assets/aboutMe.json"

const writtenSentences: Ref<string[]> = ref([]);


/*
const writer = () => {
    sentences.forEach((sentence, index) => {
        let i = 0;
        let writtenSentenceArray: string[] = []
        const stringWriter = () => {
            if (i < sentence.length) {

                writtenSentenceArray.push(sentence[i])
                writtenSentences.value[index] = writtenSentenceArray.join('');
                i++
                setTimeout(stringWriter, 50)
            }
            else return
        }
        stringWriter()

    })
    ctx.revert();
    return undefined
}

import gsap from 'gsap';
let ctx: any;

onMounted(() => {
    ctx = gsap.context((self) => {
        gsap.from(".logo", {
            xPercent: -200,
            rotation: 90,
            duration: 5,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".sentence-cont",
                markers: true,
                start: "bottom top",
             

            }
        })

    }); // <- Scope!
});

onUnmounted(() => {
    ctx.revert(); // <- Easy Cleanup!
});
*/
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
}

.icon {
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
    aspect-ratio: 1 / 1
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

.pic-cont {
    width: min(31rem, 40%);
    transform: translateY(-2rem);
}

img {
    width: 100%;
}
</style>
