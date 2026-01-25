<script setup lang="ts">
import { solutions, comingSoon } from '~/data/solutions';

useSeoMeta({
  title: "Our Services | Tenor Creative",
  description: "Explore our 'Essentials' services for small businesses: Web Design, Local SEO, and CRM Automation. Professional marketing tech made simple.",
})

const accents = {
  purple: 'hover:border-purple-500 hover:ring-purple-500/20',
  blue: 'hover:border-blue-500 hover:ring-blue-500/20',
  emerald: 'hover:border-emerald-500 hover:ring-emerald-500/20'
}

const accentText = {
  purple: 'text-purple-600',
  blue: 'text-blue-600',
  emerald: 'text-emerald-600'
}

const accentBg = {
  purple: 'bg-purple-50',
  blue: 'bg-blue-50',
  emerald: 'bg-emerald-50'
}
</script>

<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600 uppercase tracking-widest">Our Services</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">The Marketing Essentials</p>
        <p class="mt-6 text-lg leading-8 text-slate-600">
          We focus on the three core pillars every small business needs to thrive in the digital age. No fluff, just high-performance systems that drive growth.
        </p>
      </div>

      <!-- Core Services Grid -->
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <NuxtLink 
          v-for="service in solutions" 
          :key="service.slug" 
          :to="`/services/${service.slug}`"
          :class="[
            'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-slate-200 transition-all duration-300 hover:shadow-xl hover:ring-2',
            accents[service.accent || 'purple']
          ]"
        >
          <div>
            <div :class="['flex h-12 w-12 items-center justify-center rounded-xl mb-6', accentBg[service.accent || 'purple']]">
              <Icon :name="service.icon" :class="['h-8 w-8', accentText[service.accent || 'purple']]" />
            </div>
            <h3 class="text-2xl font-bold tracking-tight text-slate-900">{{ service.title }}</h3>
            <p class="mt-4 text-base leading-7 text-slate-600">
              {{ service.subtitle }}
            </p>
          </div>
          <div class="mt-8 flex items-center gap-x-2 text-sm font-semibold leading-6 text-slate-900">
            Learn more <Icon name="heroicons:arrow-right" class="h-4 w-4" />
          </div>
        </NuxtLink>
      </div>

      <!-- Coming Soon Section -->
      <div class="mt-32">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">Coming Soon</h2>
          <p class="mt-4 text-lg leading-8 text-slate-600">
            We're constantly refining new services to help your business scale.
          </p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div v-for="item in comingSoon" :key="item.slug" class="flex flex-col rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <div class="flex items-center gap-x-4">
              <Icon :name="item.icon" class="h-8 w-8 text-slate-400" />
              <h3 class="text-xl font-bold leading-7 text-slate-900">{{ item.title }}</h3>
            </div>
            <p class="mt-4 text-base leading-7 text-slate-600">{{ item.description }}</p>
            <div class="mt-6 flex items-center gap-x-2 text-sm font-medium text-slate-500">
              <Icon name="heroicons:clock" class="h-4 w-4" /> Under Development
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-32">
        <Cta location="Services Index" />
      </div>
    </div>
  </div>
</template>
