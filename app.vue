<template>
  <div id="app" class="min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - GreenAPI` : 'GreenAPI'
  },
  htmlAttrs: {
    lang: 'ru',
  },
  meta: [
    {
      name: 'description',
      content: `Клиентское приложение GreenAPI`,
    },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: 'any' },
  ],
})
</script>
