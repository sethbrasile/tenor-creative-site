<script setup>
const features = [
  {
    title: "Reach",
    description:
      "96% of all clicks are Google's first page, and the top three positions deliver 58% of traffic. Where do you show up?",
    icon: "bxs:paper-plane",
    slug: '',
  },
  {
    title: "Readiness",
    description:
      "Does your business answer the phone EVERY time it rings? Studies show that at least 40% of prospects are lost because their call was missed. Stop missing calls.",
    icon: "mdi:people-group",
    slug: '',
  },
  {
    title: "Reputation",
    description:
      "What are people saying about your business online? 72% of U.S. consumers said they research companies through social channels before making purchases.",
    icon: "mdi:thumbs-up",
    slug: '',
  },
  {
    title: "Remarket/Resell",
    description:
      "On average it costs 5 times more to acquire a new customer than it does to sell new services to an existing customer.",
    icon: "mdi:email",
    slug: '',
  },

];

useSeoMeta({
  title: "",
})
</script>

<template>
  <Hero></Hero>
  <CallOut />
  <Features :features="features" url-base="/services"></Features>
  <!-- <Logos></Logos> -->
  <Cta location="Home"></Cta>
</template>
