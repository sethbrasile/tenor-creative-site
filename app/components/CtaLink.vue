<script setup lang="ts">
interface Props {
  href: string;
  size?: "md" | "lg";
  block?: boolean;
  ctaName?: "missing name";
  styleName?: "outline" | "primary" | "inverted" | "muted";
  className?: string;
  disabled?: boolean;
  [x: string]: any;
}

withDefaults(defineProps<Props>(), {
  size: "lg",
  styleName: "primary",
});

const sizes: any = {
  lg: "px-6 py-4",
  md: "px-4 py-2",
};

const styles: any = {
  outline: "bg-white border-2 border-black hover:bg-slate-100 text-slate-900",
  primary: "bg-slate-900 text-white hover:bg-slate-800 border-2 border-transparent",
  inverted: "bg-white text-slate-900 border-2 border-transparent",
  muted: "bg-slate-100 color-red hover:bg-slate-200 border-2 border-transparent",
  highlight: "bg-slate-900 hover:bg-slate-800 text-white font-light uppercase",
  pop: "bg-teal-900 hover:bg-teal-800 text-white font-light uppercase",
};
</script>

<template>
  <NuxtLink
    :data-umami-event="ctaName"
    :disabled="disabled"
    :href="href"
    :class="[
      'rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-slate-200',
      block && 'w-full',
      disabled && 'opacity-80',
      sizes[size],
      styles[styleName],
    ]"
    ><slot />
  </NuxtLink>
</template>
