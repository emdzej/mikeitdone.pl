<script setup lang="ts">
import { withBase } from 'vitepress'
import type { Post } from '../../posts.data'

defineProps<{ posts: Post[] }>()
</script>

<template>
  <ul class="post-list">
    <li v-for="post in posts" :key="post.url" class="post-card">
      <h3 class="post-card__title">
        <a :href="withBase(post.url)">{{ post.title }}</a>
      </h3>
      <div class="post-card__date">{{ post.date.string }}</div>
      <p v-if="post.excerpt" class="post-card__excerpt">{{ post.excerpt }}</p>
      <div v-if="post.tags.length" class="tag-row">
        <span v-for="tag in post.tags" :key="tag" class="tag">#{{ tag }}</span>
      </div>
    </li>
    <li v-if="!posts.length" class="post-count">Brak wpisów.</li>
  </ul>
</template>
