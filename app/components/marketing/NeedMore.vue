<script setup lang="ts">
/**
 * NeedMore Component
 * Purpose: Upsell bridge to Prickly Pear Marketing Co. for advanced services.
 * Style: Dark, minimalist, high-polish.
 */
</script>

<template>
  <section class="relative overflow-hidden bg-slate-950 px-6 py-20 sm:py-32 lg:px-8 rounded-3xl my-24 mx-4">
    <!-- Subtle gradient background -->
    <div class="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
      <div class="aspect-[1404/767] w-[87.75rem] bg-gradient-to-tr from-[#3b82f6] to-[#1e3a8a] opacity-10" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>

    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Need more?</h2>
      <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
        Looking for advanced marketing like Paid Ads, High-End Video Production, or Comprehensive Strategy? Our parent agency handles the heavy lifting for scaling brands.
      </p>
      <div class="mt-10 flex items-center justify-center">
        <CtaLink 
          href="https://pricklypearmarketing.com" 
          target="_blank"
          styleName="inverted"
          cta-name="Need More - Prickly Pear Upsell"
        >
          Explore Advanced Services
        </CtaLink>
      </div>
    </div>
  </section>
</template>
