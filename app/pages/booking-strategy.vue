<template>
  <Container>
    <Sectionhead>
      <template v-slot:title>Thank you for choosing to work with us!</template>
      <template v-slot:desc>
        We are so excited to work with you. Please book a spot on the calendar below so that we can get your services fully activated. This will be
        a somewhat technical call, so please have someone handy with access to DNS and related. You will also be receiving some emails shortly with
        access and some instructions, so please be on the lookout for that.
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
