<template>
    <div class="cont">
        <h1 class="text-center title"> E-commerce store </h1>
        <div class="tech-used flex justify-center items-center gap-4 mt-8">
            <div class="tech flex gap-2"> Highlights of the tech used :
                <img src="~/assets/logos/TypeScript.svg" alt="" width="20" height="20">
                <img src="~/assets/logos/nuxt.svg" alt="" width="20" height="20">
                <img src="~/assets/logos/contentful.png" alt="" width="20" height="20">
                <img src="~/assets/logos/deskree.png" alt="" width="20" height="20">
                <img src="~/assets/logos/daisyui.png" alt="" width="20" height="20">
            </div>
            <NuxtLink :to="projectObject.demo" target="_blank" rel="noopener"> <v-btn density="comfortable"
                    append-icon="mdi:mdi-play-outline" variant="outlined"> live
                    Demo</v-btn></NuxtLink>
        </div>
        <main class="main-content">
            <div>
                <h2>Motivation:</h2>
                <p>It all begins around August-September 2022, when the Vue Forge event beckoned. Excitement filled the
                    air as I geared up to participate. However, life had its own plans, and I couldn't follow the event
                    live. So, I decided to tackle the challenge solo, learning from the recorded sessions when
                    needed. My motivation was clear asI wanted to create a functional e-commerce store, far from a mere
                    copy-paste
                    endeavor, as I tried to implement more features as reviews validation, admin panel..</p>
            </div>
            <div>
                <h2>Challenges</h2>
                <ul>
                    <li>
                        <h3>Deciphering the Codebase</h3>
                        <p>he provided boilerplate was the creation of a high-level developer. Understanding the intricate
                            web of components, composables, and state management
                            took time and patience. But every 'aha' moment was worth the struggle</p>
                    </li>
                    <li>
                        <h3>Conquering Deskree</h3>
                        <p>My introduction to Deskree, an impressive SaaS solution.
                            Navigating it meant diving into authentication, databases, API testing via Postman, and
                            more. It felt like riding a bicycle for the first time but it was fun overall as I can see
                            myself discovering new lands in web development</p>
                    </li>
                    <li>
                        <h3>Admin Panel API issue</h3>
                        <p> Crafting an admin panel brought its own set of hurdles. My project suffered a problem with its
                            permissions, I reached out to the Deskree team. </p>
                    </li>
                </ul>
            </div>
            <div>
                <h2>possible improvements:</h2>
                <ul>
                    <li>
                        <h3>Diversify Products</h3>
                        <p>Aiming to broaden my expertise with the CMS I employed (contentful), I may introduce a different
                            category
                            of goods. it will allow testing my familiarity with the platform.
                        </p>
                    </li>
                    <li>
                        <h3>Enhanced Admin Panel</h3>
                        <p> Empowering admins to manage reviews and address user behavior is a priority for every social
                            site on the web.</p>
                    </li>
                    <li>
                        <h3>Site Launch</h3>
                        <p>it may be my gateway to e-commerce. It will be fun to see How can I climb the search engine
                            ladder and test some marketing ideas.</p>
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