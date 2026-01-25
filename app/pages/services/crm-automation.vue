<script setup lang="ts">
/**
 * CRM & GHL Automation Service Page
 * Focus: Unified Inbox, Automated Follow-ups, and Missed Call Text-Back.
 */

useSeoMeta({
  title: "CRM & Automation | Tenor Creative",
  description: "Scale your business with GoHighLevel CRM and intelligent automation. Unified inbox, missed call text-back, and automated lead nurturing.",
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <MarketingServiceHero 
      accentColor="emerald"
      title="Never miss another lead. Ever."
      subtitle="Stop letting revenue slip through the cracks. Our CRM and automation systems ensure every lead is captured, nurtured, and closed—without you lifting a finger."
    >
      <template #cta>
        <CtaLink href="/solutions" styleName="primary" cta-name="CRM Hero - View Packages">View Automation Packages</CtaLink>
      </template>
      <template #image>
        <NuxtImg 
          src="/img/hero.png" 
          alt="CRM Automation Dashboard" 
          class="rounded-2xl shadow-2xl ring-1 ring-slate-900/10"
        />
      </template>
    </MarketingServiceHero>

    <!-- Section: The Problem -->
    <MarketingStoryBrandSection layout="right-image" bgVariant="white">
      <template #subtitle>The Problem</template>
      <template #title>You're too busy to be your own secretary.</template>
      <template #description>
        Managing leads via sticky notes, scattered emails, and missed calls is a recipe for burnout. When you're busy on a job, potential customers aren't waiting—they're calling your competitor. If you don't respond in minutes, you've already lost the deal.
      </template>
      <template #image>
        <div class="relative">
          <NuxtImg 
            src="/img/hero.png" 
            alt="The chaos of manual management" 
            class="rounded-2xl shadow-2xl ring-1 ring-slate-900/10 grayscale opacity-40"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <Icon name="heroicons:phone-x-mark" class="w-32 h-32 text-slate-900/20" />
          </div>
        </div>
      </template>
    </MarketingStoryBrandSection>

    <!-- Section: The Solution -->
    <MarketingStoryBrandSection layout="left-image" bgVariant="light">
      <template #subtitle>The Solution</template>
      <template #title>Intelligent Automation & CRM</template>
      <template #description>
        <p class="mb-6">We deploy GoHighLevel-powered systems that act as your 24/7 digital assistant. From the first click to the final payment, everything is tracked and automated.</p>
        <ul class="space-y-4">
          <li class="flex items-start gap-3 text-slate-700">
            <Icon name="heroicons:chat-bubble-left-right" class="w-6 h-6 text-emerald-600 shrink-0" />
            <span><strong>Unified Inbox:</strong> Every text, email, DM, and call in one place. No more switching apps to find a conversation.</span>
          </li>
          <li class="flex items-start gap-3 text-slate-700">
            <Icon name="heroicons:phone-arrow-up-right" class="w-6 h-6 text-emerald-600 shrink-0" />
            <span><strong>Missed Call Text-Back:</strong> When you can't answer, our system instantly texts the caller back to start the conversation automatically.</span>
          </li>
          <li class="flex items-start gap-3 text-slate-700">
            <Icon name="heroicons:sparkles" class="w-6 h-6 text-emerald-600 shrink-0" />
            <span><strong>Lead Nurturing:</strong> Automated follow-ups keep your leads warm until they're ready to buy. It's like having a sales team that never sleeps.</span>
          </li>
        </ul>
      </template>
      <template #cta>
        <CtaLink href="/solutions" styleName="primary">See How It Works</CtaLink>
      </template>
      <template #image>
        <NuxtImg 
          src="/img/hero.png" 
          alt="Automated Workflow Features" 
          class="rounded-2xl shadow-2xl ring-1 ring-slate-900/10"
        />
      </template>
    </MarketingStoryBrandSection>

    <!-- Section: The Plan -->
    <MarketingStoryBrandSection layout="centered" bgVariant="white">
      <template #subtitle>The Process</template>
      <template #title>Set it and forget it.</template>
      <template #description>
        We handle the technical setup, GHL configuration, and workflow logic. You just show up to the appointments we book for you.
      </template>
      <template #cta>
        <CtaLink href="https://link.tenorcreative.com/widget/booking/pP7S7T" target="_blank" styleName="outline">Book a Strategy Session</CtaLink>
      </template>
    </MarketingStoryBrandSection>

    <!-- Need More? Upsell Bridge -->
    <MarketingNeedMore />
  </div>
</template>
