<template>
    <div class="s-two-main flex flex-wrap justify-center px-1 gap-8 align-center py-4 pb-12 md:hidden">
        <div class="project-cont " v-for="project in projects">
            <div class="img-cont"><img :src="`${project.image}`" alt=""></div>
            <p class="project-title my-2">{{ project.name }}</p>
            <p class="project-desc mt-1">{{ project.description }}</p>
            <div class="btns-cont my-4 flex justify-center align-center flex-wrap gap-3 mx-2">
                <v-btn prepend-icon="mdi:mdi-github" class="project-btn !m-0">View on github</v-btn>
                <v-btn append-icon="mdi:mdi-arrow-right" class="project-btn !m-0"> more infos </v-btn>
            </div>
        </div>
    </div>
</template>

<script setup>
import projects from "~/assets/projects.json";
console.log(projects)



</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

.project-cont {
    min-width: 330px;
    width: 40%;
    box-shadow: 10px 15px 0px 0px #000;
    border-radius: 1.25rem;
    border: 3px solid #A2C1D1;
    background: #FFF;
    background: #FFF;
    text-align: center;
}

.img-cont {
    width: 100%;
    height: 20rem;
    overflow: hidden;
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
    border-bottom: 1px solid black;
}

.img-cont>img {
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.project-title {
    color: #1867C0;
    text-align: center;
    font-family: 'Open Sans';
    font-size: 1.3125rem;
    font-weight: 700;
    display: inline-block;
}

.project-desc {
    color: rgb(136, 135, 135);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Open Sans';
    font-size: 0.875rem;
    font-style: normal;
    text-align: left;
    padding-inline: 1rem;
    font-weight: 700;
}

.project-btn {
    border-radius: 0.3125rem;
    border: 1px solid #39829B;
    background: #DBE7ED;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-inline: 1rem;
    font-size: 0.75rem;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    text-transform: unset !important;
    min-width: 9.5rem;
    justify-content: space-between;
}
</style>