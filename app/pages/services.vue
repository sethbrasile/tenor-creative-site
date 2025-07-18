<script setup>
import { services } from '~/data/services';

useSeoMeta({
  title: "Services",
})
</script>

<template>
  <Container>
    <Sectionhead>
      <template v-slot:title>Services</template>
      <template v-slot:desc>
        We're here to help you create the best possible experiences for your customers.
      </template>
    </Sectionhead>

    <Features :features="services" />
    <Cta location="Services" />
    <Sectionhead>
      <template v-slot:title>Performance</template>
      <template v-slot:desc>
        Take a look at THIS site's performance <NuxtLink class="underline" to="https://gtmetrix.com/reports/tenorcreative.com/F5MMuECT/" target="_blank">on GTmetrix.</NuxtLink>
      </template>
    </Sectionhead>
    <NuxtImg
      src="/img/gtmetrix.png"
      alt="Services"
      width="800"
      height="600"
      class="mx-auto mt-12" />
  </Container>
</template>
