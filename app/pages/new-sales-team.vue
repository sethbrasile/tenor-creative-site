<script setup lang="ts">
const { leadMagnet } = useRuntimeConfig().public
useSeoMeta({
  ogTitle: leadMagnet.name,
  ogDescription: leadMagnet.description,
  twitterCard: 'summary'
})
</script>

<template>
  <Container>
    <Sectionhead>
      <template v-slot:title>Download your free guide</template>
      <template v-slot:desc>
        <p class="text-lg mb-6 font-bold">
          "{{ leadMagnet.name }}"
        </p>
      </template>
    </Sectionhead>

    <p class="text-lg">
      {{ leadMagnet.description }}
    </p>

    <p class="text-lg mt-6">
      Who can we send the free guide to?
    </p>

    <div class="flex flex-col w-full gap-4 lg:grid lg:grid-cols-2">
      <!-- <NuxtImg
        :src="previewImage"
        class="mx-auto border border-solid rounded-md"
      /> -->
      <HlForm form-id="sLuHUrIuc4bSq3WMsdkl" form-name="Lead Magnet - New Sales Team - Opt In" />
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
