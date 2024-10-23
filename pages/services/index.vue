<script setup>
const services = [
  {
    title: "New Site",
    description:
      "Our team of experts are ready to take the reigns and build and manage your new site.",
    icon: "bx:bxs-book-content",
  },
  {
    title: "SEO",
    description:
      "We consider your target audience and ensure your site and content are optimized to reach that audience, then we provide a tailored content strategy to help you maintain and improve your rankings.",
    icon: "bx:bxs-file-find",
  },
  {
    title: "Custom App Dev",
    description:
      "If you've got a problem that is specific to your business and lacks a solution, we help you solve it.",
    icon: "bxl:dev-to",
  },
];
</script>

<template>
  <LandingContainer>
    <LandingFeatures
      :features="services"
      heading="Services"
      tagline="We're here to help you create the best possible experiences for your customers."
    ></LandingFeatures>
    <LandingHero></LandingHero>
  </LandingContainer>
</template>
