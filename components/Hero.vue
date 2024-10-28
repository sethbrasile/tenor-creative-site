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
      <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
        Web design, digital marketing, hosting and more
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        From simple web sites and blogs, all the way to custom app development, we've got you covered.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <CtaLink
          href="/contact"
          rel="noopener"
          >Get Started</CtaLink
        >
      </div>
    </div>
  </main>
</template>
