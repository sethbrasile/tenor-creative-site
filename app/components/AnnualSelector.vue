<script lang="ts" setup>
defineProps<{ isAnnual: boolean }>()
defineEmits(['yearly', 'monthly'])
</script>

<template>
  <div class="flex justify-center max-w-[24rem] m-auto my-8">
    <div class="relative flex w-full p-2 bg-slate-300 rounded-full">
      <span class="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
        <span
          class="absolute inset-0 w-1/2 bg-slate-800 rounded-full shadow-sm shadow-slate-950/10 transform transition-transform duration-150 ease-in-out"
          :class="isAnnual ? 'translate-x-0' : 'translate-x-full'"></span>
      </span>
      <button
        class="button"
        :class="isAnnual ? 'text-white' : 'text-slate-800'" @click="$emit('yearly')" :aria-pressed="isAnnual">Yearly
        <span :class="isAnnual ? 'text-slate-200' : 'text-slate-600'">(2 free months)</span></button>
      <button
        class="button"
        :class="isAnnual ? 'text-slate-800' : 'text-white'" @click="$emit('monthly')"
        :aria-pressed="isAnnual">Monthly</button>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.button {
  @apply relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-300 transition-colors duration-150 ease-in-out;
}
</style>
