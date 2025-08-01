<template>
  <Container>
    <Sectionhead>
      <template v-slot:title>Thank you!</template>
      <template v-slot:desc>
        <p>We are so excited to work with you!</p>
        <p>We need two things from you.</p>
        <p class="text-sm">(If you lose track of this page, no big deal, these will also be arriving in a next-steps email from our team.)</p>
      </template>
    </Sectionhead>

    <ul class="list-decimal mt-4 space-y-2 text-lg">
      <li>
        1. Please <NuxtLink target="_blank" class="underline text-slate-900" to="/audit-survey">complete your audit survey</NuxtLink> at your earliest convenience (definitely before your audit review call).
      </li>
      <li>
        2. Let's <NuxtLink target="_blank" class="underline text-slate-900" to="/booking-audit">get your audit call scheduled</NuxtLink>!
      </li>
    </ul>
  </Container>
</template>
