<script setup>
definePageMeta({
  layout: "landing",
});

const TeamImg1 = "https://placehold.co/480x560"
const TeamImg2 = "https://placehold.co/480x560"
const TeamImg3 = "https://placehold.co/480x560"
const TeamImg4 = "https://placehold.co/480x560"

const team = [
  {
    name: "Seth Brasile",
    title: "CEO, Founder and Solutions Engineer",
    avatar: {
      src: TeamImg1,
      width: 480,
      height: 560,
    },
  },
  {
    name: "Michele Pulec",
    title: "Sales and Customer Success",
    avatar: {
      src: TeamImg2,
      width: 580,
      height: 580,
    },
  },
  {
    name: "Derek Wood",
    title: "Creative Director and Experience Engineer",
    avatar: {
      src: TeamImg3,
      width: 580,
      height: 580,
    },
  },
  {
    name: "Noah Weir",
    title: "Security and Operations Engineer",
    avatar: {
      src: TeamImg4,
      width: 580,
      height: 580,
    },
  }
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Who we are</template>
      <template v-slot:desc>Our team has built many successful websites, SaaS products, mobile apps, government projects and more.</template>
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <!-- <h2 class="font-bold text-3xl text-gray-800">
        Empowering businesses one site at a time.
      </h2> -->
      <!-- <p class="text-lg leading-relaxed text-slate-500">
        We're a multi-cultural team from around the world! We come from diverse
        backgrounds, bringing different personalities, experiences and skills to
        the job. This is what makes our team so special.
      </p> -->
    </div>
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12">
      <div v-for="item of team" class="group">
        <div class="w-full aspect-square">
          <img
            :src="item.avatar.src"
            :width="item.avatar.width"
            :height="item.avatar.height"
            format="avif"
            alt="Team"
            class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
          />
        </div>

        <div class="mt-4 text-center">
          <h2 class="text-lg text-gray-800">{{ item.name }}</h2>
          <h3 class="text-sm text-slate-500">{{ item.title }}</h3>
        </div>
      </div>
      <!-- {
        team.map((item) => (
          <div class="group">
            <div class="w-full aspect-square">
              <Image
                {...item.avatar}
                format="avif"
                alt="Team"
                class="w-full h-full object-cover rounded transition  group-hover:-translate-y-1 group-hover:shadow-xl"
              />
            </div>

            <div class="mt-4 text-center">
              <h2 class="text-lg text-gray-800"> {item.name}</h2>
              <h3 class="text-sm text-slate-500"> {item.title}</h3>
            </div>
          </div>
        ))
      } -->
    </div>
  </LandingContainer>
</template>
