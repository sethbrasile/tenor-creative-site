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
      <h2 class="txt text-sm md:text-md tracking-wide md:tracking-widest text-slate-600 max-w-xl">
        Double Your Business and outperform your competition
      </h2>
      <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold">
        {{ subtitle }}
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        We help service businesses get more customers with automated solutions, AI-powered teams, and proven marketing strategies. All done-for-you so that you can finally step off the hamster wheel.
      </p>
      <div v-if="!og" class="mt-6 flex flex-col sm:flex-row gap-3">
        <CtaLink
          styleName="highlight"
          cta-name="Hero"
          href="/booking"
          size="lg"
          rel="noopener">
            <strong>Find out more</strong>
        </CtaLink>
      </div>
    </div>
  </main>
</template>
