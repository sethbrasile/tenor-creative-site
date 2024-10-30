<script setup>
defineProps(["plan"]);
</script>

<template>
  <div>
    <div
      class="flex h-full flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md"
    >
      <div class="text-center">
        <h4 class="text-lg font-medium text-gray-400">{{ plan.name }}</h4>
        <p class="mt-3 text-4xl font-bold text-black md:text-4xl">
          {{
            plan.price && typeof plan.price === "object"
              ? plan.price.monthly + "/mo "
              : plan.price
          }}
        </p>
        <p v-if="plan.price.original" class="mt-1 text-xl font-medium text-gray-400 line-through md:text-2xl">
          {{plan.price.original}}
        </p>
        <p v-if="plan.note" class="mt-4 max-w-[800px] text-gray-400 text-sm">{{plan.note}}</p>
      </div>
      <ul class="grid my-8 text-left gap-y-4">
        <li
          v-for="item of plan.features"
          class="flex items-start gap-3 text-gray-800"
        >
          <Tick className="w-6 h-6" />
          <span>{{ item }}</span>
        </li>
      </ul>
      <div class="flex mt-auto">
        <CtaLink
          :ctaName="plan.name + ' Plan'"
          :href="plan.button.link || '#'"
          block
          :styleName="plan.popular ? 'primary' : 'outline'"
        >
          {{ plan.button.text || "Get Started" }}
        </CtaLink>
      </div>
    </div>
  </div>
</template>
