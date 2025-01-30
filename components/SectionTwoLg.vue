<template>
    <div class="s-two-main-lg flex justify-around px-4 py-4 pb-12 gap-4">
        <div class="left-side  flex flex-col ">
            <div class="project-cont-lg" v-for="project in projects">
                <p class="project-title-lg py-2">{{ project.name }}</p>
                <p class="project-desc ">{{ project.description }}</p>
                <div class="btns-cont flex justify-center align-center gap-3 mx-2">
                    <NuxtLink :to="project.githubLink" target="_blank" rel="noopener"> <v-btn density="comfortable"
                            class="btn-outlined" variant="outlined" prepend-icon="mdi:mdi-github"> View on Github</v-btn>
                    </NuxtLink>
                    <NuxtLink :to="`project${project.slug}`"><v-btn density="comfortable" append-icon="mdi:mdi-open-in-new">
                            More
                            infos</v-btn>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div class="right-side">
            <div class="pin"></div>
            <div class="imgs-cont">
                <div class="img-cont-lg" v-for="project in projects"><img :src="`/project-pics/${project.imageName}`" alt=""></div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
  import {projects} from "~/data/data"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


let ctx:any;

onMounted(() => {


    ctx = gsap.context((self) => {
        const details = gsap.utils.toArray(".project-cont-lg:not(:first-child)") as HTMLBaseElement[]
        const photos = gsap.utils.toArray(".img-cont-lg:not(:first-child)")


        gsap.set(photos, { yPercent: 101 })

        const allPhotos = gsap.utils.toArray(".img-cont-lg")


        // create
        let mm = gsap.matchMedia();

        // add a media query. When it matches, the associated function will run
        mm.add("(min-width: 768px)", () => {

            // this setup code only runs when viewport is at least 600px wide


            ScrollTrigger.create({
                trigger: ".s-two-main-lg",
                start: "top top",
                end: "bottom bottom",
                pin: ".right-side"
            })




            details.forEach((detail, index) => {

                let headline = detail.querySelector(".project-title-lg")

                let animation = gsap.timeline()
                    .to(photos[index]!, { yPercent: 0 })
                    .set(allPhotos[index]!, { autoAlpha: 0 })
                ScrollTrigger.create({
                    trigger: headline,
                    start: "top 80%",
                    end: "top 10%",
                    animation: animation,
                    scrub: true,
                    markers: false
                })
            })



            return () => {
                ctx.revert();

            };
        });
    })
});



</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

.s-two-main-lg {
    --spacing: 0.2rem;
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    max-width: 1400px;
}

.project-cont-lg {

    margin-bottom: 12rem;
    color: white;
    border-radius: 5px;

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
    font-size: 1.4rem;
    font-style: normal;
    text-align: left;
    font-weight: 700;
}

.btns-cont {
    margin-top: 30vh;
}

.right-side {
    max-width: 40vw
}

.imgs-cont {
    overflow: hidden;
    position: relative;
    width: clamp(250px, 35vw, 700px);
    aspect-ratio: 1 / 1;
    border-radius: 25px;
    box-shadow: white 2px 2px 4px 0px;

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

.v-btn {
    background: var(--green-accent);
    color: white;
}

.btn-outlined {
    background: unset;
    border-color: var(--green-accent);
}

.btn-outlined .v-btn__prepend i {
    color: var(--green-accent);
}
</style>