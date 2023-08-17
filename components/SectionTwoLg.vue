<template>
    <div class="s-two-main-lg flex justify-between px-4   py-4 pb-12 ">
        <div class="left-side  flex flex-col ">
            <div class="project-cont-lg" v-for="project in projects">
                <p class="project-title-lg py-2">{{ project.name }}</p>
                <p class="project-desc ">{{ project.description }}</p>
                <div class="btns-cont flex justify-center align-center gap-3 mx-2">
                    <v-btn density="comfortable" prepend-icon="mdi:mdi-github"> View on Github</v-btn>
                    <v-btn density="comfortable" append-icon="mdi:mdi-open-in-new"> More infos</v-btn>
                </div>
            </div>
        </div>

        <div class="right-side">
            <div class="imgs-cont">
                <div class="img-cont-lg" v-for="project in projects"><img :src="`${project.image}`" alt=""></div>
            </div>

        </div>
    </div>
</template>

<script setup >
import projects from "~/assets/projects.json";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


let ctx;

onMounted(() => {


    ctx = gsap.context((self) => {
        const details = gsap.utils.toArray(".project-cont-lg:not(:first-child)")
        const photos = gsap.utils.toArray(".img-cont-lg:not(:first-child)")


        gsap.set(photos, { yPercent: 101 })

        const allPhotos = gsap.utils.toArray(".img-cont-lg")


        // create
        let mm = gsap.matchMedia();

        // add a media query. When it matches, the associated function will run
        mm.add("(min-width: 765px)", () => {

            // this setup code only runs when viewport is at least 600px wide
            console.log("desktop")

            ScrollTrigger.create({
                trigger: ".s-two-main-lg",
                start: "top top",
                end: "bottom bottom",
                pin: ".right-side"
            })




            details.forEach((detail, index) => {

                let headline = detail.querySelector(".project-title-lg")

                let animation = gsap.timeline()
                    .to(photos[index], { yPercent: 0 })
                    .set(allPhotos[index], { autoAlpha: 0 })
                ScrollTrigger.create({
                    trigger: headline,
                    start: "top 80%",
                    end: "top 50%",
                    animation: animation,
                    scrub: true,
                    markers: false
                })
            })



            return () => { // optional
                // custom cleanup code here (runs when it STOPS matching)
                console.log("mobile")
            };
        });
    })
});
onUnmounted(() => {
    ctx.revert(); // <- Easy Cleanup!
});




</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

.s-two-main-lg {
    --spacing: 0.2rem;
    position: relative;
    min-height: 100vh;
    overflow: hidden;
}

.project-cont-lg {

    margin-bottom: 12rem;
    color: white;

}

.project-title-lg {
    color: #CBE3EC;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Open Sans';
    font-size: 2rem;

    font-weight: 700;

}

.project-desc {
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Open Sans';
    font-size: 1rem;
    font-style: normal;
    text-align: left;
    font-weight: 700;
}

.btns-cont {
    margin-top: 30vh;
}

.imgs-cont {
    overflow: hidden;
    position: relative;
    width: clamp(400px, 40vw, 700px);
    aspect-ratio: 1 / 1;

}

.img-cont-lg {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;

}

.img-cont-lg>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>