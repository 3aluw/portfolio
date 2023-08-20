<template>
    <div class="cont">
        <h1 class="text-center title"> Calculator for teachers </h1>
        <div class="tech-used flex justify-center items-center gap-4 mt-8">
            <div class="tech flex gap-2">Highlights of the tech used :
                <img src="~/assets/logos/Figma.svg" alt="" width="20" height="20">
                <img src="~/assets/logos/nuxt.svg" alt="" width="20" height="20">
                <img src="~/assets/logos/materiald.png" alt="" width="20" height="20">
            </div>
            <NuxtLink :to="projectObject.demo" target="_blank" rel="noopener"> <v-btn density="comfortable"
                    append-icon="mdi:mdi-play-outline" variant="outlined"> live
                    Demo</v-btn></NuxtLink>
        </div>
        <main class="main-content">
            <div>
                <h2>Motivation:</h2>
                <p>As an educator —a profession I deeply cherish—I encountered a
                    formidable challenge that resonated with my colleagues. Picture this: assessing the academic progress of
                    a class, calculating intricate point systems for each student, and striving for accuracy while avoiding
                    the pitfalls of human error. The daunting task of manually computing scores for 20 students (each one
                    with like 20 small sum calculation to get the final mark )
                    was not just time-consuming; it was an ordeal. A spark ignited within me to
                    transform this cumbersome process into a seamless experience, allowing educators to make those
                    calculations swiftly.</p>
            </div>
            <div>
                <h2>Challenges</h2>
                <p>didn't face a lot of challenges building this web app as it was simple and didn't need any third party
                    libraries/APIs. </p>
            </div>
            <div>
                <h2>possible improvements:</h2>
                <ul>
                    <li>
                        <h3>A mobile app</h3>
                        <p>Visualize an evolved version of the Teacher's Calculator, available as a mobile application. This
                            transition ensures educators have this indispensable tool at their fingertips, whether they're
                            at school,or at home...</p>
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