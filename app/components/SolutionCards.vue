<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 gap-4">
      <div v-for="item of cards" :key="item.title" class="max-w-sm rounded overflow-hidden border p-2">
      <div class="flex gap-4 p-2 items-start">
        <div class="flex rounded m-auto">
          <NuxtPicture width="128" height="128" :src="'/img/card-pics/' + item.image.url" :alt="item.image.alt" />
          <p class="font-bold text-lg p-4 m-auto">{{ item.title }}</p>
        </div>
      </div>
      <p class="p-2">{{ item.image.caption }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Card } from '~/data/solutions';

defineProps<{ cards: Card[] }>()
</script>
