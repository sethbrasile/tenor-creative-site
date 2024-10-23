<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Custom Software Development</template>
      <template v-slot:desc>No matter the scope, we're here to help you understand your problem and find a solution.</template>
    </LandingSectionhead>

    <h2 class="text-3xl font-bold text-gray-800 mt-4">What does this look like?</h2>

    <ol class="text space-y-4 list-decimal list-inside mt-4">
      <li>
        We meet with our Sales team to discuss your needs and ensure there's a good fit between your needs and our services.
      </li>
      <li>
        We all agree that we have a great fit and we meet with our Solutions and Creative teams to outline your needs in technical terms and discuss the scope of your problem and the solutions that are available.
      </li>
      <li>
          Our Engineering team creates a proposal describing the solution that we believe will be the most effective for your needs. A couple of notes on our team and our process:
          <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>We always lean in the direction of "the simpler the better," and strongly believe that over-engineering and over-planning for the future does not tend to pay off, it tends to be wasted energy. Pausing and taking a moment to really question whether some complex system is actually necessary will always provide a great ROI.</li>
            <li>It is very common to identify a prebuilt solution that already exists and may just requiring adapting to your problem domain.</li>
          </ul>
      </li>
      <li>We meet to discuss the proposal and you love it.</li>
      <li>We implement the solution and your problem is solved.</li>
    </ol>
  </LandingContainer>
</template>
