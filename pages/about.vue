<template>
  <div>
    <breadcrumbs :title="$options.name" :crumbs="crumbs" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/App/Breadcrumbs.vue'
export default {
  name: 'Tentang',
  components: {
    Breadcrumbs
  },
  data: () => ({
    crumbs: [
      ['Beranda', '/'],
      ['Tentang', '/about']
    ]
  })
}
</script>

<style lang="scss" scoped>

</style>
