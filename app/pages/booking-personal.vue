<template>
  <Container>
    <Sectionhead>
      <template v-slot:title>Seth Brasile's Personal Calendar</template>
      <template v-slot:desc>
        This calendar is for non-customers/non-prospects. If you ended up here, you are a friend, a peer, a mentor, etc.. Thank you for taking the time to speak with me!
      </template>
    </Sectionhead>

    <p class="mt-4">If you are a customer/prospect, please use <NuxtLink class="underline" to="/booking">this calendar</NuxtLink> instead.
      You will receive better service. I have systems in place over there to help serve you!</p>

    <BookingForm form-id="aRNGagoZBqgXKJ92L6mC" />
  </Container>
</template>
