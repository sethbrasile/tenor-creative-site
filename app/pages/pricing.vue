<script setup>
import { standardPricing, oneOffPricing } from '~/data/pricing';

useSeoMeta({
  title: "Pricing",
})
</script>

<template>
  <Container>
    <!-- <Sectionhead>
      <template v-slot:title>Pricing</template>
      <template v-slot:desc>Simple & Predictable pricing. No Surprises. Select a plan that aligns with your needs.</template>
    </Sectionhead> -->

    <Sectionhead>
      <template v-slot:title>Growth System Plans</template>
      <template v-slot:desc>Massive access and growth potential with simple & predictable pricing. Important to note that these are not tools, these are systems designed to drive growth.</template>
    </Sectionhead>
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <PricingCard v-for="item of standardPricing" :plan="item" :key="item.name" />
    </div>

    <Sectionhead>
      <template v-slot:title>Other Services and Addons</template>
      <template v-slot:desc>If our growth system packages don't meet your needs, we also offer these services and addons.</template>
    </Sectionhead>
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <PricingCard v-for="item of oneOffPricing" :plan="item" :key="item.name" />
    </div>

    <Sectionhead>
      <template v-slot:title>FAQ</template>
      <template v-slot:desc>Frequently Asked Questions</template>
    </Sectionhead>
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <!-- <PricingCard v-for="item of standardPricing" :plan="item" :key="item.name" /> -->
      <p>
        <strong>Q: What does "No compromises" mean on the "Just a great Website" option?</strong>
        <br />
        A: It means we build your site using best practices, ensuring optimal user experience, and in most circumstances this is a great and high performing
        option. Some competitive industries or markets may require a custom static site in order to exceed competitor SEO baseline. We can assess
        your needs and determine if this is necessary.
      </p>
      <p>
        <strong>Q: What is included in the "Hosting included" feature?</strong>
        <br />
        A: We provide top-tier hosting services as part of our packages, ensuring your site is fast, secure, and reliable.
      </p>
      <p>
        <strong>Q: How does the "Lead list generation" feature work?</strong>
        <br />
        A: We utilize advanced tools to generate a list of potential leads tailored to your business, helping you reach your target audience effectively.
      </p>
      <p>
        <strong>Q: What is "Automated lead nurturing"?</strong>
        <br />
        A: This feature automates the process of engaging with leads through personalized emails and follow-ups, increasing your chances of conversion without manual effort.
      </p>
      <p>
        <strong>Q: Can I customize the features in my plan?</strong>
        <br />
        A: Not really... But this is a good thing! The honest truth is that in the basic business plan, we're including every feature that most businesses
        are going to need to grow their business. The boosted features in higher-tier plans are for businesses that need more advanced capabilities,
        want AI to replace some manual processes, or want to take their marketing to the next level with funnels and lead magnets.
      </p>
      <p>
        <strong>Q: What if I need additional support?</strong>
        <br />
        A: We provide ongoing support and maintenance options to ensure your site runs smoothly and meets your evolving needs.
      </p>
    </div>
  </Container>
</template>
