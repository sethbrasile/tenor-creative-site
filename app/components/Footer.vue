<script setup>
const menuitems = [
  {
    title: "Privacy",
    path: "/privacy-policy",
  },
  {
    title: "Terms",
    path: "/terms",
  },
];
</script>

<template>
  <footer class="my-20 w-full">
    <nav
        class="w-full mt-2 flex"
      >
        <ul class="flex flex-row gap-3 m-auto">
          <li v-for="item of menuitems">
            <NuxtLink
              :to="item.path"
              class="flex px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
        <!-- <div class="lg:hidden flex items-center mt-3 gap-4">
          <CtaLink href="#" styleName="muted" block size="md"
            >Log in</CtaLink
          >
          <CtaLink href="#" size="md" block>Sign up</CtaLink>
        </div> -->
      </nav>
    <p class="text-center text-sm text-slate-500">
      Copyright © {{ new Date().getFullYear() }} Tenor Creative LLC. All rights reserved.
    </p>
  </footer>
</template>
