<script setup lang="ts">
import { solutions } from '~/data/solutions';

useSeoMeta({
  title: "Services",
})
</script>

<template>
  <!-- <Sectionhead>
    <template v-slot:title>Service Business Growth Systems</template>
    <template v-slot:desc>
      Our service business growth systems are HOW we get you more customers and more sales.
    </template>
  </Sectionhead>

  <Solutions :solutions="solutions" url-base="/pricing" /> -->

  <Sectionhead>
    <template v-slot:title>Solutions</template>
    <template v-slot:desc>
      Stop grinding to find your next customer and start filling your calendar with customers
    </template>
  </Sectionhead>

  <Features :features="solutions" url-base="/solutions" />
  <Cta
    name="solutions"
    location="Solutions"
    heading="Ready to learn how?"
    description="Book a call on our calendar and let us show you how we can help get you more business and achieve more freedom"
    button-text="I'm ready to be free"
    to="/booking"
  />
</template>
