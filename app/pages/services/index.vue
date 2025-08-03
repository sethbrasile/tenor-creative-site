<script setup>
import { services, comingSoon } from '~/data/services';
import { aiServices, oneOffPricing } from '~/data/pricing';

useSeoMeta({
  title: "Services",
})
</script>

<template>
  <Sectionhead>
    <template v-slot:title>Services</template>
    <template v-slot:desc>
      We help service businesses reach their growth potential and dominate their markets by implementing proven marketing systems. We leverage technology to maximize the potential of every opportunity, and we make systems approachable for businesses of any size.
    </template>
  </Sectionhead>

  <Features :features="services" url-base="/services" />

  <Sectionhead>
    <template v-slot:title>Standard Services and Growth System Addons</template>
    <template v-slot:desc>If our growth system packages don't meet your needs, we also offer these services and addons.</template>
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
