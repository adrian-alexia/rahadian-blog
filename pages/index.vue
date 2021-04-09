<template>
  <div class="container">
    <breadcrumbs
      :title="$options.name"
      :crumbs="crumbs"
    />
    <article-hero>
      <template #img>
        <chip class="bg-teal-700-accent text-white text-xs">
          Terbaru
        </chip>
      </template>
    </article-hero>
  </div>
</template>

<script>
import Breadcrumbs from '~/components/App/Breadcrumbs.vue'
import ArticleHero from '~/components/Articles/ArticleHero.vue'
import Chip from '~/components/Chips/Chip.vue'
export default {
  name: 'Beranda',
  components: {
    Breadcrumbs,
    ArticleHero,
    Chip
  },
  data: () => ({
    crumbs: [
      ['Beranda', '/']
    ]
  })
}
</script>
