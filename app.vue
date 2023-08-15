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
@media(max-width: 650px) {
  html {
    font-size: 14px;
  }
}
</style>
