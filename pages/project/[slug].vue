
<template>

    <div class="cont">
        <h1 class="text-center title py-8"> {{ projectObject.name }} </h1>
        <div class="tech-used flex justify-between items-center pr-6 ">
            <div class="tech flex gap-2"> Highlights of the tech used :
                <img src="~/assets/logos/TypeScript.svg" alt="" width="20" height="20">
                <img src="~/assets/logos/nuxt.svg" alt="" width="20" height="20">
                <img src="~/assets/logos/contentful.png" alt="" width="20" height="20">
                <img src="~/assets/logos/deskree.png" alt="" width="20" height="20">
                <img src="~/assets/logos/daisyui.png" alt="" width="20" height="20">
            </div>
            <NuxtLink v-if="projectObject.demoLink" :to="projectObject.demoLink" target="_blank" rel="noopener"> <v-btn density="comfortable"
                    append-icon="mdi:mdi-play-outline" variant="outlined"> live
                    Demo</v-btn></NuxtLink>
            <NuxtLink v-else :to="projectObject.demoLink" target="_blank" rel="noopener"> <v-btn density="comfortable"
                    prepend-icon="mdi:mdi-github" variant="outlined"> view on Github</v-btn></NuxtLink>
        </div>
        <main class="main-content pb-8">
            <div>
                <h2>Motivation:</h2>
                <p>{{ projectObject.motivation }}</p>
            </div>
            <div>
                <h2>main features:</h2>
                <v-list bg-color="#FAFAFA" >
                    <v-list-item  v-for="feature in projectObject.features" ><v-icon icon="mdi:mdi-plus"></v-icon> {{ feature }}</v-list-item>
                </v-list>
            </div>
            <div>
                <h2>Challenges</h2>
                <ul>
                    <li v-for="challenge in projectObject.challenges">
                        <h3>{{ challenge.title }}</h3>
                        <p>{{ challenge.text }}</p>
                    </li>
                </ul>
            </div>
            <div>
                <h2>possible improvements:</h2>
                <ul>
                    <li v-for="improvement in projectObject.improvements">
                        <h3>{{ improvement.title }}</h3>
                        <p>{{ improvement.text }}</p>
                    </li>
                </ul>

            </div>

        </main>
    </div>
</template>
<script setup>
import { projects } from "~/data/data"
const route = useRoute()
const urlSlug = route.params.slug
const projectObject = computed(() => projects.find(obj => obj.slug === urlSlug))

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua&family=Inter:wght@700&display=swap');

.cont {
    max-width: 850px;
    padding-inline: 1rem;
    margin: 0 auto;
    background-color: #FAFAFA;
    color: #2B2B2B;
}

.title {
    color: #3A2E5D;
    font-family: 'Inter';
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.tech-used {
    color: #000;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-bottom: 1rem;
    border-bottom: solid 1px black;
}

.main-content h2 {
    color: #3A2E5D;
    font-family: 'Inknut Antiqua';
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 2rem;

}

.main-content h3 {
    font-size: 1.1rem;
    font-weight: 700;
    font-family: "inter" "serif";
    padding-top: 0.5rem;
}
</style>