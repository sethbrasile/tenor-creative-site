<script setup lang="ts">
import type { Price } from '~/data/pricing';
const props = defineProps<{ plan: Price; yearly: boolean }>();
const price = computed(() => {
  const { price } = props.plan
  // If the price is an object,
  if (price && typeof price === "object") {
    // Then make some decisions
    if (price.static) {
      return price.static
    }
    if (props.yearly && price.yearly) {
      return price.yearly + "/yr"
    }
    return price.monthly + "/mo"
  }
  // If not an object, return the price as is
  return price
})
</script>

<template>
  <div>
    <div
      class="flex h-full flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md"
    >
      <div class="">
        <h4 class="text-lg font-medium text-gray-800">{{ plan.name }}</h4>

        <p class="mt-3 text-4xl font-medium text-gray-900">
          {{ price }}
        </p>
        <p v-if="typeof plan.price === 'object' && plan.price.compare" class="max-w-[800px] text-gray-400 text-sm">
          Compare at {{plan.price.compare}}!
        </p>
        <p v-if="plan.note" class="max-w-[800px] text-gray-400 text-sm">{{plan.note}}</p>
        <p v-if="typeof plan.price === 'object' && plan.price.note" class="mt-2 max-w-[800px] text-gray-400 text-sm">
          {{plan.price.note}}
        </p>
      </div>
      <!-- Description text -->
      <p class="mt-4 text-gray-600 text-sm">
        {{ plan.description }}
      </p>
      <ul class="grid my-8 text-left gap-y-4">
        <li
          v-for="item of plan.features"
          class="flex items-start gap-3 text-gray-800"
        >
          <Tick />
          <span>{{ item }}</span>
        </li>
      </ul>
      <!-- coming soon -->
      <div class="flex flex-col mt-auto">
      <div v-if="plan.popular" class="flex-row text-gray-800 text-sm">
        <p>Our most popular plan!</p>
      </div>
        <CtaLink
          :ctaName="plan.shortName + '-cta'"
          :href="(plan.button.link || '#') + '?plan=' + plan.shortName + (yearly ? '-yearly' : '')"
          block
          :disabled="!plan.available"
          :styleName="plan.available ? (plan.popular ? 'primary' : 'outline') : 'muted'"
        >
          <p v-if="!plan.available" class="text-center text-gray-800 text-sm">
            Coming soon!
          </p>
          {{ plan.available ? (plan.button.text || "Get Started") : "Let us know you're interested!" }}
        </CtaLink>
      </div>
    </div>
  </div>
</template>
