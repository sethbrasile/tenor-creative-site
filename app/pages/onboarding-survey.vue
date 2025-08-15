<script lang="ts" setup>
useHead({
  script: [
    {
      src: 'https://link.tenorcreative.com/js/form_embed.js',
      async: true,
      defer: true,
    },
  ]
})
</script>

<template>
  <Sectionhead>
    <template v-slot:title>Onboarding</template>
    <template v-slot:desc>
      We're excited to work with you! Please tell us a little about your business.
    </template>
  </Sectionhead>

  <iframe src="https://link.tenorcreative.com/widget/survey/tI7VEmslHqvZtD8zJ6TB" style="border:none;width:100%;" scrolling="no" id="tI7VEmslHqvZtD8zJ6TB" title="survey"></iframe>
</template>
