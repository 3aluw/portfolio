<template>
    <div class="upper-icons flex justify-around w-full h-12 items-end" v-if="props.position === 'up'">
        <img src="~/assets/logos/nuxt.svg" class="logo " />
        <img src="~/assets/logos/Vue.svg" class="logo" />
        <img src="~/assets/logos/TypeScript.svg" class="logo" />
        <img src="~/assets/logos/TailwindCSS.svg" class="logo" />
    </div>

    <div class="bottom-icons flex justify-around w-full h-12 items-end" v-if="props.position === 'bottom'">
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

.upper-icons>*,
.bottom-icons>* {
    animation: float 15s ease-in-out alternate infinite;
}

@keyframes float {

    50% {
        transform: translateY(-200%);
    }

    100% {
        transform: translateY(0%);
    }
}

.logo:nth-child(1) {
    animation-delay: 4s;
}

.logo:nth-child(2) {
    animation-delay: 3s;
}

.logo:nth-child(3) {
    animation-delay: 2s;
}

.logo:nth-child(4) {
    animation-delay: 0s;
}
</style>