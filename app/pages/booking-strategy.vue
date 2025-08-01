<template>
  <Container>
    <Sectionhead>
      <template v-slot:title>Book your strategy call</template>
      <template v-slot:desc>
        Let's take a look at your current state and systems together and see how we can help.
      </template>
    </Sectionhead>

    <iframe src="https://hlapi.tenorcreative.com/widget/booking/YBDMCK4O7UmrdZ2n5tMV" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="msgsndr-calendar"></iframe>
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
