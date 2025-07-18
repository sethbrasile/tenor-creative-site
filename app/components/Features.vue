<script setup>
defineProps({
  features: {
    type: Array,
    default: () => [],
  }
})
</script>

<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white -translate-y-0.5" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p v-html="item.description" class="text-slate-500 mt-2 leading-relaxed"></p>
      </div>
    </div>
  </div>
</template>
