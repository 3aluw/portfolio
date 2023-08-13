<template>
    <div class="upper-icons flex justify-around w-full h-12" v-if="props.position === 'up'">
        <img src="~/assets/logos/nuxt.svg" class="logo " />
        <img src="~/assets/logos/Vue.svg" class="logo" />
        <img src="~/assets/logos/TypeScript.svg" class="logo" />
        <img src="~/assets/logos/TailwindCSS.svg" class="logo" />
    </div>

    <div class="bottom-icons flex justify-around w-full h-12" v-if="props.position === 'bottom'">
        <img src="~/assets/logos/Vuetify.svg" class="logo" />
        <img src="~/assets/logos/VueUse.svg" class="logo" />
        <img src="~/assets/logos/Figma.svg" class="logo" />
        <img src="~/assets/logos/Javascript.svg" class="logo" />
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    position: { type: String, required: true },
})
</script>
<style scoped>
.logo {
    width: 1rem
}
</style>