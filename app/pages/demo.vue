<script lang="ts" setup>
import { prices } from '~/data/pricing';

const planName = useRoute().query.plan
const plan = computed(() => {
  if (planName) {
    return prices.find((price) => price.shortName === planName)
  }
})
</script>

<template>
  <Cta
    heading="Wondering if an AI Employee can really be good at answering calls?"
    button-text="To hear our demo call: (580) 745-0069"
    description="Call now to try our live demo and see for yourself"
  />

  <!-- <Sectionhead>
    <template v-if="plan?.name" v-slot:title>Let's talk about {{ plan?.name }}</template>
    <template v-else v-slot:title>Ready to learn more or get started?</template>
    <template v-slot:desc>
      Book us now to see how proven marketing systems can drive growth for your business.
    </template>
  </Sectionhead> -->

  <!-- <p class="mt-4">{{ plan?.description }}</p> -->

  <!-- <BookingForm form-id="b1WPdFo5YUhyHJkPVxOV" /> -->
</template>
