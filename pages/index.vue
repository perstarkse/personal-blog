<template>
  <main>
    <PostList :limit="5" />
  </main>
</template>
<script setup lang="ts">
import PostList from "~/components/PostList.vue";
</script>
