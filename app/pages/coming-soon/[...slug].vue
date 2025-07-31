<script lang="ts" setup>
  import { comingSoon as services } from '~/data/services';

  useHead({
    script: [
      {
        src: "https://hlapi.tenorcreative.com/js/form_embed.js",
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

  <iframe
    :src="`https://hlapi.tenorcreative.com/widget/form/${service?.formId}`"
    style="width:100%;height:100%;border:none;border-radius:4px"
    :id="`inline-${service?.formId}`"
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    data-form-name="Content Strategy Waiting List Opt In"
    data-height="738"
    :data-layout-iframe-id="`inline-${service?.formId}`"
    :data-form-id="service?.formId"
    title="Content Strategy Waiting List Opt In"
        >
</iframe>
<!-- <script src="https://hlapi.tenorcreative.com/js/form_embed.js"></script> -->
</template>
