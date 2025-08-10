<script setup>
import { standardPricing } from '~/data/pricing';

useSeoMeta({
  title: "Pricing",
})

const isAnnual = ref(false);
</script>

<template>
  <Sectionhead>
    <template v-slot:title>Service Business Growth Systems</template>
    <template v-slot:desc>We help service businesses get more customers and sell more services.</template>
  </Sectionhead>

  <AnnualSelector :is-annual="isAnnual" @yearly="isAnnual = true" @monthly="isAnnual = false" />

  <div class="hidden lg:block">
    <PricingTable :yearly="isAnnual" :items="standardPricing" />
  </div>
  <div class="grid lg:hidden md:grid-cols-2 gap-2 mx-auto max-w-screen-lg mt-12">
    <PricingCard v-for="item of standardPricing" :plan="item" :key="item.name" :yearly="isAnnual" />
  </div>

  <Cta
    location="pricing"
    button-text="Book my FREE consultation"
    description="No pushy sales pitch, just an honest conversation about your business."
    heading="Questions? Let's chat."
    name="consult"
    to="/booking"
  />
</template>
