<script setup lang="ts">
  const { leadMagnet } = useRuntimeConfig().public

  const props = withDefaults(defineProps<{
    location?: string;
    description?: string;
    heading?: string;
    to?: string;
    buttonText?: string;
    name?: string;
  }>(), {
    location: "unknown location",
    heading: "Start growing your business now for free!",
    buttonText: "Unlock Your Free Guide",
    name: 'You Deserve - ',
  });

  const description = computed(() => {
    if (!props.description) {
      return `Unlock your free guide - ${leadMagnet.name}:`
    }
    return props.description
  })

  const to = computed(() => {
    if (!props.to) {
      return leadMagnet.url
    }
    return props.to
  })

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
