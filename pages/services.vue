<script setup>
import { services } from '~/data/services';
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
  </Container>
</template>
