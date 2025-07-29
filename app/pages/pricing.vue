<script setup>
import { standardPricing, oneOffPricing } from '~/data/pricing';

useSeoMeta({
  title: "Pricing",
})

const isAnnual = ref(false);
</script>

<template>
  <Container>
    <Sectionhead>
      <template v-slot:title>Growth System Plans</template>
      <template v-slot:desc>Massive access and growth potential with simple & predictable pricing. Important to note that these are not tools, these are systems designed to drive growth.</template>
    </Sectionhead>
     <div class="flex justify-center max-w-[14rem] m-auto my-8">
        <div class="relative flex w-full p-2 bg-gray-300 rounded-full">
            <span class="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                <span class="absolute inset-0 w-1/2 bg-gray-800 rounded-full shadow-sm shadow-gray-950/10 transform transition-transform duration-150 ease-in-out" :class="isAnnual ? 'translate-x-0' : 'translate-x-full'"></span>
            </span>
            <button class="relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-gray-300 transition-colors duration-150 ease-in-out" :class="isAnnual ? 'text-white' : 'text-gray-800'" @click="isAnnual = true" :aria-pressed="isAnnual">Yearly <span :class="isAnnual ? 'text-gray-200' : 'text-gray-600'">(-16%)</span></button>
            <button class="relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-gray-300 transition-colors duration-150 ease-in-out" :class="isAnnual ? 'text-gray-800' : 'text-white'" @click="isAnnual = false" :aria-pressed="isAnnual">Monthly</button>
        </div>
    </div>
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <PricingCard v-for="item of standardPricing" :plan="item" :key="item.name" :yearly="isAnnual" />
    </div>

    <Sectionhead>
      <template v-slot:title>Other Services and Addons</template>
      <template v-slot:desc>If our growth system packages don't meet your needs, we also offer these services and addons.</template>
    </Sectionhead>
    <div class="flex justify-center max-w-[14rem] m-auto my-8">
        <div class="relative flex w-full p-2 bg-gray-300 rounded-full">
            <span class="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                <span class="absolute inset-0 w-1/2 bg-gray-800 rounded-full shadow-sm shadow-gray-950/10 transform transition-transform duration-150 ease-in-out" :class="isAnnual ? 'translate-x-0' : 'translate-x-full'"></span>
            </span>
            <button class="relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-gray-300 transition-colors duration-150 ease-in-out" :class="isAnnual ? 'text-white' : 'text-gray-800'" @click="isAnnual = true" :aria-pressed="isAnnual">Yearly <span :class="isAnnual ? 'text-gray-200' : 'text-gray-600'">(-16%)</span></button>
            <button class="relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-gray-300 transition-colors duration-150 ease-in-out" :class="isAnnual ? 'text-gray-800' : 'text-white'" @click="isAnnual = false" :aria-pressed="isAnnual">Monthly</button>
        </div>
    </div>
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <PricingCard v-for="item of oneOffPricing" :plan="item" :key="item.name" :yearly="isAnnual" />
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
        <strong>Q: What does "Growth system ready" mean?</strong>
        <br />
        A: Even if you don't opt to use one of our Growth system plans out of the gate, our sites are built to easily integrate with them in the future,
        you won't need to worry about extra costs or rebuilding or redesigning anything. To take advantage of our growth systems in the future, all we need
        to do is configure the Growth system and connect it to your site.
      </p>
      <p>
        <strong>Q: How does the "Lead list generation" feature work?</strong>
        <br />
        A: We utilize advanced systems that collect and organize leads who come into contact with your business and opt to engage through various
        channels, such as your website, social media, and other marketing efforts. This feature helps you build a comprehensive database of
        potential customers, making it easier to nurture leads and convert them into paying clients. The channels which are available for lead
        generation become more powerful as you move up the Growth system pricing tiers, but the concept is the same across all plans.
      </p>
      <p>
        <strong>Q: What is "Automated lead nurturing"?</strong>
        <br />
        A: This feature automates the process of engaging with leads through personalized emails and follow-ups, increasing your chances of conversion without
        manual effort. These well-designed touchpoints keep your business top-of-mind for potential customers (without being annoying), and can be
        customized based on the particular needs of your audience.
      </p>
      <p>
        <strong>Q: Can I customize the features in my plan?</strong>
        <br />
        A: A bit.. Not much... But this is a good thing! The honest truth is that in the lowest tier business plan, we're including every feature that most businesses
        are going to need to grow their business! The boosted features in higher-tier plans are for businesses that need more advanced capabilities,
        want AI to replace some manual processes, or want to take their marketing to the next level with funnels and lead magnets.
      </p>
      <p>
        <strong>Q: My team needs more member logins...</strong>
        <br />
        A: That's no problem! We can add additional team members to your plan for $29/mo. The all-in growth system also includes more team member logins as
        you graduate to higher usage tiers, so you can scale your team as your business grows.
      </p>
    </div>
    <div class="mx-auto max-w-screen-lg mt-12">
      <p>
        <strong>Q: I have more questions. How can I get in touch?</strong>
        <br />
        A: Please book a free consultation with us, and we'll be happy to answer any questions you have and help you choose the right plan for your business.
        <br />
        <CtaLink href="/booking" styleName="primary" class="block mt-4">Book a Free Consultation</CtaLink>
      </p>
    </div>
  </Container>
</template>
