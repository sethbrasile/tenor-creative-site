<template>
  <div class="max-w-sm mt-20 p-4 shadow-lg rounded-lg">
      <div class="flex justify-between pb-4">
          <p class="font-bold text-xl">{{ title }}</p>
      </div>
      <ul class="flex flex-col pl-1">
        <li class="border-b py-2"
          v-for="link in links"
          :key="link.title">
          <NuxtLink

            :to="link.url"
            target="_blank"
            :external="true"
          >
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
  </div>
</template>

<script lang="ts" setup>
interface Link {
  title: string
  url: string
}
defineProps<{
  links: Link[]
  title: string
}>()
</script>
<style>

</style>
