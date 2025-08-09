<script lang="ts" setup>
  import { solutions } from '~/data/solutions';

  const { slug } = defineProps<{ slug: string[] }>();
  const solution = computed(() => solutions.find(service => service.slug === slug[0]))

  useSeoMeta({
    title: solution.value?.pageTitle,
    description: solution.value?.subtitle,
  });
</script>

<template>
  <Sectionhead>
    <template v-slot:title>{{ solution?.pageTitle }}</template>
    <template v-slot:desc>
      {{ solution?.subtitle }}
    </template>
  </Sectionhead>
  <div class="grid sm:grid-cols-2 gap-4 py-6 mt-4 w-full">
    <NuxtImg
      :src="'/img/card-pics/' + solution?.image.url"
    />
    <h2 class="text-xl font-semibold sm:pr-12 my-auto text-center text-slate-700">{{ solution?.image.caption }}</h2>
  </div>

  <div class="bg-slate-100 px-6 py-12 mt-6 rounded-md">
    <p v-for="paragraph in solution?.description" class="py-2">{{ paragraph }}</p>
  </div>

  <SolutionCards v-if="solution?.cards.length" :cards="solution.cards" />

  <Cta
    location="solutions"
    :name="solution?.title"
    :heading="solution?.cta?.heading"
    :description="solution?.cta?.description"
    :button-text="solution?.cta?.buttonText"
    :to="solution?.cta?.to"
  />
</template>
