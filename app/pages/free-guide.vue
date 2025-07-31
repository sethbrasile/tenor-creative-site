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
      <template v-slot:title>Unlock Your Free Guide</template>
      <template v-slot:desc>
        <p class="text-lg mb-6 font-bold">
          The Secret Formula that the most successful businesses use to fuel growth and outperform the competition.
        </p>
        <p class="text-lg">
          In this guide, you'll learn the key elements that drive growth, why most businesses get them wrong, and how to implement them in your own business.
        </p>
      </template>
    </Sectionhead>

    <div class="flex flex-col mt-8 w-full gap-4 lg:grid lg:grid-cols-2">
      <NuxtPicture
        src="/img/secret-formula.png"
        class="lg:mt-14 mx-auto lg:px-8"
      />
      <iframe
        src="https://hlapi.tenorcreative.com/widget/form/rCmANP5zSLYEtRs6TALv"
        style="width:100%;height:100%;border:none;border-radius:4px"
        id="inline-rCmANP5zSLYEtRs6TALv"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Lead Magnet Opt In"
        data-height="707"
        data-layout-iframe-id="inline-rCmANP5zSLYEtRs6TALv"
        data-form-id="rCmANP5zSLYEtRs6TALv"
        title="Lead Magnet Opt In">
    </iframe>
    </div>



    <!-- <div class="max-w-2xl mx-auto">
      <p class="text-lg mb-6">
        This free guide reveals the 'Secret Formula' that has helped countless businesses achieve remarkable growth.
        Inside, you'll find actionable insights and strategies that you can implement right away to start seeing results.
      </p>
      <p class="text-lg mb-6">
        Whether you're a small business owner or a marketing professional, this guide is designed to provide you with the tools you need to succeed.
        Don't miss out on this opportunity to learn from the experts and take your business to the next level.
      </p>
      <CtaLink href="/free-guide/download" style-name="primary" class="mt-4">
        Download the Free Guide
      </CtaLink>
    </div>
    <div class="mt-12">
      <img src="/img/free-guide-cover.png" alt="Free Guide Cover" class="w-full max-w-md mx-auto rounded-lg shadow-lg" />
    </div>
    <div class="mt-8 text-center">
      <p class="text-lg">
        By downloading this guide, you agree to receive occasional emails from us with tips, updates, and special offers.
        You can unsubscribe at any time.
      </p>
    </div>
    <div class="mt-12">
      <p class="text-lg">
        If you have any questions or need further assistance, feel free to <NuxtLink to="/contact" class="text-blue-600 hover:underline">contact us</NuxtLink>.
      </p>
    </div>
    <div class="mt-12">
      <p class="text-lg">
        Ready to take the next step? <NuxtLink to="/booking" class="text-blue-600 hover:underline">Book a free consultation</NuxtLink> with us today!
      </p>
    </div>
    <div class="mt-12">
      <p class="text-lg">
        Don't wait any longer to unlock the secrets to business growth. Download your free guide now and start implementing the strategies that can lead to success.
      </p>
    </div>
    <div class="mt-12">
      <p class="text-lg">
        Thank you for your interest in our free guide. We hope it provides you with valuable insights and helps you achieve your business goals.
      </p>
    </div>
    <div class="mt-12">
      <p class="text-lg">
        If you found this guide helpful, please consider sharing it with your network. Together, we can help more businesses thrive and succeed.
      </p>
    </div>
    <div class="mt-12">
      <p class="text-lg">
        We appreciate your support and look forward to helping you on your journey to success. Remember, the key to growth is taking action. Start implementing the strategies from the guide today!
      </p>
    </div> -->
  </Container>
</template>

<style>

</style>
