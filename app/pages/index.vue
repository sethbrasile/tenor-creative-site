<script setup>
const features = [
  {
    title: "Reputation",
    description:
      "What are people saying about your business online? 72% of U.S. consumers said they research companies through social channels before making purchases.",
    icon: "mdi:thumbs-up",
  },
  {
    title: "Reach",
    description:
      "Where do you show up? 95.91% of all clicks occur on page 1 of Google, and the top three positions deliver 58.4% of traffic.",
    icon: "bxs:paper-plane",
  },
  {
    title: "Resell",
    description:
      "Are you maximizing the value of your existing customer base? On average it costs 5 times more to acquire a new customer than it does to sell new services to an existing customer.",
    icon: "mdi:database-sync",
  },
  {
    title: "Referral",
    description:
      "Do you have a program to systematically gain quality referrals from current customers? FACT: Referrals spend more, convert better and shop faster.",
    icon: "mdi:people-group",
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
    <Features :features="features"></Features>
    <!-- <Logos></Logos> -->
    <Cta location="Home"></Cta>
  </Container>
</template>
