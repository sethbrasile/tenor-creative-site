<script setup>
const features = [
  {
    title: "Bring your own content, or use ours",
    description:
      "Already understand your content strategy? That's great! If you don't though, we've got you covered.",
    icon: "bx:bxs-book-content",
  },
  {
    title: "Extreme performance",
    description:
      "Our number 1 priority is your site's performance, which means better user experiences and higher engagement.",
    icon: "bx:bxs-fast-forward-circle",
  },
  {
    title: "SEO optimized",
    description:
      "Great performance scores, great content and great user experiences mean great SEO.",
    icon: "bx:bxs-file-find",
  },
];
</script>

<template>
  <LandingContainer>
    <LandingHero></LandingHero>
    <LandingFeatures :features="features"></LandingFeatures>
    <!-- <LandingLogos></LandingLogos> -->
    <LandingCta></LandingCta>
  </LandingContainer>
</template>
