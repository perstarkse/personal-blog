<template>
  <header>
    <nav class="flex justify-between pt-2">
      <div class="flex gap-4">
        <a><NuxtLink to="/">Home</NuxtLink></a>
        <a><NuxtLink to="/posts">Posts</NuxtLink></a>
        <a><NuxtLink to="/about">About</NuxtLink></a>
      </div>
      <div class="flex gap-4">
        <a
          href="https://github.com/perstarkse"
          target="_blank"
          rel="noopener noreferrer"
          ><font-awesome :icon="faGithub"
        /></a>
        <a
          href="https://www.linkedin.com/in/per-stark/"
          target="_blank"
          rel="noopener norefferer"
        >
          <font-awesome :icon="faLinkedin" />
        </a>
        <a href="mailto:perstark.se@gmail.com">
          <font-awesome :icon="faEnvelope" />
        </a>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "Navbar",
  data() {
    return {
      faGithub,
      faLinkedin,
      faEnvelope,
    };
  },
};
</script>
