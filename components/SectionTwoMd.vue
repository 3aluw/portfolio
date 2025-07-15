<template>
    <div class="s-two-main flex flex-col justify-center px-1 gap-8 align-center py-4 pb-12 ">
        <div class="project-cont relative cards-md" v-for="project in projects">
            <div class="img-cont"><img :src="`/project-pics/${project.imageName}`" alt="project semantic image"></div>

            <div class="project-text  px-2 pb-2 text-white">
                <p class="project-title py-2 ">{{ project.name }}</p>
                <p class="project-desc ">{{ project.description }}</p>
                <div class="btns-cont flex justify-start align-center gap-3 mx-2 mt-4">
                    <NuxtLink class="github-link" :to="project.githubLink" target="_blank" rel="noopener"> <v-icon
                            icon="mdi:mdi-github"></v-icon>
                        Code</NuxtLink>
                    <NuxtLink :to="`project/${project.slug}`"> <v-icon icon="mdi:mdi-information-slab-circle" color="white">
                        </v-icon> infos
                    </NuxtLink>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
  import {projects} from "~/data/data"
let ctx:any;
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
onMounted(() => {
    ctx = gsap.context((self) => {


        let mm = gsap.matchMedia();

        // add a media query. When it matches, the associated function will run
        mm.add("(max-width: 768px)", () => {
            ScrollTrigger.batch(".project-cont", {
                once: true,
                start: "top center",
                onEnter: batch => gsap.to(batch, { xPercent: 150 }),

            })



        })
    }); // <- Scope!
});

onUnmounted(() => {
    ctx.revert(); // <- Easy Cleanup!
});

//stacking cards animation
/*
let ctx;

onMounted(() => {
    ctx = gsap.context((self) => {

        const cards = document.querySelectorAll(".project-cont");
        let mm = gsap.matchMedia();

        // add a media query. When it matches, the associated function will run
        mm.add("(max-width: 768px)", () => {
            gsap.from(".project-cont:not(:first-child)", {
                yPercent: () => window.innerHeight,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: ".s-two-main",
                    pin: ".section-two",
                    markers: false,
                    scrub: 1,
                    start: "-100px top",
                    end: "=+2500px"

                }
            })
        })
    }); // <- Scope!
});

onUnmounted(() => {
    ctx.revert(); // <- Easy Cleanup!
});
*/

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

.s-two-main {
    --spacing: 0.2rem;
    position: relative;
    min-height: 100vh;
}

.project-cont {
    width: clamp(250px, 90%, 500px);
    box-shadow: 0px 10px 0px 0px rgba(0, 0, 0, 0.10);
    border-radius: 0.125rem;
    transform: translateX(-150%);

}


.img-cont {
    width: 100%;
    height: 20rem;
    overflow: hidden;

}

.img-cont>img {
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.project-text {
    background: #7662b14f;
    bottom: 0;
    width: 100%;
}

.project-title {
    color: #FFF;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Open Sans';
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 700;

}

.project-desc {
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Open Sans';
    font-size: 0.875rem;
    font-style: normal;
    text-align: left;
    font-weight: 400;
    color: #C6C6C6;
}

.btns-cont {
    font-family: 'Open Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
}



.github-link {
    filter: opacity(0.7);
}
</style>