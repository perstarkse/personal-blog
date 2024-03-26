<template>
  <main>
    <h2 class="text-purple-400">Previous Posts:</h2>
    <PostList :limit="100" />
  </main>
</template>

<script setup lang="ts">
import PostList from "~/components/PostList.vue";
</script>
