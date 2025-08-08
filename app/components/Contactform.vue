<script setup>
  const form = reactive({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    phone: "",
  });

  const result = ref("");
  const errorState = ref(false);

  const submitForm = async () => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      const json = await response.json();
      if (response.status == 200) {
        result.value = json.message;
        errorState.value = false
        form.firstname = "";
        form.lastname = "";
        form.email = "";
        form.message = "";
        form.phone = "";
      } else {
        result.value = json.message;
        errorState.value = true
      }
    } catch (error) {
      errorState.value = true
    }
  }
</script>

<template>
  <form @submit.prevent="submitForm">
    <input
      type="checkbox"
      class="hidden"
      style="display: none"
      name="botcheck"
    />
    <div class="mb-5">
      <input
        v-model="form.firstname"
        type="text"
        placeholder="First Name"
        required
        class="w-full px-4 py-3 border-2 placeholder:text-slate-800 rounded-md outline-none focus:ring-4 border-slate-300 focus:border-slate-600 ring-slate-100"
        name="firstname"
      />
    </div>
    <div class="mb-5">
      <input
        v-model="form.lastname"
        type="text"
        placeholder="Last Name"
        required
        class="w-full px-4 py-3 border-2 placeholder:text-slate-800 rounded-md outline-none focus:ring-4 border-slate-300 focus:border-slate-600 ring-slate-100"
        name="lastname"
      />
    </div>
    <div class="mb-5">
      <label for="email" class="sr-only">Email Address</label
      ><input
        v-model="form.email"
        type="email"
        placeholder="Email Address"
        name="email"
        required
        class="w-full px-4 py-3 border-2 placeholder:text-slate-800 rounded-md outline-none focus:ring-4 border-slate-300 focus:border-slate-600 ring-slate-100"
      />
    </div>
    <div class="mb-5">
      <input
        v-model="form.phone"
        type="text"
        placeholder="Phone (optional)"
        class="w-full px-4 py-3 border-2 placeholder:text-slate-800 rounded-md outline-none focus:ring-4 border-slate-300 focus:border-slate-600 ring-slate-100"
        name="lastname"
      />
    </div>
    <div>
      <textarea
        v-model="form.message"
        name="message"
        required
        placeholder="Your message...&#13;&#10;&#13;&#10;How did you hear about us?&#13;&#10;How can we help?"
        class="w-full px-4 py-3 border-2 placeholder:text-slate-800 rounded-md outline-none h-36 focus:ring-4 border-slate-300 focus:border-slate-600 ring-slate-100"
      ></textarea>
    </div>
    <p v-if="errorState" class="text-red-800 text-sm mt-3 mb-3">
      Something went wrong! Please try again or send us an email at <a href="mailto:sales@tenorcreative.com">sales@tenorcreative.com</a>
    </p>
    <div v-if="result" id="result" class="mt-3 mb-3 text-center">{{ result }}</div>
    <Button type="submit" size="lg" block data-umami-event="Contact Form Submit">Send Message</Button>
  </form>
</template>
