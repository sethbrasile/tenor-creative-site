<script setup>
// const team = [
//   {
//     name: "Seth Brasile",
//     title: "Founder, Marketing Systems Developer",
//     linkedIn: "https://www.linkedin.com/in/seth-brasile-43a315a0/",
//     location: "Durant, OK",
//     extra: `Founder and author at <a target="_blank" class="underline" href="https://bytemycache.com">byteMyCache</a>`,
//     avatar: {
//       src: '/img/team/seth.webp',
//       width: 400,
//       height: 400,
//     },
//   },
//   // {
//   //   name: "Michele Pulec",
//   //   title: "Bizdev, Sales and Customer Success",
//   //   linkedIn: "https://www.linkedin.com/in/michelepulec/",
//   //   location: "Gainesville, TX",
//   //   avatar: {
//   //     src: '/img/team/michele.webp',
//   //     width: 400,
//   //     height: 400,
//   //   },
//   // },
//   // {
//   //   name: "Derek Wood",
//   //   title: "Creative Director and UI/UX Engineer",
//   //   linkedIn: "https://www.linkedin.com/in/derekthomaswood/",
//   //   location: "South Pasadena, CA",
//   //   extra: `Founder, director and mentor at <a target="_blank" class="underline" href="https://perpetual.education">perpetual.education</a>`,
//   //   avatar: {
//   //     src: '/img/team/derek.webp',
//   //     width: 400,
//   //     height: 400,
//   //   },
//   // },
//   {
//     name: "Noah Weir",
//     title: "Wordpress Expert, Security Specialist",
//     extra: "We do our best to steer folks away from Wordpress where we can, but sometimes Wordpress is the best solution, and Noah is the best man to manage it.",
//     linkedIn: "https://www.linkedin.com/in/noahweir/",
//     location: "Potterville, MI",
//     avatar: {
//       src: '/img/team/noah.webp',
//       width: 400,
//       height: 400,
//     },
//   }
// ];

useSeoMeta({
  title: "About Us",
})
</script>

<template>
  <Sectionhead>
    <template v-slot:title>About us</template>
    <template v-slot:desc>
      <p>Who are we? What are we about?</p>
    </template>
  </Sectionhead>

  <section class="py-12">
    <p class="text mb-4">We're Tenor Creative, and We're Here to Help You Grow.</p>
    <p class="text mb-4">Based in North Texas / Southern Oklahoma, our passion is helping local service businesses reach new customers, maximize relationships with existing customers, and empower them with technology that will enrich their business and create freedom without creating new headaches.</p>
    <p class="text mb-4 ">Our mission? To help businesses work smarter, not harder—with a blend of modern marketing, automation, and a little bit of tech magic behind the scenes. (Okay, a lot of tech magic.)</p>
    <p class="text">We believe that every business—big or small—deserves tools and strategies that make life easier and growth faster. Whether you're looking for more leads, better systems, or just want to take a break from the busywork, we're the partner you can count on.</p>
  </section>

  <Cta location="About" />
</template>

<style scoped lang="postcss">
.text {
  font-size: 1rem;
  &:nth-child(odd) {
    font-size: 1.2rem;
    @apply text-slate-900 font-semibold;
   }
}
</style>
