<template>
  <Sectionhead>
    <template v-slot:title>Business marketing audit</template>
    <template v-slot:desc>
      Please complete this marketing audit before you schedule (or at least 2 business days before) your audit review call.
      This allows our team to review the audit results and properly prepare for the call.
    </template>
  </Sectionhead>

  <iframe src="https://hlapi.tenorcreative.com/widget/survey/v2Z0kU6nQMjGrOIpdl7T" style="border:none;width:100%;" scrolling="no" id="v2Z0kU6nQMjGrOIpdl7T" title="survey"></iframe>
</template>

<script lang="ts" setup>
useHead({
  script: [
    {
      src: 'https://hlapi.tenorcreative.com/js/form_embed.js',
      async: true,
      defer: true,
    },
  ]
})
</script>

<style>

</style>
