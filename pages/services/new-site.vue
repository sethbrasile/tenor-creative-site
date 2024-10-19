<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>New Site Builds</template>
      <template v-slot:desc>Our team of experts are ready to take the reigns and build and manage your new site</template>
    </LandingSectionhead>

    <h2 class="text-3xl font-bold text-gray-800 mt-4">What does this look like?</h2>

    <ol class="text space-y-4 list-decimal list-inside mt-4">
      <li>
        We meet with our Sales team to discuss your needs and ensure there's a good fit between your needs and our services.
      </li>
      <li>
        We all agree that we have a great fit and we meet with our Solutions and Creative teams to outline your needs in technical terms and discuss branding, content, SEO, etc..
      </li>
      <li>
          Our Engineering team will create a simple proposal describing the setup that we believe will be the most effective for your needs. A couple of notes on our team and our process:
          <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>We always lean in the direction of "the simpler the better," and strongly believe that over-engineering and over-planning for the future does not tend to pay off, it tends to be wasted energy. Pausing and taking a moment to really question whether some complex system is actually necessary will always provide a great ROI.</li>
            <li>Wordpress feels like the "simplest" approach in many cases because it's popular, but it's important to note that it's possibly the most complex and most costly way to answer some questions. Sometimes though, it absolutely is the right call.</li>
          </ul>
      </li>
      <li>We meet to discuss the proposal and you love it.</li>
      <li>We build you a beautiful, functional, performant and SEO optimized site.</li>
    </ol>
  </LandingContainer>
</template>
