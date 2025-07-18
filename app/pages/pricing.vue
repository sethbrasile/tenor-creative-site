<script setup>
import { standardPricing, oneOffPricing } from '~/data/pricing';

useSeoMeta({
  title: "Pricing",
})
</script>

<template>
  <Container>
    <!-- <Sectionhead>
      <template v-slot:title>Pricing</template>
      <template v-slot:desc>Simple & Predictable pricing. No Surprises. Select a plan that aligns with your needs.</template>
    </Sectionhead> -->

    <Sectionhead>
      <template v-slot:title>Standard Plans</template>
      <template v-slot:desc>Simple & Predictable pricing. No Surprises.</template>
    </Sectionhead>
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <PricingCard v-for="item of standardPricing" :plan="item" :key="item.name" />
    </div>

    <Sectionhead>
      <template v-slot:title>Other Services</template>
      <template v-slot:desc>If our standard plans don't meet your needs, we also offer these services.</template>
    </Sectionhead>
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <PricingCard v-for="item of oneOffPricing" :plan="item" :key="item.name" />
    </div>
  </Container>
</template>
