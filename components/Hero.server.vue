<script setup lang="ts">
  defineProps<{ og: boolean }>()
  const { hero: { title, description, alt } } = useRuntimeConfig().public
</script>
<template>
  <main class="grid md:grid-cols-2 place-items-center xs:pt-16 pb-8 md:pt-8" :class="{ 'md:pt-0': og, '-mt-8': og, 'ml-8': og }">
    <div class="p-24 md:order-1 hidden md:block">
      <NuxtPicture
        format="avif,webp"
        src="/img/hero.webp"
        width="428"
        height="428"
        :alt="alt"
        sizes="428px"
        :imgAttrs="{ class: 'rounded-r-full' }"
      />
    </div>
    <div>
      <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
        {{ title }}
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        {{ description }}
      </p>
      <div v-if="!og" class="mt-6 flex flex-col sm:flex-row gap-3">
        <CtaLink
          cta-name="Hero"
          href="/contact"
          rel="noopener"
          >Get Started</CtaLink
        >
      </div>
    </div>
  </main>
</template>
