<template>
  <Sectionhead :subtitle-callout="comingSoon">
    <template v-slot:title>{{ title }}</template>
    <template v-slot:subtitle-callout>
      Not Available Yet
    </template>
    <template v-slot:desc>
      {{ description }}
    </template>
  </Sectionhead>
  <p v-if="body" class="text-lg mt-8">{{ body }}</p>
  <!-- features list -->
  <div v-if="features">
    <ul class="grid sm:grid-cols-2 md:grid-cols-4 mt-8 gap-2 text-lg font-light">
      <li
        v-for="feature in features"
        class="item border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-primary-400 transition-all p-1 rounded-xl flex items-center gap-3"
      >
        <span class="text-primary-600 text-xl">•</span>
        <span>{{ feature }}</span>
      </li>
    </ul>
  </div>
  <Cta
    location="services"
    :name="title"
    :heading="cta?.heading"
    :description="cta?.description"
    :button-text="cta?.buttonText"
    :to="cta?.to"
  />
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  description: string;
  body?: string;
  comingSoon?: boolean;
  features?: string[];
  cta?: { heading: string, description: string, buttonText: string, to: string }
}>();
</script>

<style>

</style>
