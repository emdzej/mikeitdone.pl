<script setup lang="ts">
import { ref, computed } from 'vue'
import { data as posts } from '../../posts.data'
import PostItems from './PostItems.vue'

const active = ref<string[]>([])

const allTags = computed(() => {
  const set = new Set<string>()
  posts.forEach((p) => p.tags.forEach((t) => set.add(t)))
  return [...set].sort((a, b) => a.localeCompare(b, 'pl'))
})

function toggle(tag: string) {
  active.value = active.value.includes(tag)
    ? active.value.filter((t) => t !== tag)
    : [...active.value, tag]
}

function clear() {
  active.value = []
}

// AND filter: a post must carry every selected tag.
const filtered = computed(() =>
  active.value.length === 0
    ? posts
    : posts.filter((p) => active.value.every((t) => p.tags.includes(t)))
)
</script>

<template>
  <div class="tag-filter">
    <p class="tag-filter__label">
      Filtruj po tagach
      <button
        v-if="active.length"
        class="tag-filter__clear"
        @click="clear"
      >
        wyczyść ({{ active.length }})
      </button>
    </p>
    <div class="tag-row">
      <button
        v-for="tag in allTags"
        :key="tag"
        class="tag"
        :class="{ 'is-active': active.includes(tag) }"
        @click="toggle(tag)"
      >
        #{{ tag }}
      </button>
    </div>
  </div>

  <p class="post-count">
    {{ filtered.length }} z {{ posts.length }}
    {{ posts.length === 1 ? 'wpis' : 'wpisów' }}
  </p>

  <PostItems :posts="filtered" />
</template>
