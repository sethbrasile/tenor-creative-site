<script setup lang="ts">
/**
 * Web Design Service Page
 * Focus: High-performance brochure and essentials websites for small businesses.
 */

useSeoMeta({
  title: "Web Design | Tenor Creative",
  description: "Modern, high-performance web design for service businesses. Brochure and Essentials websites built to convert visitors into customers.",
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <MarketingServiceHero 
      accentColor="purple"
      title="Websites that work as hard as you do."
      subtitle="Your digital storefront is your first impression. We build high-performance websites that look professional, load fast, and turn visitors into customers."
    >
      <template #cta>
        <CtaLink href="/solutions" styleName="primary" cta-name="Web Design Hero - View Packages">View Web Design Packages</CtaLink>
      </template>
      <template #image>
        <NuxtImg 
          src="/img/hero.png" 
          alt="Modern Web Design Showcase" 
          class="rounded-2xl shadow-2xl ring-1 ring-slate-900/10"
        />
      </template>
    </MarketingServiceHero>

    <!-- Section: The Problem -->
    <MarketingStoryBrandSection layout="right-image" bgVariant="white">
      <template #subtitle>The Problem</template>
      <template #title>Don't let a bad website cost you business.</template>
      <template #description>
        In today's world, a slow, outdated, or confusing website is the fastest way to lose a customer's trust. If your site isn't mobile-friendly or takes too long to load, your potential clients will simply move on to the next person on the list.
      </template>
      <template #image>
        <div class="relative">
          <NuxtImg 
            src="/img/hero.png" 
            alt="The impact of poor design" 
            class="rounded-2xl shadow-2xl ring-1 ring-slate-900/10 grayscale opacity-40"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <Icon name="heroicons:x-circle" class="w-32 h-32 text-slate-900/20" />
          </div>
        </div>
      </template>
    </MarketingStoryBrandSection>

    <!-- Section: The Solution -->
    <MarketingStoryBrandSection layout="left-image" bgVariant="light">
      <template #subtitle>The Solution</template>
      <template #title>Brochure & Essentials Websites</template>
      <template #description>
        <p class="mb-6">We specialize in "Growth Systems" for service businesses. Our websites aren't just pretty; they're built on a foundation of performance and conversion strategy.</p>
        <ul class="space-y-4">
          <li class="flex items-start gap-3 text-slate-700">
            <Icon name="heroicons:device-phone-mobile" class="w-6 h-6 text-purple-600 shrink-0" />
            <span><strong>Mobile Optimized:</strong> Over 60% of your traffic is on mobile. We ensure your site looks and works perfectly on every device.</span>
          </li>
          <li class="flex items-start gap-3 text-slate-700">
            <Icon name="heroicons:bolt" class="w-6 h-6 text-purple-600 shrink-0" />
            <span><strong>Lightning Fast:</strong> Speed is a ranking factor and a conversion factor. We optimize for Core Web Vitals from day one.</span>
          </li>
          <li class="flex items-start gap-3 text-slate-700">
            <Icon name="heroicons:magnifying-glass" class="w-6 h-6 text-purple-600 shrink-0" />
            <span><strong>SEO-Ready Foundation:</strong> We build with clean code and proper semantic structure so search engines can easily find and index your content.</span>
          </li>
        </ul>
      </template>
      <template #cta>
        <CtaLink href="/solutions" styleName="primary">Explore the Packages</CtaLink>
      </template>
      <template #image>
        <NuxtImg 
          src="/img/hero.png" 
          alt="High Performance Features" 
          class="rounded-2xl shadow-2xl ring-1 ring-slate-900/10"
        />
      </template>
    </MarketingStoryBrandSection>

    <!-- Section: The Plan -->
    <MarketingStoryBrandSection layout="centered" bgVariant="white">
      <template #subtitle>The Process</template>
      <template #title>From Strategy to Launch</template>
      <template #description>
        Our process is designed to be simple and effective. We handle the technical heavy lifting so you can focus on running your business.
      </template>
      <template #cta>
        <CtaLink href="https://link.tenorcreative.com/widget/booking/pP7S7T" target="_blank" styleName="outline">Book a Discovery Call</CtaLink>
      </template>
    </MarketingStoryBrandSection>

    <!-- Need More? Upsell Bridge -->
    <MarketingNeedMore />
  </div>
</template>
