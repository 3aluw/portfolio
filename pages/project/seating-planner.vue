<template>
    <div class="cont">
        <h1 class="text-center title"> Visit Algeria </h1>
        <div class="tech-used flex justify-center items-center gap-4 mt-8">
            <div class="tech flex gap-2">Highlights of the tech used :
                <img src="~/assets/logos/Figma.svg" alt="" width="20" height="20">
                <img src="~/assets/logos/nuxt.svg" alt="" width="20" height="20">
                <img src="~/assets/logos/VueUse.svg" alt="" width="20" height="20">
            </div>
            <NuxtLink :to="projectObject.demo" target="_blank" rel="noopener"> <v-btn density="comfortable"
                    append-icon="mdi:mdi-play-outline" variant="outlined"> live
                    Demo</v-btn></NuxtLink>
        </div>
        <main class="main-content">
            <div>
                <h2>Motivation:</h2>
                <p>Imagine the intricacies of molding a conducive learning environment via positioning students
                    strategically to
                    maximize focus and comprehension. This task, a cornerstone for educators, holds immense significance. As
                    a teacher, I have experienced the power of a well-thought-out seating plan. The motivation? To
                    transform this vital task from a laborious pen-and-paper chore into a seamless digital experience.</p>
            </div>
            <div>
                <h2>Challenges</h2>
                <ul>
                    <li>
                        <h3>The Puzzle of Placement</h3>
                        <p>Designing the initial seating arrangement proved demanding. Determining the optimal positions for
                            each student within the virtual classroom was akin to solving a complex mathematical puzzle.
                            especially that I wanted to offer three different types of plans</p>
                    </li>
                    <li>
                        <h3> Drag-and-Swap dilemma</h3>
                        <p>the implementation of a drag-and-swap functionality emerged as a formidable challenge. After
                            rigorous exploration, I adopted the VueUse UseDraggable composable. However, the road was bumpy,
                            as issues cropped up, revealing the limitations of the chosen approach. just to mention that the
                            <NuxtLink to="https://github.com/vueuse/vueuse/issues/3199">issue</NuxtLink>
                            isn't solved yet
                        </p>
                    </li>
                    <li>
                        <h3>Automated Scroll </h3>
                        <p> I wanted the page to scroll automatically as the user drags a student on the virtual classroom.
                            I
                            figured it out but again I faced an issue with the composable I used</p>
                    </li>
                    <li>
                        <h3>Print Precision</h3>
                        <p>Enabling users to print seating plans proved to be more intricate than I expected. Adapting the
                            output to
                            various playground sizes influenced by the user data required some fine-tuning</p>
                    </li>
                </ul>
            </div>
            <div>
                <h2>possible improvements:</h2>
                <ul>
                    <li>
                        <h3>Alternative Drag-and-Swap Solution</h3>
                        <p>exploring alternate methods for seamless student rearrangement would be pivotal in refining the
                            planner's functionality</p>
                    </li>
                    <li>
                        <h3>upgrade the playground UI</h3>
                        <p>The playground has a simple-white background Ui, It needs to be replaced by a modern one, but I
                            didn't figure it out yet
                        </p>
                    </li>
                    <li>
                        <h3>save for Future Use</h3>
                        <p>allowing users to save and revisit seating plans aligns with the planner's evolution. This
                            functionality
                            would facilitate continuity and flexibility in classroom management for teacher and schools...
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
    padding-bottom: 1rem;
}

.main-content h3 {
    font-size: 1.1rem;
    font-weight: 700;
    font-family: "inter" "serif";
    padding-top: 0.5rem;
}
</style>