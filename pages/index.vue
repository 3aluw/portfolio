<template>
    <section class="section-one">
        <LogoIcons position="up" />
        <div class="text-center align-center mx-2 mb-8 mt-4">
            <p class="s-header inline-block">Coding with <span class="accent-text">curiosity</span>,</p>
            <p class="s-header inline-block pl-2"> Learning with <span class="accent-text">purpose</span>.</p>
        </div>

        <SectionOneMd class="md:hidden" v-if="md" />
        <SectionOneLg class="hidden md:block" v-if="!md" />
        <LogoIcons position="bottom" />
    </section>


    <section class="section-two">
        <p class="s-header accent !text-4xl py-8"> Some projects</p>
        <SectionTwoMd class="md:hidden" v-if="md" />
        <SectionTwoLg class="hidden md:flex" v-if="!md" />
    </section>

    <section class="section-three">
        <p class="s-header accent !text-4xl py-8">About me</p>
        <SectionThreeMd class="md:hidden" v-if="md" />
        <SectionThreeLg class="hidden md:block" v-if="!md" />
    </section>
    <footer>
        <Footer />
    </footer>
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
    font-family: 'Courier Prime';
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
}

.section-two {
    background: var(--bg-rtl);
}

.section-three {
    background: var(--bg-ltr);
}
</style>