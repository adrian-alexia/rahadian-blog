<template>
  <div class="article-author-timestamp">
    <avatar-circle :author="article.author" />
    <div class="ml-2">
      <span class="text-blue-grey-700 font-bold">
        {{ article.author.nickname }}
      </span>
      <br>
      <span>
        <date-time>
          {{ article.published_at }}
        </date-time>
      </span>
    </div>
  </div>
</template>

<script>
import AvatarCircle from '../Avatar/AvatarCircle.vue'
import DateTime from '../DateFormatter/DateTime.vue'
export default {
  components: { AvatarCircle, DateTime },
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.article-author-timestamp {
  @apply inline-flex flex-row justify-start items-center
  text-sm;
}
</style>
