<script setup lang="ts">
import type { Solution } from '~/data/solutions';

defineProps<{
  features: Solution[];
  urlBase?: string;
}>()
</script>

<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16 gap-4">
    <NuxtLink v-for="item of features" :key="item.title" :to="`${urlBase}/${item.slug}`" class="rounded overflow-hidden shadow hover:shadow-lg transition-shadow border duration-200 cursor-pointer">
      <div>
        <NuxtPicture height="293" width="390" :src="'/img/card-pics/' + item.image.url" :alt="item.image.alt" />
        <div class="flex flex-col h-64 justify-between">
          <div class="gap-2 p-4">
            <div class="font-bold text-xl mb-2">{{ item.title }}</div>
            <p class="text-gray-700 text-base">
              {{ item.subtitle }}
            </p>
          </div>
          <div class="p-6 pt-0">
            <p class="font-bold text-lg border rounded-md mt-2 p-1 bg-slate-200 border-slate-300 text-center">Learn more</p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
