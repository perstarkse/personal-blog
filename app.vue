<template>
  <Navbar />
  <NuxtPage />
</template>

<script>
import { defineNuxtComponent } from "nuxt/app";
import Navbar from "~/components/Navbar.vue";

export default defineNuxtComponent({
  components: {
    Navbar,
  },
  setup() {
    // Setup logic here
  },
});
</script>
