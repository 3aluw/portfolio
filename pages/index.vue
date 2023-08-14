<template>
    <section class="section-one">
        <LogoIcons position="up" />
        <div class="text-center align-center mx-2 mb-8 mt-4">
            <p class="s-header inline-block">Coding with <span class="yellow">curiosity</span>,</p>
            <p class="s-header inline-block pl-2"> Learning with <span class="yellow">purpose</span></p>
        </div>
        <SectionOneMain />
        <LogoIcons position="bottom" />
    </section>

    <section class="section-two">
        <p class="s-header yellow !text-4xl py-8"> Some projects</p>
        <SectionTwoMain />
    </section>
    <section class="section-three"></section>
</template>
<script setup lang="ts">

</script>
<style scoped>
.yellow {
    color: #F9F871 !important
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
</style>