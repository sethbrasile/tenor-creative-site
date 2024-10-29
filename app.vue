<script setup>
  const { isProduction } = useRuntimeConfig().public
  if (isProduction) {
    useHead({
      script: [
        {
          src: '//js.hs-scripts.com/47847354.js',
          async: true,
          defer: true,
        },
        {
          src: 'https://analytics.tenorcreative.com/script.js',
          defer: true,
          'data-website-id': '7fc6c441-cd5d-447f-a4a0-52eb991a1072',
        }
      ],
    })
  }
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
