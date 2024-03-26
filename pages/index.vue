<template>
  <main>
    <section>
      <ContentDoc path="/sections/_intro" />
    </section>
    <section>
      <h2 class="mt-0 text-purple-400 mb-0">Latest Posts:</h2>
      <PostList :limit="5" />
    </section>
  </main>
</template>
<script setup lang="ts">
import PostList from "~/components/PostList.vue";
</script>
