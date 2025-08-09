<script lang="ts" setup>
  import { solutions } from '~/data/solutions';

  const { slug } = defineProps<{ slug: string[] }>();

  const solution = computed(() => {
    return solutions.find(solution => solution.slug === slug[0]);
  })

  useSeoMeta({
    title: solution.value?.title,
    description: solution.value?.description,
  });
</script>

<template>
  <ServicePage
    :title="solution?.title || ''"
    :description="solution?.description || ''"
    :body="solution?.body"
    :cta="solution?.cta"
  />
</template>
