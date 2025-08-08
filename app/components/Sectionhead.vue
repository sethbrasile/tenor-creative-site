<script setup>
defineProps({
  align: {
    default: "left",
  },
  subtitleCallout: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div :class="['mt-16', align === 'center' && 'text-center']">
    <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      <slot name="title">Title</slot>
    </h1>
    <p v-if="subtitleCallout" class="w-48 text-center p-2 bg-slate-300 rounded-full mt-4">
      <slot name="subtitle-callout">Subtitle callout goes here</slot>
    </p>
    <p class="text-lg mt-4 text-slate-600">
      <slot name="desc">Some description goes here</slot>
    </p>
  </div>
</template>
