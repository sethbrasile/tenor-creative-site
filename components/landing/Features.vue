<script setup>
const features = [
  {
    title: "Bring your own content, or use ours",
    description:
      "Already understand your content strategy? That's great! If you don't though, we've got you covered.",
    icon: "bx:bxs-book-content",
  },
  {
    title: "Extreme performance",
    description:
      "Our number 1 priority is your site's performance, which means better user experiences and higher engagement.",
    icon: "bx:bxs-fast-forward-circle",
  },
  {
    title: "SEO optimized",
    description:
      "Great performance scores, great content and great user experiences mean great SEO.",
    icon: "bx:bxs-file-find",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Your web presence, handled.
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      From landing pages and SEO to blogs and blog content, all the way to custom app development, we've got you covered.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
