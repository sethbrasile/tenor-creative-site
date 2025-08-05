<script setup>
  defineProps({
      heading: {
      type: String,
      default: "Attract Customers",
    },
    tagline: {
      type: String,
      default: "We help service businesses get more customers by focusing on four critical areas:",
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
