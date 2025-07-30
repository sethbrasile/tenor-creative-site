<script setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt';

  const { isProduction, title, description, hero } = useRuntimeConfig().public
  if (isProduction) {
    useHead({
      script: [
        // {
        //   src: '//js.hs-scripts.com/47847354.js',
        //   async: true,
        //   defer: true,
        // },
        {
          src: 'https://analytics.tenorcreative.com/script.js',
          defer: true,
          'data-website-id': '7fc6c441-cd5d-447f-a4a0-52eb991a1072',
        },
        {
          src: 'https://widgets.leadconnectorhq.com/loader.js',
          async: true,
          defer: true,
          'data-resources-url': 'https://widgets.leadconnectorhq.com/chat-widget/loader.js',
          'data-widget-id': '6889b34067d91b0bae9c6673',
        }
      ],
    })
  }

  // defineOgImage({
  //   component: 'Hero',
  //   renderer: 'chromium',
  //   props: {
  //     og: true,
  //   }
  // })

  useSeoMeta({
    ogTitle: title,
    ogDescription: description,
    ogImage: {
      url: '/img/hero-text.png',
      alt: hero.alt,
      width: 1024,
      height: 1024,
    },
    twitterCard: 'summary'
  })
</script>

<template>
  <SpeedInsights />
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
