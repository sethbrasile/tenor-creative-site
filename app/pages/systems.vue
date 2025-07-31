<template>
<Container>
  <NuxtLink v-if="$route.params.slug" :to="'/systems'" class="flex items-center text-slate-500 hover:text-slate-700 transition-colors text-lg">
    <Icon name="mdi:arrow-left" />
    Back to systems
  </NuxtLink>
  <NuxtPage :slug="$route.params.slug" />
</Container>
</template>
