<template>
    <div class="upper-icons flex justify-around w-full h-12 items-end" v-if="props.position === 'up'">
        <div class="logo-container">
            <img src="~/assets/logos/nuxt.svg" alt="Nuxt" class="glitch-logo" />
            <img src="~/assets/logos/nuxt.svg" alt="" class="glitch-logo glitch-logo--glitch" />
        </div>

        <div class="logo-container">
            <img src="~/assets/logos/Vue.svg" alt="Vue" class="glitch-logo" />
            <img src="~/assets/logos/Vue.svg" alt="" class="glitch-logo glitch-logo--glitch" />
        </div>

        <div class="logo-container">
            <img src="~/assets/logos/TypeScript.svg" alt="TypeScript" class="glitch-logo" />
            <img src="~/assets/logos/TypeScript.svg" alt="" class="glitch-logo glitch-logo--glitch" />
        </div>

        <div class="logo-container">
            <img src="~/assets/logos/TailwindCSS.svg" alt="TailwindCSS" class="glitch-logo" />
            <img src="~/assets/logos/TailwindCSS.svg" alt="" class="glitch-logo glitch-logo--glitch" />
        </div>

    </div>

    <div class="bottom-icons flex justify-around w-full h-12 items-end" v-if="props.position === 'bottom'">
        <div class="logo-container">
            <img src="~/assets/logos/Vuetify.svg" alt="Vuetify" class="glitch-logo" />
            <img src="~/assets/logos/Vuetify.svg" alt="" class="glitch-logo glitch-logo--glitch" />
        </div>

        <div class="logo-container">
            <img src="~/assets/logos/VueUse.svg" alt="VueUse" class="glitch-logo" />
            <img src="~/assets/logos/VueUse.svg" alt="" class="glitch-logo glitch-logo--glitch" />
        </div>

        <div class="logo-container">
            <img src="~/assets/logos/Figma.svg" alt="Figma" class="glitch-logo" />
            <img src="~/assets/logos/Figma.svg" alt="" class="glitch-logo glitch-logo--glitch" />
        </div>

        <div class="logo-container">
            <img src="~/assets/logos/Javascript.svg" alt="JavaScript" class="glitch-logo" />
            <img src="~/assets/logos/Javascript.svg" alt="" class="glitch-logo glitch-logo--glitch" />
        </div>

    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    position: { type: String, required: true },
})
</script>
<style scoped>
.logo-container {
    width: 1.6rem;
    position: relative;
    display: inline-block;
    overflow: hidden;
}


.glitch-logo {
    display: block;
    width: 100%;
    height: auto;
    
}

.glitch-logo--glitch {
    position: absolute;
    top: 0;
    left: 0;
    mix-blend-mode: screen;
    opacity: 0.7;
    animation: glitch-move 10s infinite ;
    filter: hue-rotate(45deg);
    pointer-events: none;
    filter: grayscale(1);
}

@keyframes glitch-move {
  0% { transform: translate(0, 0);  }
  3% { transform: translate(-2px, 2px); }
  6% { transform: translate(2px, -2px); }
  9% { transform: translate(1px, 1px); }
  12% { transform: translate(-1px, -1px); }
  15% { transform: translate(0, 0); }
  18% { transform: translate(2px, 2px); }
  21% { transform: translate(-2px, -1px); }
  24% { transform: translate(1px, -2px); }
  27% { transform: translate(-1px, 1px); }
  30% { transform: translate(0, 0);  filter: grayscale(0); }

  /* Pause from 30% to 100% (7 seconds of nothing) */
  100% { transform: translate(0, 0); }
}

.logo-container:nth-child(1) .glitch-logo--glitch {
    animation-delay: 1s;
}

.logo-container:nth-child(2) .glitch-logo--glitch {
    animation-delay: 2s;
}

.logo-container:nth-child(3) .glitch-logo--glitch {
    animation-delay: 3s;
}

.logo-container:nth-child(4) .glitch-logo--glitch {
    animation-delay: 4s;
}
</style>