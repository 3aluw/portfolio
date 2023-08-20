<template>
    <div class="cont">
        <h1 class="text-center title"> Visit Algeria </h1>
        <div class="tech-used flex justify-center items-center gap-4 mt-8">
            <div class="tech flex gap-2">Highlights of the tech used :
                <img src="~/assets/logos/Typescript.svg" alt="" width="20" height="20">
                <img src="~/assets/logos/Vuetify.svg" alt="" width="20" height="20">
                ر <img src="~/assets/logos/nuxt.svg" alt="" width="20" height="20">
                ر <img src="~/assets/logos/materiald.png" alt="" width="20" height="20">
            </div>
            <NuxtLink :to="projectObject.demo" target="_blank" rel="noopener"> <v-btn density="comfortable"
                    append-icon="mdi:mdi-play-outline" variant="outlined"> live
                    Demo</v-btn></NuxtLink>
        </div>
        <main class="main-content">
            <div>
                <h2>Motivation:</h2>
                <p>While I was in the process of arranging a competition for my students, the task of manually tracking the
                    progress of each individual team on paper caused an idea to spark within me: why not create an
                    interactive digital leaderboard instead?</p>
            </div>
            <div>
                <h2>Challenges</h2>
                <ul>
                    <li>
                        <h3>Sounds</h3>
                        <p>The inclusion of playful sounds to enrich the interactive experience became an exciting yet
                            time-consuming task. It was about searching for the perfect sound effects, organizing them in
                            folders, and
                            ensuring their timely playback after importing them in the project.</p>
                    </li>

                </ul>
            </div>
            <div>
                <h2>possible improvements:</h2>
                <ul>
                    <li>
                        <h3>Round-based games </h3>
                        <p>This enhancement could introduce a new layer of engagement, making each phase of the competition
                            even more exhilarating.</p>
                    </li>
                    <li>
                        <h3>Flexible game Modifications</h3>
                        <p> Empowering educators to tailor the leaderboard according to specific scenarios is a pivotal
                            advancement. ie: adding the ability to add or deduct bonus points under specific conditions</p>
                    </li>
                </ul>
            </div>

        </main>
    </div>
</template>
<script setup >
import projects from "~/assets/projects.json";
const route = useRoute()
const projectRoute = route.path.replace("/project", "")
const projectObject = projects.find((project) => project.url === projectRoute)

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua&family=Inter:wght@700&display=swap');

.cont {
    max-width: 850px;
    padding-inline: 1rem;
    margin: 0 auto;
    background: #F5F4F4;
}

.title {
    color: var(--green-accent);
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
    color: #000;
    font-family: 'Inknut Antiqua';
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 2rem;
    padding-bottom: 1rem;
}

.main-content h3 {
    font-size: 1.1rem;
    font-weight: 700;
    font-family: "inter" "serif";
    padding-top: 0.5rem;
}
</style>