<script lang="ts" setup>
defineProps<{ buttonText: string; note?: string; }>()
</script>

<template>
  <div class="p-6 text-center border-t border-gray-300">
    <button class="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-900 rounded">
      {{ buttonText }}
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    <p v-if="note" class="text-xs text-gray-500 mt-3">{{ note }}</p>
  </div>
</template>
