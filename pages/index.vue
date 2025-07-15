<template>
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
</template>
<script setup lang="ts">

const md = ref(true)
onMounted(() => {
    const matchMd = window?.matchMedia('(max-width: 768px)')
    matchMd.matches ? md.value = true : md.value = false

    matchMd.addEventListener('change', (e) => { e.matches ? md.value = true : md.value = false; })
})



</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap');

.accent-text {
    color: var(--green-accent-text) !important
}

section {
    padding-block: 2rem;
}

/*section One */
.section-one {
    background: var(--bg-ltr);
}

.s-header {
    text-align: center;
    color: white;
    font-style: normal;
}

.section-two {
    background: var(--bg-rtl);
}

.section-three {
    background: var(--bg-ltr);
}
</style>