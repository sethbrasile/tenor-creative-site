<script setup>
import { services } from '~/data/services';
import { comingSoon } from '~/data/services';
useSeoMeta({
  title: "Services",
})
</script>

<template>
  <Sectionhead>
    <template v-slot:title>Services</template>
    <template v-slot:desc>
      We help service businesses reach their growth potential and dominate their markets by implementing proven marketing SYSTEMS. Our job is to be experts in marketing, and specifically local marketing. We leverage technology to achieve maximum results, so that our clients can focus on what they do best - running their business.
    </template>
  </Sectionhead>

  <Features :features="services" url-base="/services" />

  <Sectionhead>
    <template v-slot:title>Coming Soon</template>
    <template v-slot:desc>
      We're working on optimized, and AI-assisted (carefully where it makes sense, not "AI slop") versions of these REACH services, and will be launching them soon.
    </template>
  </Sectionhead>
  <Features :features="comingSoon" url-base="/coming-soon" />
  <Cta location="Services" />
</template>
