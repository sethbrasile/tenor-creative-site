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
        <strong>Q: What does "No compromises" mean?</strong>
        <br />
        A: We build our sites using industry standard best practices, ensuring optimal user experience, and in most circumstances the result is a
        high-converting site that is ready to grow your business. We don't cut corners, and we don't use templates that are not designed to convert
        visitors into customers. Some competitive industries or markets may require a custom ultra-high-performance static site in order to exceed
        competitor SEO positioning in organic search. We can assess your market and competition and determine if this is necessary.
      </p>
      <p>
        <strong>Q: What does "Integration ready" mean?</strong>
        <br />
        A: Even if you don't opt to use one of our Growth system plans out of the gate, our sites are built to easily integrate with them in the future,
        you won't need to worry about extra costs or rebuilding or redesigning anything. To take advantage of our growth systems in the future, all we need
        to do is configure the Growth system and connect it to your site.
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
