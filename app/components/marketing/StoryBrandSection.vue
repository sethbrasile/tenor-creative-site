<script setup lang="ts">
/**
 * StoryBrandSection Component
 * Purpose: Flexible section for StoryBrand narrative beats (Problem, Solution, etc.)
 * Supports different layouts and background variants.
 */

interface Props {
  layout?: 'left-image' | 'right-image' | 'centered';
  bgVariant?: 'white' | 'gray' | 'light';
}

withDefaults(defineProps<Props>(), {
  layout: 'right-image',
  bgVariant: 'white'
});

const bgClasses = {
  white: 'bg-white',
  gray: 'bg-slate-50',
  light: 'bg-slate-100'
};
</script>

<template>
  <section :class="['py-24 sm:py-32 overflow-hidden', bgClasses[bgVariant]]">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Centered Layout -->
      <div v-if="layout === 'centered'" class="mx-auto max-w-3xl text-center">
        <div v-if="$slots.subtitle" class="text-base font-semibold leading-7 text-slate-900 uppercase tracking-widest mb-2">
          <slot name="subtitle" />
        </div>
        <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          <slot name="title" />
        </h2>
        <div class="mt-6 text-lg leading-8 text-slate-600">
          <slot name="description" />
        </div>
        <div v-if="$slots.cta" class="mt-10 flex items-center justify-center gap-x-6">
          <slot name="cta" />
        </div>
        <div v-if="$slots.image" class="mt-16 flow-root sm:mt-24">
          <div class="relative rounded-2xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <slot name="image" />
          </div>
        </div>
      </div>

      <!-- Split Layout (Left/Right Image) -->
      <div v-else class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
        <div :class="['lg:pt-4', layout === 'right-image' ? 'lg:pr-8' : 'lg:pl-8 lg:order-last']">
          <div class="lg:max-w-lg">
            <div v-if="$slots.subtitle" class="text-base font-semibold leading-7 text-slate-900 uppercase tracking-widest mb-2">
              <slot name="subtitle" />
            </div>
            <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              <slot name="title" />
            </h2>
            <div class="mt-6 text-lg leading-8 text-slate-600">
              <slot name="description" />
            </div>
            <div v-if="$slots.cta" class="mt-10 flex items-center gap-x-6">
              <slot name="cta" />
            </div>
          </div>
        </div>
        <div :class="['flex items-center', layout === 'right-image' ? 'justify-end' : 'justify-start']">
          <div class="relative w-full max-w-xl lg:max-w-none">
            <slot name="image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
