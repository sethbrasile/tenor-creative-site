<script lang="ts" setup>
defineProps<{ formId: string, formName: string }>()
useHead({
  script: [
    {
      src: "https://link.tenorcreative.com/js/form_embed.js",
      async: true,
      defer: true,
    },
  ],
});
</script>
<template>
  <iframe
    :src="`https://link.tenorcreative.com/widget/survey/${formId}`"
    :title="formName"
    :id="formId"
    style="border:none;width:100%;"
    scrolling="no"
        >
  </iframe>
</template>


<style>

</style>
