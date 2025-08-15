<script lang="ts" setup>
  import { comingSoon as services } from '~/data/solutions';

  useHead({
    script: [
      {
        src: "https://link.tenorcreative.com/js/form_embed.js",
        async: true,
        defer: true,
      },
    ],
  });

  const { slug } = defineProps<{ slug: string[] }>();

  const service = computed(() => {
    return services.find(service => service.slug === slug[0]);
  });

  const title = computed(() => {
    return service ? service.value?.title : 'Service Not Found';
  });
  const description = computed(() => {
    return service ? service.value?.description : 'Description not available';
  });
  const body = computed(() => {
    return service && service.value?.body ? service.value?.body : 'Content not available';
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
    :body="body"
    :coming-soon="true"
  />

  <HlForm  v-if="service?.formId" :form-id="service?.formId" :form-name="service?.formName"/>
</template>
