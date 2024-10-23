<script setup>
defineProps({
  heading: {
    type: String,
    default: "Your web presence, handled.",
  },
  tagline: {
    type: String,
    default: "From landing pages and SEO to blogs and blog content, all the way to custom app development, we've got you covered.",
  },
  features: {
    type: Array,
    default: () => [],
  }
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

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p v-html="item.description" class="text-slate-500 mt-2 leading-relaxed"></p>
      </div>
    </div>
  </div>
</template>
