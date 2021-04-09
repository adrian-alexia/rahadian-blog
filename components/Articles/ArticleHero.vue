<template>
  <div
    v-if="article"
    class="article-hero"
  >
    <div
      class="article-hero__img-container"
      :style="{
        backgroundImage: `url(${$strapiURL(article.thumbnail.url)})`
      }"
    >
      <div
        v-if="$slots.img"
        class="absolute z-10 p-4"
        style="top: 0; left: 0;"
      >
        <slot name="img" />
      </div>
    </div>
    <div class="article-hero__content-overlay">
      <h2 class="article-hero__title">
        {{ article.title }}
      </h2>
      <p class="article-hero__description">
        {{ article.description }}
      </p>
      <article-author-and-timestamp
        class="mb-4"
        :article="article"
      />
      <article-tags :tags="article.tags" />
      <hr class="my-8 md:hidden">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ArticleAuthorAndTimestamp from './ArticleAuthorAndTimestamp.vue'
import ArticleTags from './ArticleTags.vue'
export default {
  components: { ArticleAuthorAndTimestamp, ArticleTags },
  computed: {
    ...mapState('articles', {
      article: 'latestItem'
    })
  }
}
</script>

<style lang="scss" scoped>
.article-hero {
  @apply relative w-full my-8;

  &__img-container {
    $ratio: 16/9;
    padding: ((1 / $ratio) * 100% / 2) 0;
    background-position: center;
    background-size: cover;
    border-radius: 4px;
    overflow: hidden;
    @apply relative;
  }

  &__content-overlay {
    @apply block;
  }

  &__title {
    @apply
    my-2 text-left text-lg
    text-blue-grey-800
    font-bold;
  }

  &__description {
    @apply mb-8 text-left;
  }
}

@screen md {
  .article-hero {
    &__content-overlay {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 4px;
      overflow: hidden;

      background-color: rgba(0, 0, 0, 0.1);
      backdrop-filter: brightness(50%);
      @apply
      absolute
      p-8
      flex flex-col
      justify-center items-center
      text-center;
    }

    &__title {
      @apply max-w-lg
      text-white text-xl
      font-bold;
    }

    &__description {
      @apply max-w-lg
      text-white text-base;
    }
  }
}
</style>
