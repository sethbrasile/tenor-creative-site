<script lang="ts" setup>
defineProps<{ formId: string, formName: string }>()
useHead({
  script: [
    {
      src: "https://hlapi.tenorcreative.com/js/form_embed.js",
      async: true,
      defer: true,
    },
  ],
});
</script>

<template>
  <iframe
    :src="`https://hlapi.tenorcreative.com/widget/form/${formId}`"
    style="width:100%;height:100%;border:none;border-radius:4px;"
    :id="`inline-${formId}`"
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    :data-form-name="formName"
    data-height="738"
    :data-layout-iframe-id="`inline-${formId}`"
    :data-form-id="formId"
    :title="formName"
        >
  </iframe>
</template>


<style>

</style>
