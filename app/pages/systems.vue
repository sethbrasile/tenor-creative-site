<template>
  <NuxtLink v-if="$route.params.slug" :to="'/systems'" class="flex items-center text-slate-500 hover:text-slate-700 transition-colors text-lg">
    <Button class="flex items-center gap-2">
      <Icon name="mdi:arrow-left" />
      Back to systems
    </Button>
  </NuxtLink>
  <NuxtPage :slug="$route.params.slug" />
</template>
