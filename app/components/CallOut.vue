<script setup>
  defineProps({
      heading: {
      type: String,
      default: "We make growth easy",
    },
    tagline: {
      type: String,
      default: "We help businesses grow by implementing and optimizing marketing systems in four critical areas:",
    },
  })
</script>

<template>
  <div class="mt-16">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      {{ heading }}
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      {{ tagline }}
    </p>
  </div>
</template>
