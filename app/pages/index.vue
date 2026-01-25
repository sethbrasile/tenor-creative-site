<script setup lang="ts">
useSeoMeta({
  title: "Tenor Creative | High-Performance Digital Storefronts",
  description: "The essentials your business needs to be seen, found, and chosen. Web design, local SEO, and CRM automation for service businesses.",
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <Hero />

    <!-- Section 1: The Stakes (Problem) -->
    <MarketingStoryBrandSection layout="right-image" bgVariant="white">
      <template #subtitle>The Problem</template>
      <template #title>Being Invisible is Expensive.</template>
      <template #description>
        Most small businesses are invisible to their ideal customers. If your website is outdated, you don't show up in search, and your leads go cold because you're too busy to follow up, you're leaving money on the table every single day.
      </template>
      <template #image>
        <div class="relative">
          <NuxtImg 
            src="/img/hero.png" 
            alt="The cost of invisibility" 
            class="rounded-2xl shadow-2xl ring-1 ring-slate-900/10 grayscale opacity-50"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <Icon name="heroicons:no-symbol" class="w-32 h-32 text-slate-900/20" />
          </div>
        </div>
      </template>
    </MarketingStoryBrandSection>

    <!-- Section 2: The Solution (Value) -->
    <MarketingStoryBrandSection layout="left-image" bgVariant="light">
      <template #subtitle>The Solution</template>
      <template #title>The "Essentials" for Modern Growth.</template>
      <template #description>
        <p class="mb-6">We've stripped away the fluff and focused on the three things that actually move the needle for service businesses. No complicated tech, no endless to-do lists.</p>
        <ul class="space-y-4">
          <li class="flex items-start gap-3 text-slate-700">
            <Icon name="heroicons:check-circle" class="w-6 h-6 text-purple-600 shrink-0" />
            <span><strong>High-Performance Web Design:</strong> A fast, modern site built to convert visitors into customers.</span>
          </li>
          <li class="flex items-start gap-3 text-slate-700">
            <Icon name="heroicons:check-circle" class="w-6 h-6 text-blue-600 shrink-0" />
            <span><strong>Local SEO Domination:</strong> Getting you found by the people in your community searching for what you do.</span>
          </li>
          <li class="flex items-start gap-3 text-slate-700">
            <Icon name="heroicons:check-circle" class="w-6 h-6 text-emerald-600 shrink-0" />
            <span><strong>Automated Customer Systems:</strong> GHL-powered automation that handles the follow-up so you don't have to.</span>
          </li>
        </ul>
      </template>
      <template #cta>
        <CtaLink href="/services" styleName="primary">Explore the Packages</CtaLink>
      </template>
      <template #image>
        <NuxtImg 
          src="/img/hero.png" 
          alt="The Tenor Essentials Model" 
          class="rounded-2xl shadow-2xl ring-1 ring-slate-900/10"
        />
      </template>
    </MarketingStoryBrandSection>

    <!-- Section 3: The Guide -->
    <MarketingStoryBrandSection layout="centered" bgVariant="white">
      <template #subtitle>The Guide</template>
      <template #title>Your Partners in Growth.</template>
      <template #description>
        We know marketing tech can be overwhelming. That's why we don't just give you tools; we build the system for you. With years of experience helping brands scale, we're here to ensure your digital storefront is your hardest-working employee.
      </template>
      <template #cta>
        <CtaLink href="/about" styleName="outline">Learn Our Process</CtaLink>
      </template>
    </MarketingStoryBrandSection>

    <!-- Section 4: The Plan -->
    <section class="py-24 sm:py-32 bg-slate-50">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-16">
          <h2 class="text-base font-semibold leading-7 text-slate-900 uppercase tracking-widest mb-2">The Plan</h2>
          <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">Three Steps to Success</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <!-- Step 1 -->
          <div class="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm ring-1 ring-slate-900/5">
            <div class="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center text-2xl font-bold mb-6">1</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Choose Your Package</h3>
            <p class="text-slate-600 leading-relaxed">Select the Essentials tier that fits your current business goals and budget.</p>
          </div>
          <!-- Step 2 -->
          <div class="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm ring-1 ring-slate-900/5">
            <div class="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center text-2xl font-bold mb-6">2</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">We Build Your Engine</h3>
            <p class="text-slate-600 leading-relaxed">Our team handles the setup, design, and automation to get you up and running fast.</p>
          </div>
          <!-- Step 3 -->
          <div class="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm ring-1 ring-slate-900/5">
            <div class="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center text-2xl font-bold mb-6">3</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Watch Your Business Grow</h3>
            <p class="text-slate-600 leading-relaxed">Focus on serving your customers while your digital storefront works for you 24/7.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Success (Call to Action) -->
    <Cta location="Home" heading="Ready to fill your calendar?" />

    <!-- Need More? Upsell Bridge -->
    <MarketingNeedMore />
  </div>
</template>
