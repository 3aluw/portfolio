  <script setup>
  import {projects} from "~/data/data"
  
  const route = useRoute()
  console.log(route.params) // { id: '123' }
  const urlSlug =  route.params.slug
const projectObject = computed(()=>projects.find(obj=> obj.slug === urlSlug))

  </script>
  <template>
    
    <div class="cont">
        <h1 class="text-center title"> {{ projectObject.name }} </h1>
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
                <p>{{ projectObject.motivation }}</p>
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