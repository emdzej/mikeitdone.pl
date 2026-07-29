<script setup lang="ts">
import { withBase } from 'vitepress'
import { data as posts } from '../../posts.data'
import { categories } from '../../categories'

function count(tags: string[]) {
  return posts.filter((p) => p.tags.some((t) => tags.includes(t))).length
}
</script>

<template>
  <div class="cat-grid">
    <a
      v-for="cat in categories"
      :key="cat.slug"
      class="cat-card"
      :href="withBase(`/kategorie/${cat.slug}`)"
    >
      <div class="cat-card__icon">{{ cat.icon }}</div>
      <div class="cat-card__name">{{ cat.name }}</div>
      <p class="cat-card__desc">{{ cat.description }}</p>
      <div class="cat-card__count">{{ count(cat.tags) }} wpisów</div>
    </a>
  </div>
</template>
