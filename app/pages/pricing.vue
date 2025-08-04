<script setup>
import { standardPricing, oneOffPricing, aiServices } from '~/data/pricing';

useSeoMeta({
  title: "Pricing",
})

const isAnnual = ref(false);
</script>

<template>
  <Sectionhead>
    <template v-slot:title>Growth System Plans</template>
    <template v-slot:desc>Massive access and growth potential with simple & predictable pricing. Important to note that these are not tools, these are
      systems designed to act for you and drive growth for your business, and they're designed to do so at a tiny fraction of the cost of traditional marketing efforts.
    </template>
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
    description="If you're not sure, or have more complex needs, book a slot with us and we can take a look together."
    heading="Not sure which system is right for your business?"
    name="consult"
    to="/booking"
  />
</template>
