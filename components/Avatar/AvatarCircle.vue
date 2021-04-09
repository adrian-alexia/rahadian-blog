<template>
  <figure class="avatar-circle">
    <img :src="avatarUrl">
    <figcaption class="sr-only">
      {{ author.nickname }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    },
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    avatarUrl () {
      if (!this.author) {
        return null
      }
      return this.$strapiURL(this.author.avatar.formats.small.url)
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-circle {
  overflow: hidden;
  width: 36px;
  height: 36px;
  border-radius: 72px;
  padding: 4px;
  @apply inline-block bg-white;

  > img {
    border-radius: inherit;
    @apply block w-full h-full
    object-center object-cover
  }
}
</style>
