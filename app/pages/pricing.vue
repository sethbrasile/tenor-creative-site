<script setup>
import { standardPricing, oneOffPricing, aiServices } from '~/data/pricing';

useSeoMeta({
  title: "Pricing",
})

const isAnnual = ref(false);
</script>

<template>
  <Container>
    <Sectionhead>
      <template v-slot:title>Growth System Plans</template>
      <template v-slot:desc>Massive access and growth potential with simple & predictable pricing. Important to note that these are not tools, these are
        systems designed to act for you and drive growth for your business, and they're designed to do so at a tiny fraction of the cost of traditional marketing efforts.
      </template>
    </Sectionhead>

    <AnnualSelector :is-annual="isAnnual" @yearly="isAnnual = true" @monthly="isAnnual = false" />

    <div class="hidden lg:block">
      <PricingTable :yearly="isAnnual" :items="standardPricing" />
    </div>
    <div class="grid lg:hidden md:grid-cols-2 gap-2 mx-auto max-w-screen-lg mt-12">
      <PricingCard v-for="item of standardPricing" :plan="item" :key="item.name" :yearly="isAnnual" />
    </div>

    <Cta
      location="pricing"
      button-text="Book my FREE consultation"
      description="If you're not sure, or have more complex needs, book a slot with us and we can take a look together."
      heading="Not sure which system is right for your business?"
      name="consult"
      to="/booking"
    />

    <Sectionhead>
      <template v-slot:title>Standard Services and Growth System Addons</template>
      <template v-slot:desc>If our growth system packages don't meet your needs, we also offer these services and addons.</template>
    </Sectionhead>

    <AnnualSelector :is-annual="isAnnual" @yearly="isAnnual = true" @monthly="isAnnual = false" />

    <div class="grid md:grid-cols-3 gap-2 mx-auto mt-12">
      <PricingCard v-for="item of oneOffPricing" :plan="item" :key="item.name" :yearly="isAnnual" />
    </div>

    <Sectionhead>
      <template v-slot:title>AI Systems</template>
      <template v-slot:desc>Ala carte AI systems that can be added to any business</template>
    </Sectionhead>

    <AnnualSelector :is-annual="isAnnual" @yearly="isAnnual = true" @monthly="isAnnual = false" />

    <div class="grid md:grid-cols-3 gap-2 mx-auto mt-12">
      <PricingCard v-for="item of aiServices" :plan="item" :key="item.name" :yearly="isAnnual" />
    </div>

    <Sectionhead>
      <template v-slot:title>FAQ</template>
      <template v-slot:desc>Frequently Asked Questions</template>
    </Sectionhead>
    <div class="grid md:grid-cols-1 gap-10 mx-auto mt-12">
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
        <strong>Q: Your plans mention Google Business Profile (GBP) but I already have one?</strong>
        <br />
        A: That's great! If you already have a Google Business Profile, we can help you optimize it and integrate it with our systems to maximize its effectiveness.
        Our Growth system is designed to work seamlessly with existing profiles, ensuring you get the most out of your online presence. We will ensure it's always
        up-to-date and working for you. We even have systems that can help you get more reviews and respond to them automatically, post and image post automation, and more.
      </p>
      <p>
        <strong>Q: All the places on the internet have incorrect information about my business. Can you help me fix that?</strong>
        <br />
        A: Yes! We can help you clean up your online presence and ensure that all information about your business is accurate and consistent across the web.
        We keep this information up-to-date over time, so you don't have to worry about it. This feature is called "Citation Management" and is included
        in our Business plan and above.
      </p>
      <p>
        <strong>Q: What if I need more than one website?</strong>
        <br />
        A: No problem! We can add additional websites to your plan at the rates listed above. This is a great option for businesses that have multiple locations or brands.
      </p>
      <p>
        <strong>Q: My team needs more member logins...</strong>
        <br />
        A: That's no problem! We can add additional team members to your plan for $29/mo.
      </p>
      <p>
        <strong>Q: I need help with Google My Business (GMB) but I only see you mentioning Google Business Profile (GBP)</strong>
        <br />
        A: Google has changed the name of GMB to GBP, but it's the same thing.
      </p>
    </div>
    <div class="mx-auto mt-12">
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
