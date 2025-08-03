<template>
<Container>
  <NuxtLink v-if="$route.params.slug" :to="'/services'" class="flex items-center text-slate-500 hover:text-slate-700 transition-colors text-lg">
    <Button class="flex items-center gap-2">
      <Icon name="mdi:arrow-left" />
      Back to services
    </Button>
  </NuxtLink>
  <NuxtPage :slug="$route.params.slug" />
</Container>
</template>
