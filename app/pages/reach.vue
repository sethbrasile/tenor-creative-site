<script setup lang="ts">
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
  <Container>
    <Sectionhead>
      <template v-slot:title>Ready for our Reach Systems?</template>
      <template v-slot:desc>
        <p class="text-lg mb-6 font-bold">
          If you've got the foundation of your marketing systems completely handled, then you're ready for our Reach systems.
        </p>
        <p class="text-md mb-6">(If you're not sure what that means, please download your <NuxtLink class="underline" to="/free-guide">Free Guide</NuxtLink> on the topic.)</p>
        <p class="text-md">Tell us a little bit about yourself and we'll get started!</p>
      </template>
    </Sectionhead>

    <iframe src="https://hlapi.tenorcreative.com/widget/form/doz5AvPd593WX8F3veHh"
      style="width:100%;height:100%;border:none;border-radius:4px" id="inline-doz5AvPd593WX8F3veHh"
      data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value=""
      data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate"
      data-deactivation-value="" data-form-name="Reach Opt In Form" data-height="442"
      data-layout-iframe-id="inline-doz5AvPd593WX8F3veHh" data-form-id="doz5AvPd593WX8F3veHh" title="Reach Opt In Form">
    </iframe>
  </Container>
</template>
