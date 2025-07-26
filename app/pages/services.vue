<script setup>
import { services } from '~/data/services';
import { comingSoon } from '~/data/services';
useSeoMeta({
  title: "Services",
})
</script>

<template>
  <Container>
    <Sectionhead>
      <template v-slot:title>Services</template>
      <template v-slot:desc>
        We help service businesses reach their growth potential and dominate their markets by implementing proven marketing SYSTEMS. Our job is to be experts in marketing, and specifically local marketing. We leverage technology to achieve maximum results, so that our clients can focus on what they do best - running their business.
      </template>
    </Sectionhead>

    <Features :features="services" />

    <Sectionhead>
      <template v-slot:title>Coming Soon</template>
      <template v-slot:desc>
        We're working on optimized, and AI-assisted (carefully, where it makes sense, not "AI slop") versions of these services, and will be launching them soon.
      </template>
    </Sectionhead>
    <Features :features="comingSoon" />
    <Cta location="Services" />
    <!-- <Sectionhead>
      <template v-slot:title>Performance</template>
      <template v-slot:desc>
        Take a look at THIS site's performance <NuxtLink class="underline" to="https://gtmetrix.com/reports/tenorcreative.com/F5MMuECT/" target="_blank">on GTmetrix.</NuxtLink>
      </template>
    </Sectionhead>
    <NuxtImg
      src="/img/gtmetrix.png"
      alt="Services"
      width="800"
      height="600"
      class="mx-auto mt-12" /> -->
  </Container>
</template>
