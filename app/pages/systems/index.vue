<script setup>
import { systems as services } from '~/data/services';
useSeoMeta({
  title: "Systems",
})
</script>

<template>
  <Sectionhead>
    <template v-slot:title>Systems</template>
    <template v-slot:desc>
      We help service businesses reach their growth potential and dominate their markets by implementing proven marketing SYSTEMS. Our job is to be experts in marketing, and specifically local marketing. We leverage technology to achieve maximum results, so that our clients can focus on what they do best - running their business.
    </template>
  </Sectionhead>

  <Features :features="services" url-base="/systems" />
  <Cta location="Systems" />
</template>
