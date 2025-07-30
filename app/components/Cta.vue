<script setup>
  const props = defineProps({
    location: {
      type: String,
      default: "unknown location",
    },
    description: {
      type: String,
      default: `Access your free guide: "The 'Secret Formula' that the most successful businesses use to fuel growth and outperform the competition."`,
    },
    heading: {
      type: String,
      default: "Start growing your business now for free!",
    },
    to: {
      type: String,
      default: "/free-guide",
    },
    buttonText: {
      type: String,
      default: "Unlock My Free Guide",
    },
    name: {
      type: String,
      default: 'You Deserve - ',
    }
  });

  const ctaName = computed(() => {
    return props.name + props.location
  })
</script>

<template>
  <div
    class="bg-black px-20 py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center"
  >
    <h2 class="text-white text-3xl md:text-6xl">{{ heading }}</h2>
    <p class="text-slate-300 mt-4 text-lg md:text-xl">
      {{ description }}
    </p>
    <div class="flex mt-5">
      <CtaLink :href="to" styleName="inverted" :cta-name="ctaName">{{ buttonText }}</CtaLink>
    </div>
  </div>
</template>
