<template>
    <div class="cont">
        <h1 class="text-center title"> Color palette generator </h1>
        <div class="tech-used flex justify-center items-center gap-4 mt-8">
            <div class="tech flex gap-2">Highlights of the tech used :
                <img src="~/assets/logos/Figma.svg" alt="" width="20" height="20">
                <img src="~/assets/logos/nuxt.svg" alt="" width="20" height="20">
            </div>
            <NuxtLink :to="projectObject.demo" target="_blank" rel="noopener"> <v-btn density="comfortable"
                    append-icon="mdi:mdi-play-outline" variant="outlined"> live
                    Demo</v-btn></NuxtLink>
        </div>
        <main class="main-content">
            <div>
                <h2>Motivation:</h2>
                <p>picture this: I'm working on my first web project, "Visit Algeria," and bam, I hit a wall while picking a
                    color palette. It's like choosing the right colors felt as tough as algebra! But guess what? I stumbled
                    upon a cool API that hands out color palettes ready for websites. That got me thinking—why not help out
                    other devs facing the same struggle? So, my motivation was to make color palette selection a piece of
                    cake for everyone, </p>
            </div>
            <div>
                <h2>Challenges</h2>
                <ul>
                    <li>
                        <h3>the need for a template</h3>
                        <p>I needed a place to apply these colors, so I went scouting for a free and decent HTML/CSS
                            template, After
                            some digging, I got one that fit the bill.</p>
                    </li>
                    <li>
                        <h3>Integrating teh template with Nuxt 3</h3>
                        <p>Integrating the chosen template with Nuxt, my trusty web framework, was trickier than aI thought
                            as the template had its own fancy third-party CSS and JS, mixed up with those CSS variables (oh,
                            the learning opportunity!). So, I had to roll up my sleeves and deal whith that</p>
                    </li>
                </ul>
            </div>
            <div>
                <h2>possible improvments:</h2>
                <ul>
                    <li>
                        <h3>Slick New Templates</h3>
                        <p> giving the user not just one, but a bunch of modern, snazzy templates to try his generated
                            color palette in. that would give teh user more confidence and clarity.</p>
                    </li>
                    <li>
                        <h3>Save teh user to Fav Palettes</h3>
                        <p>
                            why not let the user save his favorite color palettes? as he can always come back to them when
                            inspiration get dry!.
                        </p>
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

}

.main-content h3 {
    font-size: 1.1rem;
    font-weight: 700;
    font-family: "inter" "serif";
    padding-top: 0.5rem;
}
</style>