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
  <Sectionhead>
    <template v-if="plan?.name" v-slot:title>Let's talk about the {{ plan?.name }} service</template>
    <template v-else v-slot:title>Stop grinding to find your next customer</template>
    <template v-if="plan?.description" v-slot:desc>{{ plan?.description }}</template>
    <template v-else v-slot:desc>We can help you consistently grow your business AND get your time back. Book a time with us below and we can tell you how.</template>
  </Sectionhead>

  <BookingForm form-id="b1WPdFo5YUhyHJkPVxOV" />
</template>
