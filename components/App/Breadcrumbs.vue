<template>
  <div class="app-breadcrumbs">
    <div class="app-breadcrumbs__bg" />
    <div class="app-breadcrumbs__wrapper container mx-auto">
      <ul
        v-if="crumbs.length > 1"
        role="navigation"
        class="app-breadcrumbs__paths"
      >
        <li
          v-for="(c, index) in crumbs"
          :key="index"
          class="app-breadcrumbs__path-link"
        >
          <nuxt-link
            :to="c[1]"
            :exact-active-class="null"
            :active-class="null"
          >
            {{ c[0] }}
          </nuxt-link>
          <span
            v-if="index < crumbs.length - 1"
            class="app-breadcrumbs__path-separator"
          >
            /
          </span>
        </li>
      </ul>
      <div class="app-breadcrumbs__current-path">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    crumbs: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.app-breadcrumbs {
  &__bg {
    left: 0;
    right: 0;
    height: 3.5rem;
    box-shadow: 0 8px 36px -10px rgba(96,125,139, 0.2);

    @apply z-10 absolute
    mx-4 rounded-md
    bg-white;

    @screen sm {
      height: 6rem;
      @apply mx-0 rounded-none;
    }
  }

  &__wrapper {
    height: 3.5rem;
    @apply relative z-10
    px-4
    flex flex-col justify-center;

    @screen sm {
      height: 6rem;
      @apply px-0;
    }
  }

  &__current-path {
    @apply text-teal-500 text-lg font-bold;

    @screen md {
      @applt text-xl;
    }
  }

  &__paths {
    @apply hidden justify-start items-center
    text-blue-grey-200;

    @screen sm {
      @apply inline-flex;
    }
  }

  &__path-link {
    @apply mx-0
    text-sm tracking-wide;
  }

  &__path-separator {
    @apply mx-1;
  }
}
</style>
