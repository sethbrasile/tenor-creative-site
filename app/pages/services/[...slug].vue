<script lang="ts" setup>
  import { services } from '~/data/services';

  const { slug } = defineProps<{ slug: string[] }>();

  const service = computed(() => {
    return services.find(service => service.slug === slug[0]);
  })

  useSeoMeta({
    title: service.value?.title,
    description: service.value?.description,
  });
</script>

<template>
  <ServicePage
    :title="service?.title || ''"
    :description="service?.description || ''"
    :body="service?.body"
    :cta="service?.cta"
  />
</template>
