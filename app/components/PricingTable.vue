<script lang="ts" setup>
import { features, getFeatureIsIncluded, getStandardPlanByTier } from '~/data/pricing';
defineProps<{ yearly: boolean }>()
const { plan1PaymentLink, plan2PaymentLink, plan3PaymentLink, plan1AnnualPaymentLink, plan2AnnualPaymentLink, plan3AnnualPaymentLink }  = useRuntimeConfig().public
const plan1 = getStandardPlanByTier(1)
const plan2 = getStandardPlanByTier(2)
const plan3 = getStandardPlanByTier(3)

const filteredFeatures = computed(() => {
  return features.filter((f) => !f.includes("All features"))
})
</script>

<template>
  <section class="text-gray-700 body-font overflow-hidden">
  <div class="container px-5 py-8 mx-auto flex flex-wrap">
    <div class="lg:w-1/4 pt-4 mt-48 hidden lg:block">
      <div class="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
        <p v-for="feature in filteredFeatures" :key="feature" class="feature text-gray-900 h-12 text-center px-4 flex items-center justify-start">{{ feature }}</p>
      </div>
    </div>

    <!-- fast start -->
    <div class="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg" >
      <div class="lg:w-1/3 w-full pt-4 mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
        <div class="px-2 -pt-4 text-center h-48 flex flex-col items-center justify-center">
          <h3 class="tracking-widest">{{ plan1?.name }}</h3>
          <h2 class="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">
            <template v-if="yearly">{{ plan1?.price?.yearly }}</template>
            <template v-else>$97</template>
            <span v-if="yearly" class="text-gray-600 text-base ml-1">/yr</span>
            <span v-else class="text-gray-600 text-base ml-1">/mo</span>
          </h2>
          <span class="text-sm text-gray-600">{{ plan1?.note }}</span>
          <span class="text-sm text-gray-600">{{ plan1?.price.note }}</span>
        </div>
        <div>
          <p v-for="feature in filteredFeatures" :key="feature" class="feature tick text-center h-12 flex items-center justify-center">
            <Tick v-if="getFeatureIsIncluded(1, feature)" />
          </p>

          <NuxtLink :to="yearly ? plan1AnnualPaymentLink : plan1PaymentLink">
            <IconButton
              :button-text="'Get the ' + plan1?.name"
              :note="plan1?.description"
            />
          </NuxtLink>
        </div>
      </div>

      <!-- business growth -->
      <div class="lg:w-1/3 lg:-mt-[2px] w-full pt-4 mb-10 lg:mb-0 border-2 rounded-lg border-gray-800 relative">
        <span class="bg-gray-800 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
        <div class="px-2 text-center h-48 flex flex-col items-center justify-center">
          <h3 class="tracking-widest">{{ plan2?.name }}</h3>
          <h2 class="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">
            <template v-if="yearly">{{ plan2?.price.yearly }}</template>
            <template v-else>{{ plan2?.price.monthly }}</template>
            <span v-if="yearly" class="text-gray-600 text-base ml-1">/yr</span>
            <span v-else class="text-gray-600 text-base ml-1">/mo</span>
          </h2>
          <span class="text-sm text-gray-600">{{ plan2?.note }}</span>
          <span class="text-sm text-gray-600">{{ plan2?.price.note }}</span>
        </div>
        <div>
          <p v-for="feature in filteredFeatures" :key="feature" class="feature tick text-center h-12 flex items-center justify-center">
            <Tick v-if="getFeatureIsIncluded(2, feature)" />
          </p>

          <NuxtLink :to="yearly ? plan2AnnualPaymentLink : plan2PaymentLink">
            <IconButton
              :button-text="'Get the ' + plan2?.name"
              :note="plan2?.description"
            />
          </NuxtLink>
        </div>
      </div>

      <!-- all in -->
      <div class="lg:w-1/3 w-full pt-4 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
        <div class="px-2 text-center h-48 flex flex-col items-center justify-center">
          <h3 class="tracking-widest">{{ plan3?.name }}</h3>
          <h2 class="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">
            <template v-if="yearly">{{ plan3?.price.yearly }}</template>
            <template v-else>{{ plan3?.price.monthly }}</template>
            <span v-if="yearly" class="text-gray-600 text-base ml-1">/yr</span>
            <span v-else class="text-gray-600 text-base ml-1">/mo</span>
          </h2>
          <span class="text-sm text-gray-600">{{ plan3?.note }}</span>
          <span class="text-sm text-gray-600">{{ plan3?.price.note }}</span>
        </div>
        <div>
          <p v-for="feature in filteredFeatures" :key="feature" class="feature tick text-center h-12 flex items-center justify-center">
            <Tick v-if="getFeatureIsIncluded(3, feature)" />
          </p>

          <NuxtLink :to="yearly ? plan3AnnualPaymentLink : plan3PaymentLink">
            <IconButton
              :button-text="'Get the ' + plan3?.name"
              :note="plan3?.description"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style lang="postcss" scoped>
.feature:nth-child(odd) {
  @apply bg-gray-100;
}
.feature.tick:nth-of-type(1) {
  @apply border-t border-gray-300;
}
</style>
