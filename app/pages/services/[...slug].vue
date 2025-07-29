<script lang="ts" setup>
  import { services } from '~/data/services';
  const { slug } = defineProps<{
    slug: string[];
  }>();
  const title = computed(() => {
    const service = services.find(service => service.slug === slug[0]);
    return service ? service.title : 'Service Not Found';
  });
  const description = computed(() => {
    const service = services.find(service => service.slug === slug[0]);
    return service ? service.description : 'Description not available';
  });
  const body = computed(() => {
    const service = services.find(service => service.slug === slug[0]);
    return service && service.body ? service.body : '<p>Content not available</p>';
  });

  useSeoMeta({
    title,
    description,
  });
</script>

<template>
  <ServicePage
    :title="title"
    :description="description"
    :body="body"
  />
</template>
