<script setup>
const team = [
  {
    name: "Seth Brasile",
    title: "Founder, Solutions Engineer and Primary Developer",
    linkedIn: "https://www.linkedin.com/in/seth-brasile-43a315a0/",
    location: "Durant, OK",
    extra: `Founder of and author at <a target="_blank" class="underline" href="https://bytemycache.com">byteMyCache</a>`,
    avatar: {
      src: '/img/team/seth.webp',
      width: 400,
      height: 400,
    },
  },
  {
    name: "Michele Pulec",
    title: "Sales and Customer Success",
    linkedIn: "https://www.linkedin.com/in/michelepulec/",
    location: "Gainesville, TX",
    avatar: {
      src: '/img/team/michele.webp',
      width: 400,
      height: 400,
    },
  },
  {
    name: "Derek Wood",
    title: "Creative Director and UI/UX Engineer",
    linkedIn: "https://www.linkedin.com/in/derekthomaswood/",
    location: "South Pasadena, CA",
    extra: `Founder of and mentor/director at <a target="_blank" class="underline" href="https://perpetual.education">perpetual.education</a>`,
    avatar: {
      src: '/img/team/derek.webp',
      width: 400,
      height: 400,
    },
  },
  {
    name: "Noah Weir",
    title: "Security and Operations Engineer",
    linkedIn: "https://www.linkedin.com/in/noahweir/",
    location: "Potterville, MI",
    avatar: {
      src: '/img/team/noah.webp',
      width: 400,
      height: 400,
    },
  }
];
</script>

<template>
  <Container>
    <Sectionhead>
      <template v-slot:title>About us</template>
      <template v-slot:desc>
        <p>Our team has built, hosted, maintained, and consulted for many successful sites, SaaS products, mobile apps, and more.</p>

        <p>
          We specialize in recognizing your unique needs and tailoring our solutions to meet them. We're here to find a solution that provides the best possible experience for your customers, and the highest
          possible ROI.
        </p>
      </template>
    </Sectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <!-- <h2 class="font-bold text-3xl text-gray-800">
        Empowering businesses one site at a time.
      </h2> -->
    </div>
    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-12">
      <div v-for="item of team" class="group">
        <div class="w-full">
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

        <NuxtLink :to="item.linkedIn" class="text-sm text-slate-500 underline">LinkedIn</NuxtLink>
        <h4 v-if="item.extra" v-html="item.extra" class="text-sm text-slate-500"></h4>
      </div>
    </div>
    <Cta location="About" />
  </Container>
</template>
