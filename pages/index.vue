<template>
    <section class="section-one">
        <LogoIcons position="up" />
        <div class="text-center align-center mx-2 mb-8 mt-4">
            <p class="s-header inline-block">Coding with <span class="yellow">curiosity</span>,</p>
            <p class="s-header inline-block pl-2"> Learning with <span class="yellow">purpose</span>.</p>
        </div>
        <SectionOneMain />
        <LogoIcons position="bottom" />
    </section>

    <section class="section-two">
        <p class="s-header yellow !text-4xl py-8"> Some projects</p>
        <SectionTwoMain />
    </section>

    <section class="section-three">
        <p class="s-header yellow !text-4xl py-8">About me</p>
        <SectionThreeMain />
    </section>
    <footer>
        <Footer />
    </footer>
</template>
<script setup lang="ts">

</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap');

.yellow {
    color: #F9F871 !important
}

section {
    padding-block: 2rem;
}

/*ssection One */
.section-one {
    background-color: #4B4453;
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
    background: #5F5867;
}

.section-three {
    background: rgba(113, 106, 121, 0.83);
}
</style>