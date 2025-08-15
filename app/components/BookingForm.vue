<template>
  <iframe :src="`https://link.tenorcreative.com/widget/booking/${formId}`" style="width: 100%; height: auto;" scrolling="yes" id="msgsndr-calendar"></iframe>
</template>

<script lang="ts" setup>
  defineProps<{ formId: string }>()
  useHead({
    script: [
      {
        src: 'https://link.tenorcreative.com/js/embed.js',
        async: true,
        defer: true,
      },
    ]
  })
</script>
