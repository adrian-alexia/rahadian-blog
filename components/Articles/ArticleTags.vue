<template>
  <ul role="list" class="tags">
    <li
      v-for="(tag, index) in tags"
      :key="index"
      class="tags__tag"
    >
      {{ tag.title }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  gap: 0.5rem;
  @apply flex flex-row flex-wrap
  justify-start items-baseline text-xs;

  &__tag {
    padding: 0.25em 0.5em;
    @apply
    inline-block
    rounded-sm
    bg-blue-grey-50 text-blue-grey-400;
  }
}
</style>
