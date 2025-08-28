<template>
    <div class="s-two-main-lg flex justify-center px-4  pb-12 gap-20">

        <div class="left-side">
            <div class="pin"></div>
            <div class="imgs-cont">
                <div class="img-cont-lg" v-for="project in projects"><img
                 :src="`/project-pics/${project.imageName}`"
                 :srcset="`/project-pics/${project.imageName} 600w,
                 /large-project-pics/${project.imageName} 1024w`"
                 sizes="35vw"
                 loading="lazy"
                 decoding="async"
                        :alt="project.name + 'picture'"></div>
            </div>
        </div>

        <div class="right-side  flex flex-col ">
            <div class="project-cont-lg" v-for="project in projects">
                <p class="project-title-lg md:text-2xl lg:text-4xl">{{ project.name }}</p>
                <p class="project-desc md:text-base lg:text-xl">{{ project.description }}</p>
                <div class="btns-cont flex justify-left gap-3 mx-2 mt-12 ">
                    <NuxtLink v-if="project.githubLink" :to="project.githubLink" target="_blank" rel="noopener"> <v-btn density="comfortable"
                            class="btn-outlined" variant="outlined" prepend-icon="mdi:mdi-github" aria-label="Link"
                            >  on Github</v-btn>
                    </NuxtLink>
                    <NuxtLink v-else :to="project.demoLink" target="_blank" rel="noopener"> <v-btn density="comfortable"
                            class="btn-outlined" variant="outlined" append-icon="mdi:mdi-play" aria-label="Live demo link"
                            > Live demo</v-btn>
                    </NuxtLink>
                    <NuxtLink :to="`project/${project.slug}`"><v-btn density="comfortable"
                            append-icon="mdi:mdi-open-in-new" aria-label="More information about the project">
                            More
                            info</v-btn>
                    </NuxtLink>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { projects } from "~/data/data"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


let ctx: any;

onMounted(() => {

    ctx = gsap.context((self) => {
        const details = gsap.utils.toArray(".project-cont-lg:not(:first-child)") as HTMLBaseElement[]
        const photos = gsap.utils.toArray(".img-cont-lg:not(:first-child)")


        gsap.set(photos, { yPercent: 100 })

        const allPhotos = gsap.utils.toArray(".img-cont-lg")


            // this setup code only runs when viewport is at least 768px wide
            ScrollTrigger.create({
                trigger: ".s-two-main-lg",
                start: "top 10%",
                end: "bottom 90%",
                pin: ".left-side",
            })

            details.forEach((detail, index) => {

                let headline = detail.querySelector(".project-title-lg")

                let animation = gsap.timeline()
                    .to(photos[index]!, { yPercent: 0 })
                    .set(allPhotos[index]!, { autoAlpha: 0 })
                ScrollTrigger.create({
                    trigger: headline,
                    start: "top 70%",
                    end: "top 0%",
                    animation: animation,
                    scrub: true,
                    
                })
            })

            return () => {
                ctx.revert();

            };
   
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
    margin-inline: 1rem;
}

.project-cont-lg {
    color: white;
    border-radius: 5px;
    width: clamp(250px, 35vw, 700px);
    aspect-ratio: 1 / 1;
}

.project-title-lg {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Open Sans';
    font-weight: 700;
}

.project-desc {
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Open Sans';
    font-style: normal;
    text-align: left;
    opacity: 0.8;
}


.left-side {
    max-width: 40vw
}

.imgs-cont {
    overflow: hidden;
    position: relative;
    width: min(35vw, 500px);
    aspect-ratio: 1 / 1;
    border-radius: 25px;
    box-shadow: white 2px 2px 4px 0px;
    margin: 0 auto;
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
    background: var(--blue-accent);
    color: white;
}

.btn-outlined {
    background: unset;
    border-style: dashed;
}

.btn-outlined .v-btn__prepend i {
    color: var(--blue-accent);
}
</style>