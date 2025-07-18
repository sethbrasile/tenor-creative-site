<script setup>
const features = [
  {
    title: "Web Design",
    description:
      "We design websites that are fast, secure, and provide a great experience for your customers.",
    icon: "bx:book-content",
  },
  {
    title: "SEO",
    description:
      "With an emphasis on local SEO where it makes sense, let our experts ensure that you reach your target audience.",
    icon: "bx:map",
  },
  {
    title: "Google Business Profile Management",
    description:
      "We'll take care of your Google Business Profile so that you can focus on your business.",
    icon: "bxs:business",
  },
  // {
  //   title: "Content",
  //   description:
  //     "Content is how you stand out from your competition on the web. We provide data-driven content strategies, or we can even write content for you.",
  //   icon: "bx:book-content",
  // },
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
