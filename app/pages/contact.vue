<script setup lang="ts">
import { prices } from '~/data/pricing';
const route = useRoute()
const { plan } = route.query

const subject = computed(() => {
  if (plan) {
    return 'Interested in ' + prices.find((price) => price.shortName === plan)?.name
  }
  return ''
})

useSeoMeta({
  title: "Contact Us",
  description: "Let's have a chat.",
})
</script>

<template>
  <Sectionhead>
    <template v-slot:title>Contact</template>
    <template v-slot:desc>Send us a message. We'll get back to you asap!</template>
  </Sectionhead>

  <div class="grid md:grid-cols-2 gap-10 mx-auto mt-16">
    <p class="text-lg leading-relaxed text-slate-500 mt-6">
      If you'd rather have a quick chat, <NuxtLink to="/booking" class="underline">please schedule your free consultation.</NuxtLink>
    </p>
  <Contactform />
  </div>
</template>
