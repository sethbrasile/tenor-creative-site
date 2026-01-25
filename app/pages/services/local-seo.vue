<script setup lang="ts">
/**
 * Local SEO Service Page
 * Focus: Google Business Profile (GBP), Citations, and Local Visibility.
 */

useSeoMeta({
  title: "Local SEO | Tenor Creative",
  description: "Get found by local customers. We optimize your Google Business Profile, manage citations, and help you dominate local search rankings.",
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <MarketingServiceHero 
      accentColor="blue"
      title="Local SEO that gets you found."
      subtitle="Most customers find service businesses through local search. We make sure you show up at the top of the map when they need your services most."
    >
      <template #cta>
        <CtaLink href="/solutions" styleName="primary" cta-name="Local SEO Hero - View Packages">View SEO Packages</CtaLink>
      </template>
      <template #image>
        <NuxtImg 
          src="/img/hero.png" 
          alt="Local SEO Visibility" 
          class="rounded-2xl shadow-2xl ring-1 ring-slate-900/10"
        />
      </template>
    </MarketingServiceHero>

    <!-- Section: The Problem -->
    <MarketingStoryBrandSection layout="right-image" bgVariant="white">
      <template #subtitle>The Problem</template>
      <template #title>Being invisible in your community is expensive.</template>
      <template #description>
        If you're not in the "Local Map Pack" on Google, you're missing out on the majority of local leads. Your competitors are picking up the phone because they show up first, even if you do a better job.
      </template>
      <template #image>
        <div class="relative">
          <NuxtImg 
            src="/img/hero.png" 
            alt="The cost of being invisible" 
            class="rounded-2xl shadow-2xl ring-1 ring-slate-900/10 grayscale opacity-40"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <Icon name="heroicons:eye-slash" class="w-32 h-32 text-slate-900/20" />
          </div>
        </div>
      </template>
    </MarketingStoryBrandSection>

    <!-- Section: The Solution -->
    <MarketingStoryBrandSection layout="left-image" bgVariant="light">
      <template #subtitle>The Solution</template>
      <template #title>Local Search Dominance</template>
      <template #description>
        <p class="mb-6">We focus on the high-impact local signals that Google uses to rank businesses in your area. No "SEO magic," just data-backed optimization that works.</p>
        <ul class="space-y-4">
          <li class="flex items-start gap-3 text-slate-700">
            <Icon name="heroicons:map-pin" class="w-6 h-6 text-blue-600 shrink-0" />
            <span><strong>GBP Management:</strong> We optimize your Google Business Profile for the keywords that actually drive phone calls and website clicks.</span>
          </li>
          <li class="flex items-start gap-3 text-slate-700">
            <Icon name="heroicons:star" class="w-6 h-6 text-blue-600 shrink-0" />
            <span><strong>Review Automation:</strong> We set up systems to help you capture more 5-star reviews from happy customers, building your local authority automatically.</span>
          </li>
          <li class="flex items-start gap-3 text-slate-700">
            <Icon name="heroicons:code-bracket" class="w-6 h-6 text-blue-600 shrink-0" />
            <span><strong>Local Schema & Citations:</strong> We ensure your Name, Address, and Phone (NAP) are consistent across the web and use technical schema markup for local search.</span>
          </li>
        </ul>
      </template>
      <template #cta>
        <CtaLink href="/solutions" styleName="primary">Explore the Packages</CtaLink>
      </template>
      <template #image>
        <NuxtImg 
          src="/img/hero.png" 
          alt="Local Ranking Optimization" 
          class="rounded-2xl shadow-2xl ring-1 ring-slate-900/10"
        />
      </template>
    </MarketingStoryBrandSection>

    <!-- Section: The Plan -->
    <MarketingStoryBrandSection layout="centered" bgVariant="white">
      <template #subtitle>The Goal</template>
      <template #title>Dominate Your Service Area</template>
      <template #description>
        Stop guessing and start growing. Our local SEO systems are designed to put your business in front of people who are ready to buy right now.
      </template>
      <template #cta>
        <CtaLink href="https://link.tenorcreative.com/widget/booking/pP7S7T" target="_blank" styleName="outline">Get a Local Audit</CtaLink>
      </template>
    </MarketingStoryBrandSection>

    <!-- Need More? Upsell Bridge -->
    <MarketingNeedMore />
  </div>
</template>
