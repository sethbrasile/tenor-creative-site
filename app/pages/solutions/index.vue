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
      Stop grinding to find your next customer
    </template>
  </Sectionhead>

  <Features :features="solutions" url-base="/solutions" />
  <Cta location="Solutions" />
</template>
