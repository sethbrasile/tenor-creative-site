<script setup lang="ts">
  defineProps<{ og?: boolean }>()
  const { hero: { title, description, subtitle, alt }, leadMagnet: { name, url } } = useRuntimeConfig().public
</script>
<template>
  <main class="grid md:grid-cols-2 place-items-center xs:pt-16" :class="{ 'md:pt-0': og, '-mt-8': og, 'ml-8': og }">
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
      <h2 class="txt text-sm md:text-md tracking-wide md:tracking-widest text-slate-600 max-w-xl uppercase font-semibold mb-2">
        The Essentials for Modern Service Businesses
      </h2>
      <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
        Your High-Performance <span class="text-slate-700">Digital Storefront.</span>
      </h1>
      <p class="text-lg mt-6 text-slate-600 max-w-xl leading-relaxed">
        We build professional websites, dominate local search, and automate your customer follow-up. The Tenor Essentials model is the simple, high-polish engine that powers your growth.
      </p>
      <div v-if="!og" class="mt-10 flex flex-col sm:flex-row gap-4">
        <CtaLink
          styleName="primary"
          cta-name="Hero - Get Started"
          href="/solutions"
          size="lg">
            <strong>See the Packages</strong>
        </CtaLink>
        <CtaLink
          styleName="outline"
          cta-name="Hero - About"
          href="/about"
          size="lg">
            Learn Our Process
        </CtaLink>
      </div>
    </div>
  </main>
</template>
