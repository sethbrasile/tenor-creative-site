<script setup>
definePageMeta({
  layout: "landing",
});

const team = [
  {
    name: "Seth Brasile",
    title: "CEO, Founder and Solutions Engineer",
    link: "https://www.linkedin.com/in/seth-brasile-43a315a0/",
    location: "Durant, OK",
    avatar: {
      src: '/img/team/seth.jpeg',
      width: 400,
      height: 400,
    },
  },
  {
    name: "Michele Pulec",
    title: "Sales and Customer Success",
    link: "https://www.linkedin.com/in/michelepulec/",
    location: "Gainesville, TX",
    avatar: {
      src: '/img/team/michele.jpeg',
      width: 400,
      height: 400,
    },
  },
  {
    name: "Derek Wood",
    title: "Creative Director and UI/UX Engineer",
    link: "https://www.linkedin.com/in/derekthomaswood/",
    location: "South Pasadena, CA",
    avatar: {
      src: 'https://placehold.co/400x400',
      width: 400,
      height: 400,
    },
  },
  {
    name: "Noah Weir",
    title: "Security and Operations Engineer",
    link: "https://www.linkedin.com/in/noahweir/",
    location: "Potterville, MI",
    avatar: {
      src: '/img/team/noah.jpeg',
      width: 400,
      height: 400,
    },
  }
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Who We Are</template>
      <template v-slot:desc>Our team has built, hosted, maintained, and consulted for many successful sites, SaaS products, mobile apps, and more.</template>
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <!-- <h2 class="font-bold text-3xl text-gray-800">
        Empowering businesses one site at a time.
      </h2> -->
      <p class="text-lg leading-relaxed text-slate-500">
        Our team specializes in recognizing your unique needs and tailoring our solutions to meet them. Sometimes the right call is the "cookie cutter"
        approach, and sometimes it's not. We're here to find a solution that provides the best possible experience for your customers, and the highest
        possible ROI.
      </p>
    </div>
    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-12">
      <div v-for="item of team" class="group">
        <NuxtLink :to="item.link">
          <div class="w-full aspect-square">
            <NuxtPicture
              format="avif,webp"
              :src="item.avatar.src"
              :width="item.avatar.width"
              :height="item.avatar.height"
              :alt="item.name"
              class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
            />
          </div>

          <div class="mt-4">
            <h2 class="heading">{{ item.name }}</h2>
            <h3 class="text-sm text-slate-500">{{ item.title }}</h3>
            <h4 class="text-sm text-slate-500">{{ item.location }}</h4>
          </div>
        </NuxtLink>
      </div>
    </div>
  </LandingContainer>
</template>
