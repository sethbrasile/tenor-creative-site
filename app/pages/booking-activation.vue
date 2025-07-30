<template>
  <Container>
    <Sectionhead>
      <template v-slot:title>Book your service activation call</template>
      <template v-slot:desc>

      </template>
    </Sectionhead>

    <iframe src="https://hlapi.tenorcreative.com/widget/booking/sjK0qTmZXO5bkQiLNuPR" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="msgsndr-calendar"></iframe>
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
