<script lang="ts" setup>
import { prices } from '~/data/pricing';

useHead({
  script: [
    {
      src: 'https://hlapi.tenorcreative.com/js/embed.js',
      async: true,
      defer: true,
    },
  ]
})

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
        Let's have a chat about your needs and see how our proven marketing systems can help your business grow.
      </template>
    </Sectionhead>

    <p class="mt-4">{{ plan?.description }}</p>

    <iframe src="https://hlapi.tenorcreative.com/widget/booking/b1WPdFo5YUhyHJkPVxOV" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="msgsndr-calendar"></iframe>
  </Container>
</template>
