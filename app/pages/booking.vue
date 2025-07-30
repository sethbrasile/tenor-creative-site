<template>
  <Container>
    <Sectionhead>
      <template v-slot:title>Book a FREE consultation</template>
      <template v-slot:desc>
        Let's have a chat about your needs and see how our proven marketing systems can help your business grow.
      </template>
    </Sectionhead>

  <iframe src="https://hlapi.tenorcreative.com/widget/booking/b1WPdFo5YUhyHJkPVxOV" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="msgsndr-calendar"></iframe>
  </Container>
</template>

<script lang="ts" setup>
useHead({
  script: [
    {
      src: 'https://hlapi.tenorcreative.com/js/embed.js',
      async: true,
      defer: true,
    },
  ]
})
</script>

<style>

</style>
