<template>
  <Menu as="div" class="relative inline-block">
    <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-slate-500 hover:bg-slate-50">
      {{ title }}
      <ChevronDownIcon class="-mr-1 size-5 text-slate-400" aria-hidden="true" />
    </MenuButton>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute bg-white right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg outline outline-1 outline-black/5">
        <div class="py-1">
          <MenuItem v-for="item in items" v-slot="{ active }">
            <a :href="item.to" :class="[active ? 'bg-slate-100 text-slate-900 outline-none' : 'text-slate-700', 'block px-4 py-2 text-sm']"><Icon class="text-white -translate-y-1 -translate-x-0.5 text-3xl" :name="item.icon" /> {{ item.title }}</a>
          </MenuItem>
          <!-- <form method="POST" action="#">
            <MenuItem v-slot="{ active }">
              <button type="submit" :class="[active ? 'bg-slate-100 text-slate-900 outline-none' : 'text-slate-700', 'block w-full px-4 py-2 text-left text-sm']">Sign out</button>
            </MenuItem>
          </form> -->
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

interface DropDownItem {
  to: string;
  title: string;
  icon: string;
}

defineProps<{ title: string, items: DropDownItem[] }>()
</script>
