<script setup>
import { solutions } from '~/data/solutions'
// const features = [
//   {
//     title: "Reach",
//     description:
//       "96% of all clicks are Google's first page, and the top three positions deliver 58% of traffic. Where do you show up?",
//     icon: "bxs:paper-plane",
//     slug: '',
//   },
//   {
//     title: "Readiness",
//     description:
//       "Does your business answer the phone EVERY time it rings? Studies show that at least 40% of prospects are lost because their call was missed. Stop missing calls.",
//     icon: "mdi:people-group",
//     slug: '',
//   },
//   {
//     title: "Reputation",
//     description:
//       "What are people saying about your business online? 72% of U.S. consumers said they research companies through social channels before making purchases.",
//     icon: "mdi:thumbs-up",
//     slug: '',
//   },
//   {
//     title: "Remarket/Resell",
//     description:
//       "On average it costs 5 times more to acquire a new customer than it does to sell new services to an existing customer.",
//     icon: "mdi:email",
//     slug: '',
//   },

// ];

useSeoMeta({
  title: "",
})
</script>

<template>
  <Hero></Hero>
  <!-- <CallOut /> -->
  <!-- <Features :features="features" url-base="/services"></Features> -->
  <!-- <Logos></Logos> -->
  <section class="flex flex-col bg-slate-100 px-8 md:px-24 py-12 mt-8 md:mt-0 rounded-md">
    <h2 class="text-5xl md:text-6xl font-semibold text-slate-800 mx-auto">Three Clear Stages of Growth</h2>
    <div class="flex flex-col md:flex-row justify-between mt-12">
      <div class="flex flex-col text-center my-4">
        <NuxtImg
          class="mx-auto"
          src="/img/attract-circle.png"
          width="140"
          height="140"
        />
        <h3 class="block text-3xl font-semibold text-slate-800 mt-4">Attract</h3>
        <h4 class="block text-xl text-slate-800">Reach x Reputation</h4>
        <p class="block text-slate-500 max-w-56 text-sm mt-4 mx-auto">Bring more prospects into your world and build a reputation that makes them want to do business with you.</p>
      </div>
      <NuxtPicture
        class="md:my-auto my-4 mx-auto"
        src="/img/right-chevrons.png"
        width="54"
      />
      <div class="flex flex-col text-center my-4">
        <NuxtImg
          class="mx-auto"
          src="/img/convert-circle.png"
          width="140"
          height="140"
        />
        <h3 class="block text-3xl font-semibold text-slate-800 mt-4">Convert</h3>
        <h4 class="block text-xl text-slate-800">Readiness x Remarketing</h4>
        <p class="block text-slate-500 max-w-56 text-sm mt-4 mx-auto">Turn interest into action by being ready to respond and staying top-of-mind with your prospects.</p>
      </div>
      <NuxtPicture
        class="md:my-auto my-4 mx-auto"
        src="/img/right-chevrons.png"
        width="54"
      />
      <div class="flex flex-col text-center my-4">
        <NuxtImg
          class="mx-auto"
          src="/img/retain-circle.png"
          width="140"
          height="140"
        />
        <h3 class="block text-3xl font-semibold text-slate-800 mt-4">Retain</h3>
        <h4 class="block text-xl text-slate-800">Reliability x Resell</h4>
        <p class="block text-slate-500 max-w-56 text-sm mt-4 mx-auto">Deliver the experience your customers expect, then keep them coming back for more.</p>
      </div>
    </div>
  </section>
  <section class="flex flex-col px-8 md:px-24 py-12 mt-8 md:mt-0 rounded-md">
    <h2 class="text-5xl md:text-6xl font-semibold text-slate-800 mx-auto">Your Growth, Powered by Smart Solutions</h2>
    <p class="text-lg text-slate-700 mt-6 text-center">Whether you need more leads, more sales, or more freedom in your day, our platform delivers. Explore our key solutions, each designed to help your business thrive, no complicated tech, no endless to-do lists.</p>
    <Features :features="solutions" url-base="/solutions" />
  </section>
  <Cta location="Home"></Cta>
</template>
