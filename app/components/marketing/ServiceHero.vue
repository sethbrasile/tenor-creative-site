<script setup lang="ts">
/**
 * ServiceHero Component
 * Purpose: Standardized Hero for service pages with specific color accents.
 * Supports Purple (Web), Blue (SEO), and Emerald (CRM).
 */

interface Props {
  accentColor?: 'purple' | 'blue' | 'emerald';
  title: string;
  subtitle: string;
}

const props = withDefaults(defineProps<Props>(), {
  accentColor: 'purple'
});

const accents = {
  purple: {
    text: 'text-purple-600',
    bg: 'bg-purple-600',
    blob: 'from-purple-500/20',
    ring: 'ring-purple-500/20'
  },
  blue: {
    text: 'text-blue-600',
    bg: 'bg-blue-600',
    blob: 'from-blue-500/20',
    ring: 'ring-blue-500/20'
  },
  emerald: {
    text: 'text-emerald-600',
    bg: 'bg-emerald-600',
    blob: 'from-emerald-500/20',
    ring: 'ring-emerald-500/20'
  }
};
</script>

<template>
  <section class="relative isolate overflow-hidden bg-white dark:bg-slate-950">
    <!-- Decorative background blobs -->
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div 
        :class="['relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]', accents[accentColor].blob]" 
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" 
      />
    </div>

    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div class="mx-auto max-w-4xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-7xl">
          {{ title }}
        </h1>
        <p class="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
          {{ subtitle }}
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <slot name="cta" />
        </div>
      </div>

      <!-- Hero Image / Graphic Slot -->
      <div v-if="$slots.image" class="mt-16 flow-root sm:mt-24">
        <div :class="['relative -m-2 rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4', accents[accentColor].ring]">
          <slot name="image" />
        </div>
      </div>
    </div>

    <!-- Bottom decorative blob -->
    <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div 
        :class="['relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]', accents[accentColor].blob]" 
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" 
      />
    </div>
  </section>
</template>
