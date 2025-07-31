<template>
  <Container>
    <Sectionhead>
      <template v-slot:title>Book your audit review call</template>
      <template v-slot:desc>
        Please be certain to <NuxtLink class="underline text-slate-900" to="/audit-survey">complete your audit survey</NuxtLink> before this call.
      </template>
    </Sectionhead>

    <iframe src="https://hlapi.tenorcreative.com/widget/booking/3RM74GqaLMVN7flUEl5i" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="msgsndr-calendar"></iframe>
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
