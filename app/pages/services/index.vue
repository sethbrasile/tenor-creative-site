<script setup lang="ts">
import { comingSoon } from '~/data/solutions';
import { aiServices, oneOffPricing } from '~/data/pricing';

useSeoMeta({
  title: "Services",
})

const isAnnual = ref(false)
</script>

<template>
  <Sectionhead>
    <template v-slot:title>Standalone Services and Growth System Addons</template>
    <template v-slot:desc>If our growth systems don't meet your needs, we also offer these standalone services and addons.</template>
  </Sectionhead>

  <AnnualSelector :is-annual="isAnnual" @yearly="isAnnual = true" @monthly="isAnnual = false" />

  <div class="grid md:grid-cols-3 gap-2 mx-auto mt-12">
    <PricingCard v-for="item of oneOffPricing" :plan="item" :key="item.name" :yearly="isAnnual" />
  </div>

  <Sectionhead>
    <template v-slot:title>AI Systems</template>
    <template v-slot:desc>Ala carte AI systems that can be added to any business</template>
  </Sectionhead>

  <AnnualSelector :is-annual="isAnnual" @yearly="isAnnual = true" @monthly="isAnnual = false" />

  <div class="grid md:grid-cols-3 gap-2 mx-auto mt-12">
    <PricingCard v-for="item of aiServices" :plan="item" :key="item.name" :yearly="isAnnual" />
  </div>

  <Sectionhead>
    <template v-slot:title>Coming Soon</template>
    <template v-slot:desc>
      We're working on optimized, and AI-assisted (carefully where it makes sense, not "AI slop") versions of these REACH services, and will be launching them soon.
    </template>
  </Sectionhead>
  <Features :features="comingSoon" url-base="/coming-soon" />
  <Cta location="Services" />
</template>
