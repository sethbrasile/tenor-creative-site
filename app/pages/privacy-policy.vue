<template>
  <Container>
    <h1 class="text-3xl font-bold mb-6">Privacy Policy</h1>
    <p class="italic mb-8"><strong>Last Updated:</strong> July 31, 2025</p>

    <div class="space-y-8">
      <section>
        <h2 class="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p class="mb-4">Tenor Creative LLC ("we," "us," or "our") collects information that identifies, relates to, or could reasonably be linked to you ("Personal Information"), including:</p>
        <ul class="list-disc pl-8 space-y-2">
          <li><strong>Contact Details:</strong> Name, email, phone number, business name, and job title</li>
          <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage patterns</li>
          <li><strong>Marketing Interactions:</strong> Responses to ads, content downloads, and engagement</li>
          <li><strong>Payment Data:</strong> Billing information and transaction details (processed by Stripe)</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">2. How We Collect Information</h2>
        <ul class="list-disc pl-8 space-y-2">
          <li><strong>Directly From You:</strong> Via forms, requests, or communications</li>
          <li><strong>Automatically:</strong> Through cookies and analytics tools (Google Analytics/Umami)</li>
          <li><strong>Third Parties:</strong> From CRM platforms and marketing partners</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
        <p class="mb-4">We use Personal Information to:</p>
        <ul class="list-disc pl-8 space-y-2">
          <li>Deliver and market our growth systems</li>
          <li>Send newsletters, SMS, and email communications</li>
          <li>Analyze engagement through analytics</li>
          <li>Facilitate payments and scheduling</li>
        </ul>
        <p class="font-bold">We never sell or share your Personal Information.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
        <p>We only share data with:</p>
        <ul class="list-disc pl-8 mt-2 space-y-2">
          <li><strong>Service Providers:</strong> Essential partners bound by confidentiality</li>
          <li><strong>Legal Compliance:</strong> When required by law</li>
          <li><strong>Business Transfers:</strong> During mergers or acquisitions</li>
          <li>No mobile information will be shared with third parties or affiliates for marketing/promotional purposes</li>
          <li>Text messaging originator opt-in data and consent will not be shared with any third parties, except for aggregators and providers of the Text Message services</li>
          <li>All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Message services.</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
        <p class="mb-4">We use cookies for:</p>
        <ul class="list-disc pl-8 space-y-2">
          <li>Essential functions (chat widgets, payments)</li>
          <li>Analytics via Google Analytics and self-hosted Umami</li>
          <li>Marketing campaign attribution</li>
        </ul>
        <p class="mt-4">Manage preferences through your browser settings.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">6. Data Retention & Security</h2>
        <ul class="list-disc pl-8 space-y-2">
          <li><strong>Retention:</strong> Only as long as necessary for business purposes</li>
          <li><strong>Security:</strong> Industry-standard protections including encryption</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">7. Your Rights</h2>
        <p class="mb-4">You may:</p>
        <ul class="list-disc pl-8 mb-4 space-y-2">
          <li>Access, correct, or delete your information</li>
          <li>Opt-out of marketing communications</li>
          <li>Request data portability</li>
        </ul>
        <p>Contact us at support@tenorcreative.com to exercise these rights.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
        <p>Our site may link to external services like Stripe. We don't control their privacy practices.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
        <p>Our services are not intended for users under 18 years of age.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">10. Policy Updates</h2>
        <p>Changes will be posted here with a revised "Last Updated" date.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">11. Contact Us</h2>
        <p class="mb-2">For questions regarding this Privacy Policy:</p>
        <ul class="list-disc pl-8 space-y-2">
          <li><strong>Email:</strong> support@tenorcreative.com</li>
          <li><strong>Address:</strong> Tenor Creative LLC, Durant, OK</li>
        </ul>
      </section>
    </div>

    <div class="mt-12 p-4 border-t">
      <p class="italic">
        <span class="font-semibold">Note:</span> Tenor Creative LLC uses self-hosted Umami analytics for enhanced privacy.
        Google Analytics data is anonymized where possible. Payment processing is managed by Stripe
        (view <NuxtLink to="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" class="underline font-medium">Stripe's Privacy Policy</NuxtLink>).
      </p>
    </div>
  </Container>
</template>

<style lang="postcss" scoped>
section {
  @apply mb-4 py-2;
}
</style>
