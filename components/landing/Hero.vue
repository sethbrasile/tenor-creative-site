<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <NuxtPicture
        format="avif,webp"
        src="/img/hero.webp"
        width="428"
        height="428"
        alt="People sitting in a cafe on laptops happily coding"
        :imgAttrs="{ class: 'rounded-r-full' }"
      />
    </div>
    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        Focus on what matters
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Our goal is to help you create the best possible
        experiences for your customers, while empowering you to stay
        focused on your business.
      </p>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Let us do the web stuff.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="/contact"
          rel="noopener"
          >Get Started</LandingLink
        >
      </div>
    </div>
  </main>
</template>
