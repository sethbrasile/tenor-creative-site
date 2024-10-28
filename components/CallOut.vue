<script setup>
  defineProps({
      heading: {
      type: String,
      default: "Stay focused on your business",
    },
    tagline: {
      type: String,
      default: "Let us do the web stuff.",
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
