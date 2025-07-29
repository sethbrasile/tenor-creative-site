<template>
<Container>
  <NuxtLink v-if="$route.params.slug" :to="'/services'" class="flex items-center text-slate-500 hover:text-slate-700 transition-colors text-lg">
    <Icon name="mdi:arrow-left" />
    Back to services
  </NuxtLink>
  <NuxtPage :slug="$route.params.slug" />
</Container>
</template>
