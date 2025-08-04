<script lang="ts" setup>
  const landingLinks = [
    {
      title: "Static Landing 1",
      url: "https://static-landing-example-1.tenorcreative.com",
    },
    {
      title: "Static Landing 2",
      url: "https://static-landing-example-2.tenorcreative.com",
    },
    {
      title: "Static Landing 3",
      url: "https://static-landing-example-3.tenorcreative.com",
    },
    {
      title: "Static Landing 4",
      url: "https://static-landing-example-4.tenorcreative.com",
    },
  ]

  const blogLinks = [
    {
      title: "Static Blog 1",
      url: "https://static-blog-example-1.tenorcreative.com",
    },
  ]
  useSeoMeta({
    title: "Sample Sites",
  })
</script>

<template>
  <Sectionhead>
    <template #title>Sample Sites</template>
    <template #desc>
      While we're more than happy to help you build or host a Wordpress site, most are better off without Wordpress, so you'll see that all of our examples are static.
    </template>
  </Sectionhead>
  <div class="grid md:grid-cols-3">
    <LinksListCard
      :links="landingLinks"
      title="Static Landing"
    />
    <LinksListCard
      :links="blogLinks"
      title="Static Blogs"
    />
  </div>
</template>

<style scoped>
a {
  text-decoration: underline;
}
</style>
