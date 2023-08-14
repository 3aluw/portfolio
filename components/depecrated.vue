<template>
    <div class="s-two-main flex flex-col gap-8 align-center">

        <div class="project-cont " v-for="project in projects">
            <div class="img-cont"><img :src="`${project.image}`" alt=""></div>
            <p class="project-title my-2">{{ project.name }}</p>
            <p class="project-desc mt-1">{{ project.description }}</p>
            <div class="btns-cont my-4">
                <v-btn prepend-icon="mdi:mdi-github" class="project-btn m-1">View on github</v-btn>
                <v-btn append-icon="mdi:mdi-arrow-right" class="project-btn m-1"> more infos </v-btn>
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
    width: 90%;
    border-radius: 1.25rem;
    outline: 1px solid #DBE7ED;
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
    color: #39829B;
    text-align: center;
    font-family: Open Sans;
    font-size: 1.3125rem;
    font-weight: 700;
    border-bottom: 1px solid black;
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
}
</style>