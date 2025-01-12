<template>
    <span>project slug is: {{ $route.params.slug }}</span>
  </template>
  
  <script setup>
  import {projects} from "~/data/data"
  
  const route = useRoute()
  console.log(route.params) // { id: '123' }
  const urlSlug =  route.params.slug
const project = computed(()=>projects.find(obj=> obj.slug === urlSlug))

  </script>