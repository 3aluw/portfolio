<template>
    <div class="portfolio-cont">
    <section class="section-one">
        <LogoIcons position="up" />
        <SectionOneMd class="md:hidden" v-if="md" />
        <SectionOneLg class="hidden md:block" v-if="!md" />
        <LogoIcons position="bottom" />
    </section>


    <section class="section-two" id="section-two">
        <p class="s-header accent text-3xl sm:!text-6xl py-8"> SOME PROJECTS</p>
        <SectionTwoMd class="md:hidden" v-if="md" />
        <SectionTwoLg class="hidden md:flex" v-if="!md" />
    </section>

        <section class="section-three">
            <h1 class=" sm:hidden s-header accent text-3xl sm:!text-6xl py-8">ABOUT ME</h1>
            <SectionThree />
        </section>
    </div>
</template>
<script setup lang="ts">

const md = ref(true)
onMounted(() => {
    const matchMd = window?.matchMedia('(max-width: 768px)')
     md.value = matchMd.matches
    matchMd.addEventListener('change', (e) => {  md.value = e.matches })
})




</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap');

.portfolio-cont {
    max-width: 1500px;
    margin-inline: auto;
}

.accent-text {
    color: var(--yellow-accent) !important
}

section {
    padding-block: 2rem;
}

/*section One */
.section-one {
    background: var(--main-bg);
}

.s-header {
    text-align: center;
    color: white;
    font-style: normal;
    margin-block: 2rem;
}

.section-two {
    background: var(--projects-bg);
}

.section-three {
    background: var(--main-bg);
}
</style>