<template>
  <Container>
    <Sectionhead align="center">
      <template v-slot:title>Contact</template>
      <template v-slot:desc>Let's have a chat.</template>
    </Sectionhead>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="font-medium text-2xl text-gray-800">
          Schedule a free consultation
        </h2>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          Let us know what your availability looks like and we'll get back to you asap to schedule something.
        </p>
        <div class="mt-5">
          <!-- <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:map-marker" />
            <span>Durant, OK</span>
          </div> -->
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:envelope" /><a
              href="mailto:sales@tenorcreative.com"
              >sales@tenorcreative.com</a
            >
          </div>
          <!-- <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:phone" /><a
              href="tel:+1 (234) 5678 999"
              >+1 (234) 5678 999</a
            >
          </div> -->
        </div>
      </div>
      <div>
        <Contactform />
      </div>
    </div>
  </Container>
</template>
