<template>
  <div>
    <breadcrumbs :title="$options.name" :crumbs="crumbs" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/App/Breadcrumbs.vue'
export default {
  name: 'Blog',
  components: {
    Breadcrumbs
  },
  data: () => ({
    crumbs: [
      ['Beranda', '/'],
      ['Blog', '/blog']
    ]
  })
}
</script>

<style lang="scss" scoped>

</style>
