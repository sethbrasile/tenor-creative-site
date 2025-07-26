<script setup>
  defineProps({
    location: {
      type: String,
      default: "unknown location",
    },
  });
</script>

<template>
  <div
    class="bg-black px-20 py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center"
  >
    <h2 class="text-white text-3xl md:text-6xl">Start growing your business now!</h2>
    <p class="text-slate-300 mt-4 text-lg md:text-xl">
      Access your free guide: "The 'Secret Formula' that the most successful businesses use to fuel growth and outperform the competition."
    </p>
    <div class="flex mt-5">
      <CtaLink href="/contact" styleName="inverted" :cta-name="'You Deserve - ' + location">Unlock My Free Guide</CtaLink>
    </div>
  </div>
</template>
