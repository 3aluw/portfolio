<template>
    <div class="cont">
        <h1 class="text-center title pt-4"> Visit Algeria </h1>

        <div class="tech-used flex justify-center items-center gap-4 mt-8">
            <div class="tech flex gap-2">Highlights of the tech used :
                <img src="~/assets/logos/Figma.svg" alt="" width="20" height="20">
                <img src="~/assets/logos/contentful.png" alt="" width="20" height="20">
                <img src="~/assets/logos/swiper.svg" alt="" width="20" height="20">
            </div>
            <NuxtLink :to="projectObject.demo" target="_blank" rel="noopener"> <v-btn density="comfortable"
                    append-icon="mdi:mdi-play-outline" variant="outlined"> live
                    Demo</v-btn></NuxtLink>
        </div>

        <main class="main-content pb-8">
            <div class="motivation">
                <h2>Motivation:</h2>
                <p>Algeria, a vast and captivating country, is a treasure trove of natural beauty, rich history, and diverse
                    cultures. However, the allure of this land often remains unexplored by the global tourist community. My
                    motivation for "Visit Algeria" stemmed from the desire to unveil the splendor of Algeria, showcasing its
                    stunning landscapes, cities, and cultural heritage. Moreover, I recognized the lack of
                    accessible platforms that introduce travelers to Algeria, which further fueled my
                    determination to create an informative website.</p>
            </div>
            <div class="challenges">
                <h2>Challenges</h2>
                <p>
                    this project marked my initial touch to web design, as IT was teh first time I use Figma to design a
                    website from scratch, and challenges were plentiful. Here are some of
                    the key hurdles :
                <ul>
                    <li>
                        <h3> Design and UI/UX</h3>
                        <p> Crafting an intuitive and visually pleasing user interface was a significant challenge. Deciding
                            on a color palette and arranging the content (espiecally cities) seamlessly required
                            careful consideration as I revised teh Ui several times, as I was't happy even with the final
                            design.</p>

                    </li>
                    <li>
                        <h3>Data Integration</h3>
                        <p> an Algerian news API to provide users with up-to-date informations to the users. However,
                            sourcing a suitable
                            API proved to be a time-consuming task due to limited suitable options available.</p>
                    </li>
                </ul>
                </p>
            </div>
            <div class="improvments">
                <h2>possible improvments:</h2>
                <p>
                <ul>
                    <li>
                        <h3>A full redesign</h3>
                        <p>As I said earlier, I may have to enhance the aesthetics and user experience . Employing a refined
                            color palette</p>
                    </li>

                    <li>
                        <h3>Expanded Destination Coverage</h3>
                        <p> Broadening the range of featured destinations will provide travelers with a more comprehensive
                            view of Algeria's offering</p>
                    </li>
                    <li>
                        <h3>Ready-to-Use Travel Plans</h3>
                        <p>Introducing pre-designed travel plans tailored to different preferences and durations can
                            simplify the planning process for users,</p>
                    </li>
                    <li>
                        <h3>Cost Estimator</h3>
                        <p>Algeria is a cheap place relatively, but a cost estimator will empower travelers to budget
                            effectively</p>
                    </li>

                    <li>
                        <h3>Personalized Travel Guide Services</h3>
                        <p>curate personalized plans based on individual preferences will add a personal touch to the user
                            experience.</p>
                    </li>
                </ul>
                </p>
            </div>

        </main>
    </div>
</template>
<script setup>
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
}

.main-content h3 {
    font-size: 1.1rem;
    font-weight: 700;
    font-family: "inter" "serif";
    padding-top: 0.5rem;
}
</style>