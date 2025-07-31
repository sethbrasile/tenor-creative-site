<script setup>
const features = [
  {
    title: "Reputation",
    description:
      "What are people saying about your business online? 72% of U.S. consumers said they research companies through social channels before making purchases.",
    icon: "mdi:thumbs-up",
    slug: 'reputation',
  },
  {
    title: "Readiness",
    description:
      "Are you ready to convert leads into customers? Does your team capture 100% of leads? Studies show that 40%-65% of leads are missed simply because their call was missed and no one immediately followed up.",
    icon: "mdi:people-group",
    slug: 'readiness',
  },
  {
    title: "Remarket/Resell",
    description:
      "Are you maximizing the value of your existing customer base? On average it costs 5 times more to acquire a new customer than it does to sell new services to an existing customer.",
    icon: "mdi:email",
    slug: 'remarket',
  },
  {
    title: "Reach",
    description:
      "Where do you show up? 95.91% of all clicks occur on page 1 of Google, and the top three positions deliver 58.4% of traffic.",
    icon: "bxs:paper-plane",
    slug: 'reach',
  },
];

useSeoMeta({
  title: "",
})
</script>

<template>
  <Container>
    <Hero></Hero>
    <CallOut />
    <Features :features="features" url-base="the-4-rs"></Features>
    <!-- <Logos></Logos> -->
    <Cta location="Home"></Cta>
  </Container>
</template>
