<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);




</script>
<style>
:root {
  --bg-ltr: linear-gradient(135deg, #210734 0%, rgba(33, 7, 52, 0.87) 98.67%);
  --bg-rtl: linear-gradient(45deg, #210734 0%, rgba(33, 7, 52, 0.87) 100%);
  --green-accent: hsla(153, 48%, 49%, 1);
  --yellow-accent: #F9F871;
}

@media(max-width: 650px) {
  html {
    font-size: 14px;
  }
}
</style>
