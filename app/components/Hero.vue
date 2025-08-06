<script setup lang="ts">
  defineProps<{ og?: boolean }>()
  const { hero: { title, description, subtitle, alt }, leadMagnet: { url, name } } = useRuntimeConfig().public
</script>
<template>
  <main class="grid md:grid-cols-2 place-items-center xs:pt-16 pb-8 md:pt-8" :class="{ 'md:pt-0': og, '-mt-8': og, 'ml-8': og }">
    <div class="my-8 md:my-0 md:p-24 md:order-1">
      <NuxtPicture
        format="avif,webp"
        src="/img/hero.png"
        width="428"
        height="428"
        :alt="alt"
        sizes="428px"
        :imgAttrs="{ class: 'border-4 border-black rounded-md shadow-lg' }"
      />
    </div>
    <div>
      <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
        {{ title }}
      </h1>
      <h2 class="subheading font-light">{{ subtitle }}</h2>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        {{ description }}
      </p>
      <div v-if="!og" class="mt-6 flex flex-col sm:flex-row gap-3">
        <CtaLink
          cta-name="Hero"
          :href="url"
          rel="noopener">
            <strong>Unlock Your Free Guide: </strong> {{ name }}
        </CtaLink>
      </div>
    </div>
  </main>
</template>
