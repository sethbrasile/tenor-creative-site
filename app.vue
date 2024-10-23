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
          src: 'https://cloud.umami.is/script.js',
          async: true,
          defer: true,
          'data-website-id': 'f8672b32-8925-4ae9-aed9-749620ab3dc9',
        }
      ],
    })
  }
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
