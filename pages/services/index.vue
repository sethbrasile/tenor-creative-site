<script setup>
definePageMeta({
  layout: "landing",
});

const services = [
  // {
  //   name: "Content Strategy",
  //   title: "Focus on what matters",
  //   description:
  //     "Already understand your content strategy? That's great! If you don't though, we've got you covered.",
  //   icon: "~/assets/img/services/content-strategy.webp",
  //   iconWidth: 580,
  //   iconHeight: 580,
  //   link: "/contact",
  //   popular: true,
  //   button: {
  //     text: "Get Started",
  //     link: "/",
  //   },
  // },
  {
    name: "New Site",
    description:
      "Our team of experts are ready to take the reigns and build and manage your new site",
    icon: "~/assets/img/services/performance.webp",
    iconWidth: 580,
    iconHeight: 580,
    link: "/services/new-site",
    button: {
      text: "What does this look like?",
    },
  },
  {
    name: "SEO",
    description:
      "We take a look at your existing site and content and make sure it's optimized for search engines.",
    icon: "~/assets/img/services/seo.webp",
    iconWidth: 580,
    iconHeight: 580,
    link: "/services/seo",
    button: {
      text: "What can you do for my SEO?",
    },
  },
  {
    name: "Custom App Development",
    description:
      "If you've got a problem that is specific to your business and lacks a solution, we help you solve it.",
    icon: "~/assets/img/services/app-development.webp",
    iconWidth: 580,
    iconHeight: 580,
    link: "/services/app-development",
    button: {
      text: "I do have this one problem...",
    },
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Services</template>
      <template v-slot:desc>We're here to help you create the best possible experiences for your customers.</template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-16">
      <div v-for="item of services" :class="['group']">
        <!-- <div class="w-full aspect-square">
          <img
            :src="item.icon"
            :width="item.iconWidth"
            :height="item.iconHeight"
            format="avif"
            :alt="item.title"
            class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
          />
        </div> -->

        <div class="mt-4 text-center">
          <h2 class="heading">{{ item.name }}</h2>
        </div>
        <p class="text">{{ item.description }}</p>
        <div class="mt-4">
          <LandingLink
            :href="item.link"
            block
            styleName="primary"
          >
            {{ item.button.text || "Get Started" }}
          </LandingLink>
        </div>
      </div>
    </div>
  </LandingContainer>
</template>
