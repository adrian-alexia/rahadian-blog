<template>
  <header class="app-navbar">
    <nuxt-link
      to="/"
      class="app-navbar__title">
      {{ title }}
    </nuxt-link>
    <div class="hidden sm:block">
      <ul class="inline-flex justify-start items-center">
        <li v-for="(menu, index) in menuItems" :key="index">
          <nuxt-link
            class="app-navbar__menu-item"
            active-class="is-active"
            v-bind="menu">
            {{ menu.label }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    menuItems: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.app-navbar {
  @apply py-6
  flex flex-row justify-center items-stretch;

  &__title {
    @apply text-blue-grey-300 text-lg font-bold;
  }

  &__menu-item {
    @apply ml-4
    text-blue-grey-300 text-sm font-bold;

    &.is-active {
      @apply text-teal-700-accent;
    }
  }
}

@screen sm {
  .app-navbar {
    @apply justify-between;
  }
}
</style>
