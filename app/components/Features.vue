<script setup lang="ts">
defineProps<{
  features: { title: string; description: string; icon: string; slug: string }[];
  urlBase?: string;
}>()
</script>

<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-4 mt-16 gap-4">
    <NuxtLink v-for="item of features" class="flex gap-4 items-start border border-slate-200 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200 cursor-pointer" :key="item.title" :to="`${urlBase}/${item.slug}`">
      <div class="bg-black rounded-full p-2 w-10 h-10 shrink-0">
        <Icon class="text-white -translate-y-1 -translate-x-0.5 text-3xl" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p v-html="item.description" class="text-slate-500 mt-2 leading-relaxed"></p>
      </div>
    </NuxtLink>
  </div>
</template>
