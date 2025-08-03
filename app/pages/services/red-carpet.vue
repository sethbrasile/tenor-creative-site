<template>
  <Container>
    <NuxtLink :to="'/services'" class="flex items-center text-slate-500 hover:text-slate-700 transition-colors text-lg">
      <Button class="flex items-center gap-2">
        <Icon name="mdi:arrow-left" />
        Back to services
      </Button>
    </NuxtLink>

    <Sectionhead>
      <template v-slot:title>Red Carpet Lead Generation System</template>
      <template v-slot:desc>You're driving traffic to your website, but 95-97% of visitors leave without taking action. That's money walking out the door.</template>
    </Sectionhead>

    <div class="space-y-5 mt-4">
      <p class="text-lg">

      </p>
      <!-- Intro Video Here! -->
      <!-- <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
          <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
        </svg>
          <span class="sr-only">Loading...</span>
      </div> -->

      <Sectionhead>
        <template v-slot:title><span class="subheading">What if you could turn those anonymous visitors into eager leads?</span></template>
        <template v-slot:desc><span class="text-lg text-slate-900">Introducing the <strong class="font-semibold">Red Carpet Lead Generation System</strong> - your all-in-one solution to greet, engage, and convert website visitors on autopilot.</span></template>
      </Sectionhead>

      <p class="text-xl font-semibold pt-2">Why It Works:</p>
      <ul class="list-none space-y-3 pl-0">
        <li class="flex items-start">
          <span class="mr-2 text-2xl">🚀</span>
          <p><strong class="font-semibold">Proactive Engagement:</strong> A sleek, multi-step pop-up, takeover form, or chat widget invites visitors to connect the moment they land.</p>
        </li>
        <li class="flex items-start">
          <span class="mr-2 text-2xl">📈</span>
          <p><strong class="font-semibold">86% Higher Conversions:</strong> Multi-step forms outperform basic forms by 86% (HubSpot). Yet, only 40% of businesses use them.</p>
        </li>
        <li class="flex items-start">
          <span class="mr-2 text-2xl">✨</span>
          <p><strong class="font-semibold">Fully Automated Follow-Ups:</strong> Every lead is nurtured with personalized email/SMS campaigns to resell, reactivate, and build loyalty.</p>
        </li>
      </ul>

      <p class="text-xl font-semibold pt-2">The Stats Don't Lie:</p>
      <blockquote class="border-l-4 pl-4 py-2 italic">
        <p><em>"49.7% of marketers say web forms are their #1 lead generation tool."</em> (HubSpot)<br><em>"96% of visitors aren't ready to buy—but they WILL convert with the right engagement."</em> (Neil Patel)</p>
      </blockquote>

      <p class="text-lg"><strong class="font-semibold">We Handle Everything For You:</strong><br>
        <span class="flex items-start">✅ Custom-branded lead capture forms</span>
        <span class="flex items-start">✅ Seamless CRM/email integration</span>
        <span class="flex items-start">✅ Follow-up and remarketing campaigns to continue nurturing leads</span>
        <span class="flex items-start">✅ Mobile + desktop optimized</span>
        <!--<span class="flex items-start">✅ Monthly message updates to keep campaigns fresh</span>-->
      </p>

      <p class="text-lg">
        <strong class="font-semibold text-2xl">The easiest, most affordable way to grow your leads.</strong><br>
        Stop pouring money into ads pointed at a leaky funnel. Fix the funnel first! Capture the traffic you already have!
      </p>

      <Cta
        location="lead-gen"
        name="lead-gen"
        heading="Roll out Your Red Carpet"
        description="Included in all of our Growth System plans, or available ala-carte"
        button-text="Start converting visitors today"
        to="/pricing"
      />
    </div>
  </Container>
</template>
