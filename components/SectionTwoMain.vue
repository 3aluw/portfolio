<template>
    <div class="s-two-main flex flex-col justify-center px-1 gap-8 align-center py-4 pb-12 md:hidden">
        <div class="project-cont relative cards-md" v-for="project in projects">
            <div class="img-cont"><img :src="`${project.image}`" alt=""></div>

            <div class="project-text absolute bottom-1 pl-4 pb-2 text-white">
                <p class="project-title py-2">{{ project.name }}</p>
                <p class="project-desc ">{{ project.description }}</p>
                <div class="btns-cont flex justify-end align-center gap-3 mx-2">
                    <v-btn density="comfortable" icon="mdi:mdi-github"></v-btn>
                    <v-btn density="comfortable" icon="mdi:mdi-open-in-new"> </v-btn>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import projects from "~/assets/projects.json";
import gsap from 'gsap';
let ctx;

onMounted(() => {
    ctx = gsap.context((self) => {

        const cards = document.querySelectorAll(".project-cont");
        gsap.from(".project-cont:not(:first-child)", {
            yPercent: () => window.innerHeight,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".s-two-main",
                pin: true,
                markers: true,
                scrub: 1,
                start: "top top",
                end: "=+2500px"

            }
        })

    }); // <- Scope!
});

onUnmounted(() => {
    ctx.revert(); // <- Easy Cleanup!
});


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

.s-two-main {
    --spacing: 0.2rem;
    position: relative;
    min-height: 100vh;
}

.project-cont {
    width: clamp(330px, 90%, 500px);
    box-shadow: 7px 7px 16px 0px #00000026;
    background: #FFF;
    position: absolute;
}


.project-cont:nth-child(1) {
    margin-top: calc(var(--spacing)*1);

}

.project-cont:nth-child(2) {
    margin-top: calc(var(--spacing)*2);

}

.project-cont:nth-child(3) {
    margin-top: calc(var(--spacing)*3);
}

.project-cont:nth-child(4) {
    margin-top: calc(var(--spacing)*4);

}

.project-cont:nth-child(5) {
    margin-top: calc(var(--spacing)*5);

}

.project-cont:nth-child(6) {
    margin-top: calc(var(--spacing)*6);

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
    background-color: rgba(0, 0, 0, 0.59);
    bottom: 0;
    width: 100%;
}

.project-title {
    color: #CBE3EC;
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
    font-weight: 700;
}
</style>