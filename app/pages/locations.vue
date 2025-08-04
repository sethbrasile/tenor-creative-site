<script setup>
  const locations = [
    {
      name: "Durant, OK",
      // title: "Seth Brasile local to Durant",
      avatar: {
        src: '/img/locations/durant.png',
        width: 305,
        height: 80,
      },
    },
    {
      name: "Sherman, TX",
      // title: "Seth and Michele both local to Sherman",
      avatar: {
        src: '/img/locations/sherman.png',
        width: 305,
        height: 80,
      },
    },
    {
      name: "Gainesville, TX",
      // title: "Michele Pulec local to Gainesville",
      avatar: {
        src: '/img/locations/gainesville.png',
        width: 305,
        height: 80,
      },
    },
  ]

  useSeoMeta({
    title: "Locations",
  })
</script>

<template>
  <Sectionhead>
    <template v-slot:title>Physical Locations Served</template>
    <template v-slot:desc>
      We're a remote-first company and we can help you no matter where you are!
      That said, we're <i>physically</i> located around Sherman, TX and the surrounding areas.
      <br /><br />
      If you're local to us and would like to grab lunch or a coffee, or have us in to your business location, we'd love to meet up and have a chat!
      <br /><br />
      If you're in need of in-person photos, video, or other media services, we have a few great local media partners
      that we would be glad to refer.
    </template>
  </Sectionhead>

  <div class="grid md:grid-cols-3 gap-10 mx-auto mt-16">
    <div v-for="item of locations" :class="['group']">
      <div class="w-full">
        <NuxtPicture
          :src="item.avatar.src"
          :width="item.avatar.width"
          :height="item.avatar.height"
          format="avif"
          :alt="item.name"
          class="w-full h-full object-cover rounded"
        />
      </div>

      <div class="mt-4">
        <h2 class="heading">{{ item.name }}</h2>
        <h3 class="text-sm text-slate-500">{{ item.title }}</h3>
      </div>
    </div>
  </div>

  <Cta location="Locations" />
</template>
