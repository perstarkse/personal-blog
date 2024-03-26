<template>
  <ContentList :query="query">
    <template #default="{ list }">
      <div v-for="article in list" :key="article._path">
        <a
          ><NuxtLink :to="article._path">
            <div class="flex items-center gap-2">
              <h2>{{ article.title }}</h2>
              <span>{{ article.date }}</span>
            </div>
          </NuxtLink></a
        >
        <p>{{ article.description }}</p>
      </div>
    </template>
    <template #not-found>
      <p>No articles found.</p>
    </template>
  </ContentList>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const props = defineProps<{
  limit: number;
}>();

const query: QueryBuilderParams = {
  path: "/posts",
  limit: props.limit || 5,
  sort: [{ date: -1 }],
};
</script>
