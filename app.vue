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
  --bg-ltr: #3A2E5D;
  --bg-rtl: #3A2E5D;
  --green-accent: hsla(153, 48%, 49%, 1);
  --yellow-accent: #F9F871;
  --green-accent-text: #00C8A1
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
