<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { data as posts } from '../../posts.data'
import PostItems from './PostItems.vue'

// Params are injected by the dynamic route (kategorie/[category].paths.ts).
const { params } = useData()

const cat = computed(() => params.value as {
  name: string
  icon: string
  description: string
  tags: string[]
})

const matched = computed(() =>
  posts.filter((p) => p.tags.some((t) => cat.value.tags.includes(t)))
)
</script>

<template>
  <h1>{{ cat.icon }} {{ cat.name }}</h1>
  <p>{{ cat.description }}</p>
  <p class="post-count">
    Tagi: {{ cat.tags.map((t) => '#' + t).join(' · ') }}
  </p>
  <PostItems :posts="matched" />
</template>
