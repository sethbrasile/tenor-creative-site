<script lang="ts" setup>
  import { systems as services } from '~/data/services';
  const { slug } = defineProps<{ slug: string[] }>();
  const service = computed(() => services.find(service => service.slug === slug[0]))
  const title = computed(() => {
    return service ? service.value?.title : 'Service Not Found';
  });
  const description = computed(() => {
    return service ? service.value?.description : 'Description not available';
  });

  useSeoMeta({
    title,
    description,
  });
</script>

<template>
  <ServicePage
    :title="title || ''"
    :description="description || ''"
    :body="service?.body"
    :features="service?.features"
  />
</template>
