<template>
  <Sectionhead class="mt-4" :subtitle-callout="comingSoon">
    <template v-slot:title>{{ title }}</template>
    <template v-slot:subtitle-callout>
      Not Available Yet
    </template>
    <template v-slot:desc>
      {{ description }}
    </template>
  </Sectionhead>
  <div v-if="body" v-html="body" />
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  description: string;
  body: string;
  comingSoon?: boolean;
}>();
</script>
