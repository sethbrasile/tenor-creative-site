<script setup>
const team = [
  {
    name: "Seth Brasile",
    title: "Founder, Marketing Systems Developer",
    linkedIn: "https://www.linkedin.com/in/seth-brasile-43a315a0/",
    location: "Durant, OK",
    extra: `Founder and author at <a target="_blank" class="underline" href="https://bytemycache.com">byteMyCache</a>`,
    avatar: {
      src: '/img/team/seth.webp',
      width: 400,
      height: 400,
    },
  },
  {
    name: "Noah Weir",
    title: "Wordpress Expert, Security Specialist",
    extra: "We do our best to steer folks away from Wordpress where we can, but sometimes Wordpress is the best solution, and Noah is the best man to manage it.",
    linkedIn: "https://www.linkedin.com/in/noahweir/",
    location: "Potterville, MI",
    avatar: {
      src: '/img/team/noah.webp',
      width: 400,
      height: 400,
    },
  }
];

useSeoMeta({
  title: "About Us | Tenor Creative",
  description: "Learn how Tenor Creative helps local service businesses grow with simplified marketing tech, SEO, and CRM automation.",
})
</script>

<template>
  <Sectionhead>
    <template v-slot:title>The Mission Behind Tenor</template>
    <template v-slot:desc>
      <p>Empowering local service businesses with simplified marketing tech that actually works.</p>
    </template>
  </Sectionhead>

  <!-- Empathy Section -->
  <MarketingStoryBrandSection layout="left-image" bgVariant="gray">
    <template #subtitle>We Understand</template>
    <template #title>Running a business is hard enough.</template>
    <template #description>
      <p>You didn't start your business to become a tech expert or a full-time marketer. You started it to serve your customers and build something meaningful. But in today's world, if your tech isn't working, your business isn't growing.</p>
      <p class="mt-4">The frustration of broken websites, confusing SEO, and leads falling through the cracks is real. We've been there, and we're here to help you get past the headaches and back to what you do best.</p>
    </template>
    <template #image>
      <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80" alt="Team collaborating" class="rounded-xl shadow-2xl ring-1 ring-slate-900/10" />
    </template>
  </MarketingStoryBrandSection>

  <!-- Authority Section -->
  <MarketingStoryBrandSection layout="right-image">
    <template #subtitle>Our Expertise</template>
    <template #title>Proven systems for local growth.</template>
    <template #description>
      <p>At Tenor Creative, we don't just build websites; we build growth engines. By focusing on the "Essentials"—Web Design, Local SEO, and CRM Automation—we provide the highest leverage tools for service-based businesses.</p>
      <ul class="mt-8 space-y-4 text-slate-600">
        <li class="flex gap-x-3">
          <span class="font-semibold text-slate-900">Web Design:</span> High-performance, mobile-first sites that convert visitors into leads.
        </li>
        <li class="flex gap-x-3">
          <span class="font-semibold text-slate-900">Local SEO:</span> Dominating local search so customers find you first.
        </li>
        <li class="flex gap-x-3">
          <span class="font-semibold text-slate-900">CRM Automation:</span> Streamlining lead follow-up and customer management with GoHighLevel.
        </li>
      </ul>
    </template>
    <template #image>
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" alt="Data and strategy" class="rounded-xl shadow-2xl ring-1 ring-slate-900/10" />
    </template>
  </MarketingStoryBrandSection>

  <!-- Mission/Vision -->
  <MarketingStoryBrandSection layout="centered" bgVariant="light">
    <template #subtitle>The Vision</template>
    <template #title>Empowering the local economy.</template>
    <template #description>
      <p>We believe that local service businesses are the backbone of our communities. Our mission is to level the playing field by providing the same high-level marketing technology used by enterprise brands, but simplified and accessible for the small business owner.</p>
    </template>
  </MarketingStoryBrandSection>

  <!-- Team Section -->
  <section class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Meet the Team</h2>
        <p class="mt-6 text-lg leading-8 text-slate-600">A small, dedicated team of specialists focused on your success.</p>
      </div>
      <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <li v-for="person in team" :key="person.name">
          <div class="relative overflow-hidden rounded-2xl bg-slate-100 px-8 py-10 text-center shadow-sm">
            <h3 class="text-base font-semibold leading-7 tracking-tight text-slate-900">{{ person.name }}</h3>
            <p class="text-sm leading-6 text-slate-600">{{ person.title }}</p>
            <p class="mt-4 text-sm leading-6 text-slate-500" v-html="person.extra"></p>
            <div class="mt-6 flex justify-center gap-x-6">
              <a :href="person.linkedIn" target="_blank" class="text-slate-400 hover:text-slate-500">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-1.127-.022-2.436-1.485-2.436-1.485 0-1.713 1.159-1.713 2.355v4.259H7.804V7.804h2.56v1.164h.035c.357-.674 1.228-1.385 2.528-1.385 2.704 0 3.203 1.778 3.203 4.092v4.663zM4.96 6.64a1.536 1.536 0 110-3.072 1.536 1.536 0 010 3.072zm1.334 9.698H3.628V7.804h2.665v8.534z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <MarketingNeedMore />

  <Cta location="About" />
</template>

<style scoped lang="postcss">
</style>
