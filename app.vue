<template>
  <div>
    <Transition>
      <Loader v-if="!showPages" class="absolute" />
    </Transition>

    <NuxtPage v-if="showPages" />



  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const showPages = ref(false)
onMounted(() => { showPages.value = true })

</script>
<style>
:root {
  --bg-ltr: linear-gradient(-135deg, #3A2E5D 0%, #2E2348 100%);
  --bg-rtl: #4B3C6D;
  --red-accent:  #FF6B6B ;
  --yellow-accent: #F9F871;
}

html {
  scroll-behavior: smooth;
  background: var(--bg-ltr);
}

@media(max-width: 650px) {
  html {
    font-size: 14px;
  }
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;

}
</style>
