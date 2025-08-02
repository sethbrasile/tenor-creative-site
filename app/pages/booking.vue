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
  <Container>
    <Sectionhead>
      <template v-if="plan?.name" v-slot:title>Let's talk about the {{ plan?.name }} service</template>
      <template v-else v-slot:title>How can we help you?</template>
      <template v-slot:desc>
        Let's talk about your needs and see how proven marketing systems can drive growth for your business.
      </template>
    </Sectionhead>

    <p class="mt-4">{{ plan?.description }}</p>

    <BookingForm form-id="b1WPdFo5YUhyHJkPVxOV" />
  </Container>
</template>
