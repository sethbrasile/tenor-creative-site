<script setup>
const menuitems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "AI Voice Demo",
    path: "/demo",
  },
  {
    title: "Solutions",
    path: "/services",
  },
  {
    title: "Pricing",
    path: "/pricing",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const open = ref(false);
</script>

<template>
    <header class="flex flex-col lg:flex-row justify-between items-center my-5">
      <div class="flex w-full lg:w-auto items-center justify-between">
        <a href="/" class="text-lg content-center grid grid-cols-2 w-14">
          <NuxtPicture
            format="png"
            src="/img/logo-with-text.svg"
            alt="Tenor"
            class="w-56"
          />
          <!-- <div>
            <span class="font-bold text-slate-800">Tenor</span>
            <span class="text-slate-500">Creative</span>
          </div> -->
        </a>
        <div class="block lg:hidden">
          <button @click="open = !open" class="text-slate-800">
            <svg
              fill="currentColor"
              class="w-4 h-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                v-show="open"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
              ></path>
              <path
                v-show="!open"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <nav
        class="w-full mt-2 p-4 lg:w-auto lg:flex lg:mt-0 border lg:border-none"
        :class="{ block: open, hidden: !open }"
      >
        <ul class="flex flex-col lg:flex-row lg:gap-3">
          <li v-for="item of menuitems">
            <NuxtLink
              :to="item.path"
              class="flex lg:px-3 py-2 text-slate-600 hover:text-slate-900"
              @click="open = false"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
        <div class="lg:hidden flex items-center mt-3 gap-4">
          <CtaLink href="https://app.tenorcreative.com" styleName="muted" block size="md"
            >Log in</CtaLink
          >
          <CtaLink href="/pricing" size="md" block @click="open = false">Sign up</CtaLink>
        </div>
      </nav>
      <div>
        <div class="hidden lg:flex items-center gap-4">
          <a href="https://app.tenorcreative.com">Log in</a>
          <CtaLink href="/pricing" size="md" @click="open = false">Sign up</CtaLink>
        </div>
      </div>
    </header>
</template>
