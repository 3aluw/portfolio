<template>
    <div class="s-three-main my-4 pl-12 pr-4 pt-20 pb-8 overflow-hidden">
        <div class="sentence-cont flex mt-4" v-for="(sentence, index) in sentences">
            <div class="num">{{ index + 1 }}.</div>
            <p> {{ writtenSentences[index] }} </p>
        </div>

    </div>
</template>


<script setup lang="ts">
import sentences from "~/assets/aboutMe.json"

const writtenSentences: Ref<string[]> = ref([]);



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
    return undefined
}

import gsap from 'gsap';
let ctx: any;

onMounted(() => {
    ctx = gsap.context((self) => {
        gsap.from(".num", {
            xPercent: -200,
            rotation: 90,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".sentence-cont",
                markers: true,
                start: "bottom bottom",
                onEnter: writer

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
    background: url("~/assets/coding-bg.svg");
    background-size: cover;
    max-width: 600px;
    margin: 0 auto;
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

.num:nth-child(6),
.num:nth-child(7) {
    color: #F24E1E;
    border-color: #F24E1E;
    ;
}
</style>
